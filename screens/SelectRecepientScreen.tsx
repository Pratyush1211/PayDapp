import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import { Avatar, Divider } from "react-native-paper";
import PrimaryButton from "../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";

const { name, role } = {
  name: "Freddy Sanchez",
  role: "freddy_sz12",
};

// const RecipientDetails = () => (
//   <>
//     <View style={styles.AvatarContainer}>
//       <Avatar.Image
//         size={45}
//         source={{
//           uri: "https://picsum.photos/700",
//         }}
//       />
//       <View style={styles.InfoContainer}>
//         <Text style={styles.InfoText}>{name}</Text>
//         <Text style={[styles.InfoText, { fontSize: 12 }]}>{role}</Text>
//       </View>
//     </View>
//     <Divider style={{ height: 1, color: "#AEAEAE", marginTop: 10 }} />
//   </>
// );

export default function SelectRecepientScreen({ navigation, route }) {
  const [receipient, setreceipient] = React.useState("");
  const [qrvalue, setqrcode] = React.useState("");
  const [amount, setamount] = React.useState("");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.Modalcontainer}>
          <Text style={styles.label}>Sending to: </Text>
          <Text style={styles.label}>walletaddress</Text>
          <TextInput
            style={styles.AmountText}
            placeholder="0 ETH"
            placeholderTextColor={"grey"}
            onChangeText={setamount}
            keyboardType={"number-pad"}
          />
          <View style={styles.ButtonAlignment}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Review & Send", {
                  // receiverwalletaddress: walletaddress,
                  amount: amount,
                })
              }
            >
              <PrimaryButton title={"Next"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <View style={styles.SearchInputContainer}>
        <FontAwesome5Icon name="search" size={20} color="#AEAEAE" />
        <TextInput
          style={[styles.input, { width: 350 }]}
          placeholder="Search name or username"
          placeholderTextColor={'#AEAEAE'}
          onChangeText={setreceipient}
          value={receipient}
        />
      </View> */}
      <TouchableOpacity
        style={styles.SearchInputContainer}
        // onPress={() => {
        //   navigation.navigate("Add Recipient");
        // }}
      >
        <FontAwesome5 name="qrcode" size={20} color="#FFF" />
        <Text style={[styles.input, { fontWeight: "700", color: "#FFF" }]}>
          Scan QR code
        </Text>
      </TouchableOpacity>
      <View>
        <Text style={{ textAlign: "center" }}>OR</Text>
      </View>
      <View style={styles.RecipientContainer}>
        <Text style={{ fontWeight: "600", color: "#121212" }}>
          Enter Recipient Manually
        </Text>
        <TextInput
          style={styles.InputContainer}
          placeholder="Enter username"
          placeholderTextColor={"#AEAEAE"}
          onChangeText={setqrcode}
          value={qrvalue}
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <PrimaryButton title={"Submit"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    color: "#121212",
  },
  InputContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 10,
  },
  SearchInputContainer: {
    margin: 20,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
  },
  RecipientContainer: {
    margin: 20,
  },
  AvatarContainer: {
    borderTopColor: "black",
    marginTop: 15,
    flexDirection: "row",
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
    flex: 1,
  },
  InfoText: {
    fontSize: 18,
    color: "black",
    fontWeight: "400",
  },
  Modalcontainer: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: 'center'
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    margin: 10,
  },
  AmountText: {
    height: 70,
    borderColor: "black",
    borderBottomWidth: 0.5,
    margin: 10,
    padding: 10,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
  },
  ButtonAlignment: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
});
