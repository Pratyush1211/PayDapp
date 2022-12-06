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
// import { auth } from "../firebase";

import PrimaryButton from "../../components/PrimaryButton";

const FingerPrint = require("../../assets/images/fingerprint.png");

export default function LoginScreen({ navigation }) {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser)=>{
//         if(authUser){
//           console.log(authUser)
//             navigation.replace("Root")
//         } 
//  });
//  }, []);


  // const SignIn = () => {
  //   auth
  //     .signInWithEmailAndPassword(username, password)
  //     .then((authUser) => {
  //       if (authUser) {
  //         navigation.navigate("Add Payment Method");
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

  return (
    <View style={styles.container}>

      <View style={styles.TextContainer}>
      <Text>Username</Text>
      <TextInput style={styles.inputContainer} placeholder={'Enter username '} onChangeText={setusername} value={username}/>
      </View>


      <View style={styles.TextContainer}>
      <Text>Password</Text>
      <TextInput style={styles.inputContainer} />
      </View>

      <View style={{ marginTop: 30 }}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Create Account')}}>
          <PrimaryButton title={"Login"} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          textAlign: "center",
          margin: 20,
          textDecorationLine: "underline",
        }}
      >
        Need Help logging in ?
      </Text>

      {/* Finger Print Functionality */}
      <View style={styles.FingerPrintContainer}>
        <Image source={FingerPrint} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Create Account")}>
        <Text style={{ textAlign: "center", textDecorationLine: "underline" }}>
          Sign Up
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
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  TextContainer: {
    marginVertical: 15,
  },
  inputContainer: {
    height: 60,
    width: Screenwidth * 0.90,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#808080',
    fontSize: 15,
    fontWeight: '300',
    padding: 10,
    color: '#000'
  },
  FingerPrintContainer: {
    margin: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
