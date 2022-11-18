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

import { BarCodeScanner } from "expo-barcode-scanner";
import PrimaryButton from "../../components/PrimaryButton";
import { FontAwesome5 } from "@expo/vector-icons";

const { name, role } = {
  name: "Freddy Sanchez",
  role: "freddy_sz12",
};

export default function SelectRecepientScreen({ navigation, route }) {

  const [qrmodalVisible, setQrModalVisible] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  
  const [scanned, setScanned] = useState(false);
  const [qrvalue, setQrvalue] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setamount] = React.useState("");
  const [loading, setLoading] = useState(false)

  const getBarCodeScannerPermissions = async () => {
    const { status } = await BarCodeScanner.requestPermissionsAsync();
    setHasPermission(status);
    console.log(hasPermission)
    try{
    if(hasPermission === 'granted'){
      setQrModalVisible(!qrmodalVisible);
    }else if (hasPermission === 'denied') {
      alert('User has denied the permission');
    }
    else{
      alert('No access to camera')
    }
  }catch(err){
    alert(err)
  }
  };

  const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      setQrvalue(data);
      alert(
        `Bar code with type ${type} and data ${data} has been scanned!`
      );
  };



  const handleQrModal = () => {
    setQrModalVisible(!qrmodalVisible);
    setModalVisible(!modalVisible);
    setScanned(false);
  };



  const handleSendingAmount = () => {
    if(qrvalue != '' && amount != ''){
    setTimeout(() => {
      navigation.navigate("Review & Send", {
        receiverwalletaddress: qrvalue,
        amount: amount,
      });
      setLoading(false);
      setModalVisible(!modalVisible);
    }, 1000);
  }else if (qrvalue == '' && amount != ''){
    alert('Enter sender wallet address')
  }else if (qrvalue != '' && amount == ''){
    alert('Enter amount to be send')
  }
  };

  return (
    <View style={styles.container}>


      <Modal
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 15,
    color: "#121212",
  },
  InputContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    marginTop: 10,
  },
  SearchInputContainer: {
    margin: 20,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: "center",
  },
  RecipientContainer: {
    margin: 20,
  },
  AvatarContainer: {
    borderTopColor: "black",
    marginTop: 15,
    flexDirection: "row",
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
    flex: 1,
  },
  InfoText: {
    fontSize: 18,
    color: "black",
    fontWeight: "400",
  },
  QrModalcontainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  AmountModalcontainer: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
  },
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  headerText: {
    color: "#000",
    fontWeight: "400",
    fontSize: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    margin: 10,
  },
  AmountText: {
    height: 70,
    borderColor: "black",
    borderBottomWidth: 0.5,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    flex: 0.2,
    fontSize: 25,
    fontWeight: "600",
    color: "#000",
  },
  ButtonAlignment: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 40,
  },
});
