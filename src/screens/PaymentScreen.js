import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

import PrimaryButton from '../../components/PrimaryButton';
import { TouchableOpacity } from 'react-native';


const image =  require('../../assets/images/metamask.png')

const Card = ({title="Metamask", amount="$12,780.23 USD", address}) => (
    <>
    <View style={styles.cardContainer}>
      <View style={styles.MethodContainer}>
        <View style={styles.ImageContainer}>
          <Image source={image} />
        </View>
        <View style={styles.TextAlignment}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={{fontSize: 12}}>{amount}</Text>
        </View>
      </View>
      <View>
        <Text style= {{marginLeft: 15, color: '#000', fontSize: 12}}>
            Wallet Address: {address}
        </Text>
      </View>
      </View>
    </>
  );

export default function PaymentScreen({navigation}) {
  const senderwalletAddress =  useSelector((state)=>state.user.walletAddress)

  return (
    <View style={styles.container}>
      <Card address={senderwalletAddress} />
      <View style={styles.bottom}>
        <TouchableOpacity onPress={()=> navigation.replace('Add Payment Method')}>
        <PrimaryButton title={'Add Payment'}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
      },
      cardContainer: {
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        height: 130,
        width: 350,
        borderRadius: 10,
        elevation: 3,

      },
      MethodContainer: {
        flexDirection: 'row',
        alignItems: 'center'
      },
      ImageContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        margin: 10,
      },
      heading: {
        fontSize: 15,
        fontWeight: '600',
        color: '#121212'
      },
      TextAlignment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      bottom: {
        flex: 0.9,
        justifyContent: 'flex-end',
        marginBottom: 36
      }
});