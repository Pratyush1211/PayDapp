import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState } from "react";

import { Screenwidth } from "../../constants/Layout";
import PrimaryButton from "../../components/PrimaryButton";

export default function CreateAccountScreen({ navigation }) {
  const screen = Dimensions.get("screen").width;
  const inputboxWidth = 0.88 * screen;

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [password, setpassword] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
          <Text>First name</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder="example: John"
            onChangeText={setfirstname}
            value={firstname}
          />
        </View>
        <View style={[styles.TextContainer]}>
          <Text>Last name</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder={"example: Doe"}
            onChangeText={setlastname}
            value={lastname}
          />
        </View>
      </View>

      <View style={styles.TextContainer}>
        <Text>Username</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text>Email Address</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text>Phone Number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"Enter username "}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.TextContainer}>
        <Text>Phone Number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={"example: 1234567890"}
          onChangeText={setusername}
          value={username}
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
            borderWidth: 0
          },
        ]}
      >
        <Text>Enable Biometric Login</Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Add Crypto Wallet")}
        style={{marginTop: 5}}
      >
        <Text>
          Creating an account{" "}
          <Text style={{ fontWeight: "600", color: "#000" }}>
            terms and conditions
          </Text>
        </Text>
        <PrimaryButton title={"Continue"} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 25,
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
  inputContainer: {
    height: 60,
    width: Screenwidth * 0.9,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: "#808080",
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
    color: "#000",
  },
});
