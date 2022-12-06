import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

import { Screenwidth } from "../../constants/Layout";
import PrimaryButton from "../../components/PrimaryButton";

export default function AddCreditCardScreen({ navigation }) {
  const [name, setname] = useState("");
  const [creditcardno, setcreditcardno] = useState("");
  const [expirationdate, setexpirationdate] = useState("");
  const [securitycode, setsecuritycode] = useState("");
  const [zipcode, setzipcode] = useState("");

  return (
    // Name of card holder
    <View style={styles.container}>

      <View style={styles.TextContainer}>
        <Text>Name of card holder</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={""}
          onChangeText={setname}
          value={name}
        />
      </View>

      {/* credit card number */}
      <View style={styles.TextContainer}>
        <Text>CC Number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={""}
          onChangeText={setcreditcardno}
          value={creditcardno}
        />
      </View>

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
          <Text>Set Expiry Date</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder=""
            onChangeText={setexpirationdate}
            value={expirationdate}
          />
        </View>
        <View style={[styles.TextContainer]}>
          <Text>Last name</Text>
          <TextInput
            style={[styles.inputContainer, { width: 165 }]}
            placeholder={""}
            onChangeText={setsecuritycode}
            value={securitycode}
          />
        </View>
      </View>

      <View style={styles.TextContainer}>
        <Text>Zip Code</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={" "}
          onChangeText={setzipcode}
          value={zipcode}
        />
      </View>
      <View style={{ justifyContent: "flex-end", flex: 1, marginBottom: 10 }}>
        <PrimaryButton screen={""} title={"Add Card"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
