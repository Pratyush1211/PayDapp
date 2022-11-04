import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import React from 'react';

import PrimaryButton from '../components/PrimaryButton'

const FingerPrint = require('../assets/images/fingerprint.png');

export default function LoginScreen({navigation}: any) {

  const [username, setusername] = React.useState('');
  const [password, setpassword] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <Text style={styles.LabelText}>User name</Text>
        <TextInput
          style={[styles.InputText]}
          onChangeText={setusername}
          value={username}
        />
      </View>

      <View style={styles.InputContainer}>
        <Text style={styles.LabelText}>Password</Text>
        <TextInput
          style={[styles.InputText]}
          onChangeText={setpassword}
          value={password}
        />
      </View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity onPress={()=> navigation.navigate('Create Account')}>
        <PrimaryButton screen={''} title={'Login'} />
        </TouchableOpacity>
      </View>
      <Text style={{textAlign: 'center', margin: 20, textDecorationLine: 'underline'}}>
        Need Help logging in ?
      </Text>

      {/* Finger Print Functionality */}
      <View style={styles.FingerPrintContainer}>
        <Image source={FingerPrint} />
      </View>


      <Text style={{textAlign: 'center', textDecorationLine: 'underline'}}>
        Sign Up
      </Text>
    </View>
  );
}
const screen = Dimensions.get("screen").width;
const inputboxWidth = 0.85 * screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems : 'center',
    justifyContent: 'center',
  },
  LabelText: {
    fontWeight: '400',
    color: 'black',
    fontSize: 14,
  },
  InputText: {
    marginTop: 5,
    height: 60,
    width: inputboxWidth,
    borderWidth: 0.5,
    padding: 10,
    borderRadius: 5,
  },
  InputContainer: {
    paddingTop: 35,
  },
  FingerPrintContainer: {
    margin: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
