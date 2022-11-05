import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native'
import React, {useEffect, useState} from 'react'
// import "@ethersproject/shims"
// import { ethers } from 'ethers';
import { Avatar, Divider } from 'react-native-paper';
// import { useSelector } from 'react-redux';

import PrimaryButton from '../../components/PrimaryButton';


const { name, role } = {
  name: 'Freddy Sanchez',
  role: 'freddy_sz12',
};


export default function ReviewandSendScreen({ navigation, route }) {

  const receiverwalletaddress = route.params.receiverwalletaddress;
  // const senderwalletkey =  useSelector((state)=>state.wallet.walletPrivatekey)
  // const senderwalletAddress =  useSelector((state)=>state.wallet.walletAddress)

  // const walletprivateKey = route.params.walletprivateKey;
  const amount = route.params.amount;
  const [gasPrice, setGasprice] = useState('');
  const [total, setTotal] = useState('');


  // useEffect(() => {
  //   const connection = async () => {
  //     const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
  //     // const wallet = new ethers.Wallet(walletprivateKey, provider);
  //     const feeData = await provider.getFeeData()
  //     setGasprice(ethers.utils.formatUnits(feeData.maxFeePerGas, "ether"));
  //     var totalprice = parseFloat(amount) + parseFloat(gasPrice)
  //     console.log(totalprice)
  //     setTotal(totalprice);
  //     console.log(senderwalletkey)
  
  //   }
  //   connection();
  // }, [])
  



  //console.log(gasPrice);
  // const handleSubmit = async () => {
  //   const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
  //   // const provider = new ethers.providers.AlchemyProvider("goerli");
  //   const wallet = new ethers.Wallet(senderwalletkey, provider);
  //   //Alert.alert("called");
  //   let tx = {
  //     to: receiverwalletaddress,
  //     // Convert currency unit from ether to wei
  //     value: ethers.utils.parseEther(amount)
  //   }

  //   // Send a transaction
  //   try {
  //     const txObj = await wallet.sendTransaction(tx)
  //     setTimeout(() => {
  //       Alert.alert('Transaction Successfully');
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'TabNav' }],
  //       });
  //     }, 1000);
  //     // => 0x9c172314a693b94853b49dc057cf1cb8e529f29ce0272f451eea8f5741aa9b58
    
  //   } catch (error) {
  //     Alert.alert('Transaction Failed')
  //   }

  // }

  const RecipientDetails = () => (
    <>
      <View style={styles.AvatarContainer}>
        <Avatar.Text
          size={80}
          label={receiverwalletaddress[0]}
        />
        <Text style={styles.InfoText}>{receiverwalletaddress}</Text>
        {/* <Text style={[styles.InfoText, { fontSize: 12 }]}>from: {senderwalletAddress.slice(0, 10)}...</Text> */}
      </View>
      <Divider style={{ height: 1, color: '#AEAEAE', marginTop: 10 }} />
    </>
  );

  const SummaryContainer = ({ title, amount, conversionrate }) => (
    <>
      <View style={styles.TransactionContainer}>
        <Text style={styles.heading}>{title} :</Text>
        <View>
          <Text style={[styles.heading, { textAlign: 'right', fontWeight: '400' }]}>{amount} ETH</Text>
          {/* <Text>{conversionrate}</Text> */}
        </View>
      </View>
      <Divider style={{ height: 1, color: '#AEAEAE', marginTop: 10 }} />
    </>
  );


  return (
    <View style={styles.container}>
      <RecipientDetails />
      <SummaryContainer title={'Sending'} amount={amount} conversionrate={'1 BTC = $44,234.85 USD'} />
      <SummaryContainer title={'Gasprice'} amount={gasPrice} conversionrate={'1 BTC = $44,234.85 USD'} />
      <SummaryContainer title={'Total'} amount={total} conversionrate={'1.000501 BTC = $44,255.56 USD'} />
      {/* <SummaryContainer title={'Wallet'} /> */}
      <View style={styles.bottom}>
      <TouchableOpacity onPress={()=>{alert("Sending")}}>
        <PrimaryButton title={'Send'} />
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
  },
  AvatarContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: 'flex-start',
    flex: 1,
  },
  InfoText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
    textAlign: 'center'
  },
  TransactionContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  TransactionAlignmentContainer: {
    flex: 0.33,
    backgroundColor: 'red'
  },
  SummaryAlignmentContainer: {
    flex: 0.5,
    backgroundColor: 'greem'
  },
  heading: { fontWeight: '700', color: '#000', fontSize: 16 },
  label: {
    fontWeight: '700',
    color: '#000',
    fontSize: 13,
  },
  bottom: {
    flex: 0.9,
    justifyContent: 'flex-end',
    marginBottom: 36
  }
})