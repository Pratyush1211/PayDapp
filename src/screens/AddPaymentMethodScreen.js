import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Card = ({title, image}) => (
  <>
    <View style={styles.MethodContainer}>
      <View style={{width: 15}}/>
      <View style={styles.ImageContainer}>
        <Image source={image} />
      </View>
      <View style={{width: 20}}/>
      <Text style={styles.heading}>{title}</Text>
    </View>
  </>
);

const options = [
  {
    id: 1,
    title: 'Add Crypto Wallet',
    image: require('../../assets/images/Bank.png'),
    screen: 'Add Crypto Wallet',
  },
  {
    id: 2,
    title: 'Add Credit Card',
    image: require('../../assets/images/card.png'),
    screen: 'Add Credit Card',
  },
  {
    id: 3,
    title: 'Add Bank Account',
    image: require('../../assets/images/Crypto.png'),
    screen: 'Add Bank Details',
  },
];

export default function AddPaymentMethodScreen({navigation}) {
  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
        activeOpacity={1}
          key={option.id}
          onPress={() => navigation.navigate(option.screen)}>
          <Card
            key={option.id}
            title={option.title}
            image={option.image}
            screen={option.screen}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  MethodContainer: {
    backgroundColor: 'white',
    margin: 20,
    height: 120,
    borderRadius: 10,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageContainer: {
    backgroundColor: '#C5C5C5',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  heading: {
    fontSize: 15,
    fontWeight: '400',
    color: '#000000',
  },

  FooterText: {
    textAlign: 'center',
    marginTop: 20,
  }
});
