import {StyleSheet, Text, View} from 'react-native';
import React from 'react';


export default function PrimaryButton({title}) {
  return (
    <View
      style={styles.container}>
      <Text style={styles.PrimaryText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: 350,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 10,
  },
  PrimaryText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
