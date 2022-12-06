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

import { BarCodeScanner } from "expo-barcode-scanner";
import PrimaryButton from "../../components/PrimaryButton";
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

export default function SelectRecepientScreen({ navigation, route }) {

  const [receipient, setreceipient] = useState('');
  // const [qrmodalVisible, setQrModalVisible] = useState(false);
  // const [hasPermission, setHasPermission] = useState(null);
  
  // const [scanned, setScanned] = useState(false);
  // const [qrvalue, setQrvalue] = useState("");

  // const [modalVisible, setModalVisible] = useState(false);
  // const [amount, setamount] = React.useState("");
  // const [loading, setLoading] = useState(false)

  // const getBarCodeScannerPermissions = async () => {
  //   const { status } = await BarCodeScanner.requestPermissionsAsync();
  //   setHasPermission(status);
  //   console.log(hasPermission)
  //   try{
  //   if(hasPermission === 'granted'){
  //     setQrModalVisible(!qrmodalVisible);
  //   }else if (hasPermission === 'denied') {
  //     alert('User has denied the permission');
  //   }
  //   else{
  //     alert('No access to camera')
  //   }
  // }catch(err){
  //   alert(err)
  // }
  // };

  // const handleBarCodeScanned = ({ type, data }) => {
  //     setScanned(true);
  //     setQrvalue(data);
  //     alert(
  //       `Bar code with type ${type} and data ${data} has been scanned!`
  //     );
  // };



  // const handleQrModal = () => {
  //   setQrModalVisible(!qrmodalVisible);
  //   setModalVisible(!modalVisible);
  //   setScanned(false);
  // };



  // const handleSendingAmount = () => {
  //   if(qrvalue != '' && amount != ''){
  //   setTimeout(() => {
  //     navigation.navigate("Review & Send", {
  //       receiverwalletaddress: qrvalue,
  //       amount: amount,
  //     });
  //     setLoading(false);
  //     setModalVisible(!modalVisible);
  //   }, 1000);
  // }else if (qrvalue == '' && amount != ''){
  //   alert('Enter sender wallet address')
  // }else if (qrvalue != '' && amount == ''){
  //   alert('Enter amount to be send')
  // }
  // };

  return (
    <View style={styles.container}>


      {/* <Modal
        animationType="slide"
        transparent={false}
        visible={qrmodalVisible}
        onRequestClose={() => {
          setQrModalVisible(!qrmodalVisible);
        }}
      >
        <View style={styles.QrModalcontainer}>
          <View style={{alignItems: 'center'}}>
            {scanned && <Text>{qrvalue}</Text>}
            {scanned && (
              <TouchableOpacity onPress={handleQrModal}>
                <PrimaryButton title={"Continue"} />
              </TouchableOpacity>
            )}
          </View>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: "80%", width: "80%" }}
          />
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.header}>
          <Text style={styles.headerText}>Enter Amount</Text>
        </View>


        <View style={styles.AmountModalcontainer}>
          <Text style={styles.label}>Sending to: </Text>
          <Text style={styles.label}>{qrvalue}</Text>

          <TextInput
            style={styles.AmountText}
            placeholder="0 ETH"
            placeholderTextColor={"grey"}
            onChangeText={setamount}
            keyboardType={"number-pad"}
          />

          <View style={styles.ButtonAlignment}>
            <TouchableOpacity onPress={handleSendingAmount}>
              <PrimaryButton title={"Next"} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.SearchInputContainer}
        onPress={() => {
          getBarCodeScannerPermissions();
        }}
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
          onChangeText={setQrvalue}
          value={qrvalue}
        />
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <PrimaryButton title={"Submit"} />
        </TouchableOpacity>
      </View> */}
      <TouchableOpacity
        style={styles.SearchInputContainer}
        onPress={() => {
          navigation.navigate('Contacts');
        }}>
        <FontAwesome5 name="search" size={20} color="#AEAEAE" />
        <Text style={[styles.input, {fontWeight: '200', color: '#000'}]}>
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
        <Text style={[styles.input, {fontWeight: '200', color: '#000'}]}>
          Scan QR code
        </Text>
      </TouchableOpacity>
      <Divider style={{height: 1, color: '#AEAEAE'}} />

      <View style={styles.RecipientContainer}>
        <Text style={{fontWeight: '600', color: '#121212'}}>
          Top Recipients
        </Text>
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
        <RecipientDetails />
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
    padding: 10,
    fontSize: 15,
    color: '#121212',
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
