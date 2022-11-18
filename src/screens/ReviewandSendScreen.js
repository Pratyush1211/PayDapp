import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Avatar, Divider } from "react-native-paper";

import PrimaryButton from "../../components/PrimaryButton";
import "@ethersproject/shims";
import { ethers } from "ethers";
import axios from "axios";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

const { name, role } = {
  name: "Freddy Sanchez",
  role: "freddy_sz12",
};

export default function ReviewandSendScreen({ navigation, route }) {
  const receiverwalletaddress = route.params.receiverwalletaddress;

  const amount = route.params.amount;
  const [gasPrice, setGasprice] = useState("");
  const [total, setTotal] = useState("");
  const connector = useWalletConnect();
  const senderwalletAddress = connector.accounts[0];
  const val = parseFloat(amount) * 1000000000000000000;

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const connection = async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://rpc-mumbai.maticvigil.com"
      );
      const feeData = await provider.getFeeData();
      const gas = ethers.utils.formatUnits(feeData.maxFeePerGas, "ether");
      setGasprice(ethers.utils.formatUnits(feeData.maxFeePerGas, "ether"));
      var totalprice = parseFloat(amount) + parseFloat(gas);
      setTotal(totalprice);

      setloading(false);
    };
    connection();
  }, []);

  const send = async () => {
    try {
      const tx = await connector.sendTransaction({
        data: "0x",
        from: senderwalletAddress,
        to: receiverwalletaddress,
        value: val.toString(),
      });

      //tx.wait();
      console.log(tx);

      setTimeout(() => {
        ToastAndroid.show("Transaction Successful", ToastAndroid.LONG);
        navigation.navigate("Root");
      }, 1000);
    } catch (e) {
      console.error(e);
    }
  };

  const RecipientDetails = () => (
    <>
      <View style={styles.AvatarContainer}>
        <Avatar.Text size={80} label={receiverwalletaddress[0]} />
        <Text style={styles.InfoText}>{receiverwalletaddress}</Text>
        {/* <Text style={[styles.InfoText, { fontSize: 12 }]}>from: {senderwalletAddress.slice(0, 10)}...</Text> */}
      </View>
      <Divider style={{ height: 1, color: "#AEAEAE", marginTop: 10 }} />
    </>
  );

  const SummaryContainer = ({ title, amount, conversionrate }) => (
    <>
      <View style={styles.TransactionContainer}>
        <Text style={styles.heading}>{title} :</Text>
        <View>
          <Text
            style={[styles.heading, { textAlign: "right", fontWeight: "400" }]}
          >
            {amount} ETH
          </Text>
          {/* <Text>{conversionrate}</Text> */}
        </View>
      </View>
      <Divider style={{ height: 1, color: "#AEAEAE", marginTop: 10 }} />
    </>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={"#000"} />
      ) : (
        <>
          <RecipientDetails />
          <SummaryContainer
            title={"Sending"}
            amount={amount}
            conversionrate={"1 BTC = $44,234.85 USD"}
          />
          <SummaryContainer
            title={"Gasprice"}
            amount={gasPrice}
            conversionrate={"1 BTC = $44,234.85 USD"}
          />
          <SummaryContainer
            title={"Total"}
            amount={total}
            conversionrate={"1.000501 BTC = $44,255.56 USD"}
          />
          {/* <SummaryContainer title={'Wallet'} /> */}
          <View style={styles.bottom}>
            <TouchableOpacity onPress={send}>
              <PrimaryButton title={"Send"} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
  },
  AvatarContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
    flex: 1,
  },
  InfoText: {
    fontSize: 18,
    color: "black",
    fontWeight: "400",
    textAlign: "center",
  },
  TransactionContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  TransactionAlignmentContainer: {
    flex: 0.33,
    backgroundColor: "red",
  },
  SummaryAlignmentContainer: {
    flex: 0.5,
    backgroundColor: "greem",
  },
  heading: { fontWeight: "700", color: "#000", fontSize: 16 },
  label: {
    fontWeight: "700",
    color: "#000",
    fontSize: 13,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
