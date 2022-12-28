import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import {Avatar, Divider} from 'react-native-paper';

import ContactContainer from "../../components/ContactContainer";
import { FontAwesome5 } from "@expo/vector-icons";


const { name, wallet_address } = {
  name: "Freddy Sanchez",
  wallet_address: "freddy_sz12",
};

const RecipientDetails = () => (
  <>
    <View style={styles.AvatarContainer}>
      <Avatar.Image
        size={45}
        source={{
          uri: 'https://picsum.photos/700',
        }}
      />
      <View style={styles.InfoContainer}>
        <Text style={styles.InfoText}>{name}</Text>
        <Text style={[styles.InfoText, {fontSize: 12}]}>{wallet_address}</Text>
      </View>
    </View>
    <Divider style={{height: 1, color: '#AEAEAE', marginTop: 10}} />
  </>
);

export default function SelectRecepientScreen({ navigation }) {

  const contacts = [{
    id: 1,
    name: "John Doe",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  },
  {
    id: 2,
    name: "Jane Doe",
    walletaddress: "0xB9d35811424600fa9E8cD62A0471fBd025131cb8",
  }
]

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.SearchInputContainer}
        onPress={() => {
          navigation.navigate('Contacts');
        }}>
        <FontAwesome5 name="search" size={20} color="#AEAEAE" />
        <Text style={[styles.input]}>
          Search for a contact
        </Text>
      </TouchableOpacity>
      <Divider style={{height: 1, color: '#AEAEAE'}} />

      <TouchableOpacity
        style={styles.SearchInputContainer}
        onPress={() => {
          navigation.navigate('Add Recipient');
        }}>
        <FontAwesome5 name="qrcode" size={20} color="#AEAEAE" />
        <Text style={[styles.input]}>
          Scan QR code
        </Text>
      </TouchableOpacity>
      <Divider style={{height: 1, color: '#AEAEAE'}} />

      <View style={styles.RecipientContainer}>
        <Text style={{fontWeight: '600', color: '#121212', fontFamily: 'Poppins-Semibold'}}>
          Top Recipients
        </Text>
        {contacts.map((contact) => (
      <TouchableOpacity key={contact.id} onPress={()=> { navigation.navigate('Enter Amount', { recipientwalletaddress: contact.walletaddress, recipientname: contact.name})} }>
      <ContactContainer name={contact.name} wallet_address={contact.walletaddress} />
      </TouchableOpacity>
      ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: '#121212',
    fontFamily: 'Poppins-Semibold',
    marginHorizontal: 10,
  },
  SearchInputContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  RecipientContainer: {
    margin: 20,
  },
  AvatarContainer: {
    borderTopColor: 'black',
    marginTop: 15,
    flexDirection: 'row',
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  InfoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
  },
});
