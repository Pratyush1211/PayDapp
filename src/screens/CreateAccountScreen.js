import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Switch,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { db, auth } from "../services/firebase";

import { Screenwidth } from "../../constants/Layout";
import PrimaryButton from "../../components/PrimaryButton";

export default function CreateAccountScreen({ navigation }) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up
        return db
          .collection("users")
          .doc(userCredential.user.uid)
          .set({
            firstname: firstname,
            lastname: lastname,
            username: username,
            phone_number: phoneno,
          })
          .then(
            auth
              .signInWithEmailAndPassword(email, password)
              .then((userCredential) => {
                // Signed in
                var user = userCredential;
                console.log(user)
                var uid = userCredential.user.uid;
                var userDetails = db.collection("users").doc(uid);
                userDetails
                  .get()
                  .then((doc) => {
                    if (doc.exists) {
                      console.log("Document data:", doc.data());
                    } else {
                      // doc.data() will be undefined in this case
                      console.log("No such document!");
                    }
                  })
                  .catch((error) => {
                    console.log("Error getting document:", error);
                  });
              })
          )
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            width: Screenwidth * 0.9,
          },
        ]}
      >
        <View style={[styles.TextContainer, {}]}>
          <Text style={styles.label}>First name</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder="example: John"
            onChangeText={setfirstname}
            value={firstname}
          />
        </View>
        <View style={[styles.TextContainer]}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder={"example: Doe"}
            onChangeText={setlastname}
            value={lastname}
          />
        </View>
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setemail}
          value={email}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.label}>Passwordr</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setpassword}
          value={password}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"example: 1234567890"}
          onChangeText={setphoneno}
          value={phoneno}
        />
      </View>

      <Text style={styles.InfoText}>
        Password must be a minimum of 8 characters, with one uppercase letter,
        one number, and one special character.
      </Text>

      <View
        style={[
          styles.inputContainer,
          {
            margin: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            borderWidth: 0,
          },
        ]}
      >
        <Text style={styles.label}>Enable Biometric Login</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Text style={styles.label}>
        Creating an account{" "}
        <Text style={{ fontWeight: "600", color: "#000" }}>
          terms and conditions
        </Text>
      </Text>
      <TouchableOpacity activeOpacity={0.8} onPress={handleSignUp}>
        <PrimaryButton title={"Continue"} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 12,
  },
  InfoText: {
    fontSize: 10,
    marginTop: -10,
    marginBottom: 10,
    textAlign: "left",
  },

  TextContainer: {
    marginVertical: 15,
  },
  label: {
    fontSize: 15,
    color: "#000",
    marginBottom: 5,
    marginLeft: 5,
    fontFamily: "Poppins-Semibold",
  },
  inputContainer: {
    height: 60,
    width: Screenwidth * 0.9,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#000",
    fontSize: 15,
    padding: 10,
    color: "#000",
    fontFamily: "Poppins-Regular",
  },
});
