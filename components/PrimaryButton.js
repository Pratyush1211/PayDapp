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
const cardWidth = 0.88*screen
const styles = StyleSheet.create({
  container: {
    height: 56,
    width: cardWidth,
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
