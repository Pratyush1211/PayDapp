import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import { BarCodeScanner } from 'expo-barcode-scanner';

export default function AddRecipientScreen({navigation, route}) {

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrvalue, setQrvalue] = useState('');

  // const onBarcodeScan = qrvalue => {
  //   // Called after te successful scanning of QRCode/Barcode
  //   setQrvalue(qrvalue);
  //   setOpneScanner(false);
  //   navigation.navigate("Enter Amount", { walletaddress: qrvalue});
    
  // };
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setQrvalue(data)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Text>{qrvalue}</Text>}
      {scanned && <Button title={'Continue'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    borderRadius: 40,
    height: 60,
    width: 60,
    backgroundColor: '#C5C5C5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
});
