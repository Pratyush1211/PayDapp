import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  SectionList
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { Screenwidth } from "../../constants/Layout";
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
          <FontAwesome5 name="plus" size={10} color={"#000"} />
          <Text style={{ color: "#000", fontSize: 10, marginHorizontal: 5 }}>
            Add Contact
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);



  const contacts = [{
    id: 1,
    name: "Kriti Motha",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 2,
    name: "Richa Motha",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 131,
    name: "Aman Kumar Sinha",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id:1232,
    name: "Vikas Mishra",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 2,
    name: "Ahona saha",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },

  {
    id: 3,
    name: "Karan Yuvraj Singh",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 4,
    name: "Chandramoli Pratap Singh Khatri",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 5,
    name: "Shivansh Goel",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 6,
    name: "Vanshika Mishra",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 7,
    name: "Shaan Sundar",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 8,
    name: "Pratyush Motha",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  }
]


  const getData = () => {
    let contactscollection = []
    let aCode = "A".charCodeAt(0)
    for (let i = 0; i < 26; i++) {
      let currentCharacter = String.fromCharCode(aCode + i)
      let obj = {
        title : currentCharacter
      }

      let currentContact = contacts.filter(item => {
        return item.name[0].toUpperCase() === currentCharacter
      })
      if( currentContact.length > 0 ){
        currentContact.sort((a,b) => a.name.localeCompare(b.name))
        obj.data = currentContact
        contactscollection.push(obj)
      }
    }
    return contactscollection
    }


  const handleSubmit = () => {
    setModalVisible(!modalVisible);
    navigation.navigate("Enter Amount", {
      recipientwalletaddress: walletaddress,
      recipientname: name,
    });

  }

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
            <TouchableOpacity onPress={handleSubmit}>
              <FontAwesome5 name="arrow-left" size={18} color={"#000"} />
            </TouchableOpacity>
            <Text style={styles.modalText}>Add Contact</Text>
          </View>
          <View style={{ height: 50 }} />
          <View style={styles.TextContainer}>
            <Text>Enter Contact's name</Text>
            <TextInput style={styles.inputContainer} value={name} onChangeText={setname} />
          </View>

          <View style={styles.TextContainer}>
            <Text>Enter Wallet address</Text>
            <TextInput style={styles.inputContainer} value={walletaddress} onChangeText={setwalletaddress}/>
          </View>
          <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 10 }}
          >
            <TouchableOpacity onPress={handleSubmit}>
            <PrimaryButton title={"Add"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* {contacts.map((contact) => (
      <TouchableOpacity key={contact.id} onPress={()=> { navigation.navigate('Enter Amount', { recipientwalletaddress: contact.walletaddress, recipientname: contact.name})} }>
      <ContactContainer name={contact.name} wallet_address={contact.walletaddress} />
      </TouchableOpacity>
      ))} */}
      <SectionList
        sections={getData()}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <TouchableOpacity onPress={()=> { navigation.navigate('Enter Amount', { recipientwalletaddress: item.walletaddress, recipientname: item.name})} }>
            <Text>{item.name}</Text>
            <Text style={{fontSize: 10, includeFontPadding: true}}>{item.walletaddress}</Text>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        keyExtractor={ item => item.id } 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
  },
  modalView: {
    backgroundColor: "white",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  sectionHeader: {
    backgroundColor: "#efefef",
    paddingHorizontal: 20,
    paddingVertical: 10
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
