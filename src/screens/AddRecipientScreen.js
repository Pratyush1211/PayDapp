import { Text, View, StyleSheet, Button, Alert, Modal, TouchableOpacity, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import PrimaryButton from "../../components/PrimaryButton";
import { Screenwidth } from "../../constants/Layout";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AddRecipientScreen({ navigation, route }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, [scanned]);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrvalue(data);
    Alert.alert(
      "Save as Contact",
      `Scanned Address is : ${data}. Do you want to save this address as a contact?`,
      [
        {
          text: "Scan Again",
          onPress: () => setScanned(false),
        },
        {
          text: "Cancel",
          onPress: () => {
            navigation.navigate("Enter Amount", {
              recipientwalletaddress: data,
              recipientname: name,
            });
          },
          style: "cancel",
        },
        { text: "Save", onPress: () => {setModalVisible(true)} },
      ]
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // const onOpneScanner = () => {
  //   // To Start Scanning
  //   if (Platform.OS === 'android') {
  //     async function requestCameraPermission() {
  //       try {
  //         const granted = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.CAMERA,
  //           {
  //             title: 'Camera Permission',
  //             message: 'App needs permission for camera access',
  //           },
  //         );
  //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //           // If CAMERA Permission is granted
  //           setQrvalue('');
  //           setOpneScanner(true);
  //         } else {
  //           alert('CAMERA permission denied');
  //         }
  //       } catch (err) {
  //         alert('Camera permission err', err);
  //         console.warn(err);
  //       }
  //     }
  //     // Calling the camera permission function
  //     requestCameraPermission();
  //   } else {
  //     setQrvalue('');
  //     setOpneScanner(true);
  //   }
  // };

  const handleSubmit = () => {
    navigation.navigate("Enter Amount", {
      recipientwalletaddress: qrvalue,
      recipientname: name,
    });
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: 350, width: 400 }}
      />
      
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
            <TextInput style={styles.inputContainer} value={name} onChangeText={setName}/>
          </View>

          <View style={styles.TextContainer}>
            <Text>Enter Wallet address</Text>
            <TextInput style={styles.inputContainer} defaultValue={qrvalue} />
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
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 100,
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
