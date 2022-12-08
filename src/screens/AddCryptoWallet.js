import { StyleSheet, View, ToastAndroid, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import WalletDetails from "../../components/WalletDetails";
import PrimaryButton from "../../components/PrimaryButton";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setWalletAddress } from "../redux/slices/walletSlice";


const shortenAddress = (address) => {
  return `${address.slice(0, 6)}...${address.slice(
    address.length - 4,
    address.length
  )}`;
};

export default function AddCryptoWallet({ navigation }) {
  const connector = useWalletConnect();
  const dispatch = useDispatch();

  const connectWallet = React.useCallback(
    async (data) => {
      const con = await connector.connect();
      console.log(con);
      ToastAndroid.show("Wallet connected sucessfully", ToastAndroid.LONG);
    },
    [connector]
  );

  connector.on("connect", (error, payload) => {
    if (error) {
      throw error;
    }

    // Get provided accounts and chainId
    const { accounts, chainId } = payload.params[0];
    dispatch(setWalletAddress(accounts[0]));
    console.log(accounts);
    console.log(chainId);
  });

  return (
    <View style={styles.container}>
      {!connector.connected && (
        <TouchableOpacity onPress={connectWallet}>
          <PrimaryButton title={"Connect a wallet"} />
        </TouchableOpacity>
      )}
      {!!connector.connected && (
        <>
          <WalletDetails
            address={connector.accounts[0]}
            title={connector.peerMeta?.name}
            NetworkId={connector.peerMeta?.description}
          />
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Root")}>
            <PrimaryButton title={"Continue"} />
          </TouchableOpacity>
          </View>
        </>
      )}
      {/* <TouchableOpacity onPress={killSession} style={{}}>
            <Text style={styles.buttonTextStyle}>Log out</Text>
          </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
  },
  buttonContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 36
  }
});
