import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Screenwidth } from "../../constants/Layout";
import ContactContainer from "../../components/ContactContainer";
import PrimaryButton from "../../components/PrimaryButton";

export default function ContactsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setname] = useState("");
  const [walletaddress, setwalletaddress] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 0, flexDirection: "row", alignItems: "center" }}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="plus" size={15} color={"#000"} />
          <Text style={{ color: "#000", fontSize: 12, marginHorizontal: 5 }}>
            Add Contact
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <FontAwesome5 name="arrow-left" size={18} color={"#000"} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Add Contact</Text>
          </View>
          <View style={{ height: 50 }} />
          <View style={styles.TextContainer}>
            <Text>Enter Contact's name</Text>
            <TextInput style={styles.inputContainer} />
          </View>

          <View style={styles.TextContainer}>
            <Text>Enter Wallet address</Text>
            <TextInput style={styles.inputContainer} />
          </View>
          <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}
          >
            <PrimaryButton title={"Add"} />
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={()=> navigation.navigate('Enter Amount')}>
      <ContactContainer />
      </TouchableOpacity>
      <ContactContainer />
      <ContactContainer />
      <ContactContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginLeft: 20,
    alignItems: "center",
  },

  TextContainer: {
    marginVertical: 15,
  },
  inputContainer: {
    height: 60,
    width: Screenwidth * 0.9,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#808080",
    fontSize: 15,
    fontWeight: "300",
    padding: 10,
    color: "#000",
  },
});
