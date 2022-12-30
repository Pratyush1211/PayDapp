import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Screenwidth } from "../../constants/Layout";
import React, { useState, useEffect } from "react";
import { auth, db } from "../services/firebase";
import PrimaryButton from "../../components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FingerPrint = require("../../assets/images/fingerprint.png");

export default function LoginScreen({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  
  const SignIn = () => {
    auth
    .signInWithEmailAndPassword(username,password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential;
      var uid = userCredential.user.uid
      var userDetails = db.collection('users').doc(uid)
      userDetails.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      })
    })
    .catch(error=>alert("Register on App first or enter the credential carefully "));


};

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp",
        }}
        style={{ width: 120, height: 120, borderRadius: 50 }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "400",
          marginVertical: 5,
          color: "#00A0F3",
          fontFamily: 'Poppins-Semibold'
        }}
      >
        payDapp
      </Text>
      <View style={styles.TextContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={" @gmail.com "}
          placeholderTextColor={"#808080"}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 15, borderColor: '#808080'}}>
          <TextInput
            style={[styles.inputContainer, {width: Screenwidth*0.80, borderWidth: 0}]}
            placeholder={"**********"}
            placeholderTextColor={"#808080"}
            onChangeText={setpassword}
            value={password}
            secureTextEntry={!showpassword}
          />
          <MaterialCommunityIcons
            name={showpassword ? "eye-off" : "eye"}
            size={24}
            color="black"
            style={{ marginRight: 10  }}
            onPress={() => setshowpassword(!showpassword)}
          />
        </View>
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          onPress={() => {
            SignIn();
          }}
        >
          <PrimaryButton title={"Login"} />
        </TouchableOpacity>
      </View>

      {/* Finger Print Functionality */}
      <View style={styles.FingerPrintContainer}>
        <Image source={FingerPrint} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Create Account")}>
        <Text style={{ textAlign: "center", color: "#808080", fontSize: 12 }}>
          SIGN UP
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const screen = Dimensions.get("screen").width;
const inputboxWidth = 0.85 * screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  TextContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 15,
    color: "#000",
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: 'Poppins-Semibold'
  },
  inputContainer: {
    height: 60,
    width: Screenwidth * 0.9,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#808080",
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
    color: "#000",
    fontFamily: 'Poppins-Regular'
  },
  FingerPrintContainer: {
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
