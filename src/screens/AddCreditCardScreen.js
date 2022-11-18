import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

import PrimaryButton from '../../components/PrimaryButton';

export default function AddCreditCardScreen({navigation}) {

const [name, setname] = React.useState('');
const [creditcardno, setcreditcardno] = React.useState('');
const [expirationdate, setexpirationdate] = React.useState('');
const [securitycode, setsecuritycode] = React.useState('');
const [zipcode, setzipcode] = React.useState('');


return (
    
// Name of card holder
  <View style={styles.container}>
    <View style={styles.wideInputContainer}>
      <Text style={styles.inputDetailText}>Name on Card</Text>
      <TextInput
        style={[styles.input, {width: 350}]}
        onChangeText={setname}
        value={name}
      />
    </View>

{/* credit card number */}
    <View style={styles.wideInputContainer}>
      <Text style={styles.inputDetailText}>CC Number</Text>
      <TextInput
        style={[styles.input, {width: 350}]}
        onChangeText={setcreditcardno}
        value={creditcardno}
      />
    </View>

    <View style={styles.inputContainer}>
        {/* expiration date of card */}
      <View>
        <Text style={styles.inputDetailText}>Expiration Date</Text>
        <TextInput
          style={styles.input}
          onChangeText={setexpirationdate}
          value={expirationdate}
        />
      </View>

      {/* Security code of card */}
      <View>
        <Text style={styles.inputDetailText}>Security Code</Text>
        <TextInput
          style={styles.input}
          onChangeText={setsecuritycode}
          value={securitycode}
        />
      </View>
    </View>

    {/* Zip code of card */}
    <View style={styles.wideInputContainer}>
      <Text style={styles.inputDetailText}>Zip Code</Text>
      <TextInput
        style={[styles.input, {width: 350}]}
        onChangeText={setzipcode}
        value={zipcode}
      />
    </View>
    <View style={{justifyContent: 'flex-end', flex: 1, marginBottom: 10}}>
    <PrimaryButton screen={''} title={'Add Card'} />
    </View>

  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'white',
  padding: 20,
},
inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 20,
},
inputDetailText: {
  fontWeight: '500',
  color: '#000000',
  fontSize: 14,
},
input: {
  marginTop: 5,
  height: 60,
  width: 170,
  borderWidth: 0.5,
  padding: 10,
  borderRadius: 5,
},
wideInputContainer: {
  paddingTop: 20,
},
});