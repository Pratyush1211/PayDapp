import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import PrimaryButton from '../../components/PrimaryButton';

export default function BuyCoinScreen({navigation}) {
  const [amountIncurrency, setamountcurrency] = React.useState(0);
  const [amountIncrypto, setamountcrypto] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.wideInputContainer}>
        <Text style={styles.inputDetailText}>You pay</Text>
        <TextInput
          style={[styles.input, {width: 350}]}
          onChangeText={setamountcurrency}
          value={amountIncurrency}
        />
      </View>

      <View style={styles.wideInputContainer}>
        <Text style={styles.inputDetailText}>You receive(est)</Text>
        <TextInput
          style={[styles.input, {width: 350}]}
          onChangeText={setamountcrypto}
          value={amountIncrypto}
        />
        <Text>Rate: $44,234.85 USD = 1 BTC</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('Transaction');
        }}>
        <PrimaryButton title={'Next'} />
      </TouchableOpacity>
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
  },
  inputDetailText: {
    fontWeight: '500',
    color: 'black',
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
    paddingTop: 35,
  },
});
