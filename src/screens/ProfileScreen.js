import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/AuthenticationSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import ProfileOptions from "../../components/ProfileOptions";
import { db } from "../services/firebase";
import PrimaryButton from "../../components/PrimaryButton";

const options = [
  {
    id: 1,
    OptionName: "Edit Profile",
    iconName: "user",
    ScreenName: "Edit Profile",
  },
  {
    id: 2,
    OptionName: "Payments",
    iconName: "credit-card",
    ScreenName: "Payments",
  },
  {
    id: 3,
    OptionName: "Notifications",
    iconName: "bell",
    ScreenName: "Edit Profile",
  },
  {
    id: 4,
    OptionName: "Help center",
    iconName: "comment-alt",
    ScreenName: "Edit Profile",
  },
];

const ProfileScreen = ({ navigation }) => {

  const [useruid, setuseruid] = useState();
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const connector = useWalletConnect();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchuser = async () => {
      setloading(true);
      const user = await AsyncStorage.getItem("@userdetails");
      const parsedUser = JSON.parse(user);
      setuseruid(parsedUser.uid);
      var userdetails = db.collection("users").doc(parsedUser.uid);
      userdetails
        .get()
        .then((doc) => {
          if (doc.exists) {
            // console.log("Document data:", doc.data());
            setuser(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
          setloading(false);
        })
        .catch((error) => {
          console.log("Error getting document:", error);
          setloading(false);
        });
    };
    fetchuser();
  }, []);

  const handleLogout = () => {
    dispatch(logout()).then(() => {
      ToastAndroid.show(
        "User and Wallet disconnected sucessfully",
        ToastAndroid.SHORT
      );
      connector.killSession();
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <ActivityIndicator size={'large'} color={'#000'}/>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.AvatarContainer}>
            <Avatar.Image
              size={90}
              source={{
                uri: "https://picsum.photos/700",
              }}
            />
            <View style={styles.InfoContainer}>
              <Text style={styles.InfoText}>
                {user.firstname} {user.lastname}
              </Text>
              <Text style={[styles.InfoText, { fontSize: 15 }]}>
                {user.username}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.id}
                onPress={() => navigation.navigate(option.ScreenName)}
              >
                <ProfileOptions
                  key={option.id}
                  OptionName={option.OptionName}
                  OptionDescription={option.OptionDescription}
                  iconName={option.iconName}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogout}>
            <PrimaryButton title={'Logout'}/>
          </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: 'center'
  },
  AvatarContainer: {
    borderTopColor: "black",
    marginTop: 15,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  InfoContainer: {
    marginTop: 18,
    marginLeft: 10,
    flex: 1,
  },
  InfoText: {
    fontSize: 20,
    color: "black",
    fontFamily: 'Poppins-Semibold'
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
