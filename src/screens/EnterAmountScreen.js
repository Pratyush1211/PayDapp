import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import PrimaryButton from '../../components/PrimaryButton'
import Navigation from '../../navigation';

export default function EnterAmountScreen({ navigation }) {
    const {recipientwalletaddress, recipientname} = { recipientwalletaddress: "0x123456789", recipientname: "John Doe" };
    const [amount, setamount] = useState('');

  return (
<View style={styles.container}>
      <Text style={styles.label}>Sending to: {recipientname}</Text>
      <Text style={styles.label}>{recipientwalletaddress}</Text>
      <TextInput
        style={styles.input}
        placeholder="0 ETH"
        placeholderTextColor={'grey'}
        onChangeText={setamount}
        keyboardType={'number-pad'}
      />
      <View style={styles.ButtonAlignment}>
    <TouchableOpacity onPress={()=> navigation.navigate('Review & Send', { amount: amount})}>
      <PrimaryButton title={'Next'} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
      },
      label: {
          fontSize: 15,
          fontWeight: '600',
          color: '#000',
          margin: 10,
      },
      input: {
          borderColor: 'black',
          borderBottomWidth: 0.5,
          margin: 10,
          padding: 10,
          textAlign: 'center',
          fontSize : 25,
          fontWeight: '600',
          color: '#000',
          flex: 1,
      },
      ButtonAlignment: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 30,
      }
})