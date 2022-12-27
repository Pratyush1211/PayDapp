import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';


export default function PrimaryButton({title}) {
  return (
    <View
      style={styles.container}>
      <Text style={styles.PrimaryText}>{title}</Text>
    </View>
  );
}
const screen = Dimensions.get('screen').width;
const cardWidth = 0.9*screen
const styles = StyleSheet.create({
  container: {
    height: 56,
    width: cardWidth,
    backgroundColor: '#0070E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  PrimaryText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
