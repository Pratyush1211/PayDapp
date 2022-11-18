import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Switch,
  KeyboardAvoidingView
} from "react-native";
import React, {useState} from "react";
import { auth } from '../firebase'

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

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const register = () => {
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            authUser.user.updateProfile({
                displayName: firstname + lastname,
                phonenumber: phoneno,
            });
            if( authUser ){
              navigation.replace('Add Payment Method')
            }
        })
        .catch((error) => alert(error.message));
};

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.LabelText}>First Name</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setfirstname}
            value={firstname}
          />
        </View>
        <View style={{ width: 28 }} />
        <View>
          <Text style={styles.LabelText}>Last Name</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={setlastname}
            value={lastname}
          />
        </View>
      </View>
      <View style={styles.wideInputContainer}>
        <Text style={styles.LabelText}>User name</Text>
        <TextInput
          style={[styles.inputText, { width: inputboxWidth }]}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.wideInputContainer}>
        <Text style={styles.LabelText}>Email Address</Text>
        <TextInput
          style={[styles.inputText, { width: inputboxWidth }]}
          onChangeText={setemail}
          value={email}
        />
      </View>

      <View style={styles.wideInputContainer}>
        <Text style={styles.LabelText}>Phone Number</Text>
        <TextInput
          style={[styles.inputText, { width: inputboxWidth }]}
          onChangeText={setphoneno}
          value={phoneno}
        />
      </View>

      <View style={styles.wideInputContainer}>
        <Text style={styles.LabelText}>Password</Text>
        <TextInput
          style={[styles.inputText, { width: inputboxWidth }]}
          onChangeText={setpassword}
          value={password}
        />
      </View>
      <Text style={styles.InfoText}>
        Password must be a minimum of 8 characters, with one uppercase letter,
        one number, and one special character.
      </Text>

      <View
        style={[styles.inputContainer, { margin: 10, alignItems: "center" }]}
      >
        <Text style={styles.LabelText}>Enable Biometric Login</Text>
        <View style={{ width: 150 }} />
        <Switch         onValueChange={toggleSwitch}
        value={isEnabled} />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={register}
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
  inputContainer: {
    flexDirection: "row",
  },
  LabelText: {
    fontWeight: "400",
    color: "black",
    fontSize: 14,
  },
  inputText: {
    marginTop: 5,
    height: 60,
    width: 160,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  wideInputContainer: {
    paddingTop: 28,
  },
  InfoText: {
    fontSize: 10,
    margin: 10,
    textAlign: "left",
  },
});
