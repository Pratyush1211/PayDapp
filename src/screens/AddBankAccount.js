import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, { useState } from 'react';
import {RadioButton} from 'react-native-paper';


import { Screenwidth } from '../../constants/Layout';
import PrimaryButton from '../../components/PrimaryButton';


export default function AddBankAccount({navigation}) {
  const [name, setname] = useState('');
  const [accountno, setaccountno] = useState('');
  const [checked, setChecked] = useState('first');

  return (
    // Routing Number
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


      <View style={styles.TextContainer}>
        <Text>CC Number</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder={""}
          onChangeText={setaccountno}
          value={accountno}
        />
      </View>

      <View style={[styles.TextContainer, { width: Screenwidth*0.9}]}>
        <Text>Account type</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: -8}}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text>Checking</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 5,
            }}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text>Savings</Text>
          </View>
        </View>
      </View>

      <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
        <PrimaryButton  title={'Add Bank Account'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
