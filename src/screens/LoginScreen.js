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
import PrimaryButton from "../../components/PrimaryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FingerPrint = require("../../assets/images/fingerprint.png");

export default function LoginScreen({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [showpassword, setshowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/krinnxb23kgp75s0jyhp",
        }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "400",
          marginVertical: 5,
          color: "#00A0F3",
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
            navigation.navigate("Add Crypto Wallet");
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
    color: "#808080",
    marginBottom: 5,
    marginLeft: 5,
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
  },
  FingerPrintContainer: {
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
