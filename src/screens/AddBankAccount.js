import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';

import PrimaryButton from '../../components/PrimaryButton';


export default function AddBankAccount({navigation}) {
  const [routingnumber, setrouting] = React.useState('');
  const [accountno, setaccountno] = React.useState('');
  const [checked, setChecked] = React.useState('first');

  return (
    // Routing Number
    <View style={styles.container}>
      <View style={styles.wideInputContainer}>
        <Text style={styles.inputDetailText}>Name on Card</Text>
        <TextInput
          style={[styles.input, {width: 350}]}
          onChangeText={setrouting}
          value={routingnumber}
        />
      </View>

      {/* Account number */}
      <View style={styles.wideInputContainer}>
        <Text style={styles.inputDetailText}>CC Number</Text>
        <TextInput
          style={[styles.input, {width: 350}]}
          onChangeText={setaccountno}
          value={accountno}
        />
      </View>

      <View style={styles.wideInputContainer}>
        <Text style={styles.inputDetailText}>Account type</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
    marginTop: 10,
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
