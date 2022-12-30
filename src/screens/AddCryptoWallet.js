import {
  StyleSheet,
  View,
  ToastAndroid,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

// components
import WalletDetails from "../../components/WalletDetails";
import PrimaryButton from "../../components/PrimaryButton";

import { useWalletConnect } from "@walletconnect/react-native-dapp";
import { setWalletAddress } from "../redux/slices/walletSlice";
import { logout } from "../redux/slices/AuthenticationSlice";

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

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <View style={styles.container}>
      {!connector.connected && (
        <TouchableOpacity onPress={connectWallet}>
          <View style={styles.Button}>
            <Text style={styles.buttonTextStyle}>Connect your Wallet !</Text>
          </View>
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

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <PrimaryButton title={"Logout"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 150,
  },
  Button: {
    backgroundColor: "#F9A826",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 30,
  },
});
