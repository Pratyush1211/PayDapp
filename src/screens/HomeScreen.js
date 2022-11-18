import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import "@ethersproject/shims";
import { ethers } from "ethers";
import axios from "axios";
import { useWalletConnect } from "@walletconnect/react-native-dapp";


import TransactionActivityDetails from "../../components/TransactionActivityDetails";

const HomeScreen = ({ navigation }) => {
  const image = require("../../assets/images/ETH.png");

  const [balance, setBalance] = useState("");
  const [transaction, settransaction] = useState([]);
  const connector = useWalletConnect();
  const [expanded, setExpanded] = useState(false);
  const [transactionActivity, settransactionActivity] = useState(false);
  const [loading, setLoading] = useState(false);

  const userwalletaddress = useSelector(
    (state) => state.wallet.userwalletAddress
  );


  const handlePress = () => setExpanded(!expanded);

  const ActivityhandlePress = () => {
    getTransaction();
    settransactionActivity(!transactionActivity);
  };

   useEffect(() => {
    const getwalletDetails = async () => {
      const ADDRESS = await connector.accounts[0];
      const apikey = 'ZYDTV4HXTU8KRZ9EIQA263HK287Y514ZN8';
      const endpoint = 'https://api-testnet.polygonscan.com/api';
      try {
        const etherscan = await axios.get(
          endpoint +
          `?module=account&action=balance&address=${ADDRESS}&apikey=${apikey}`
        );
        console.log(etherscan.data.result);
        let tempBalance = ethers.utils.formatUnits(etherscan.data.result, 18);
        setBalance(ethers.utils.formatUnits(etherscan.data.result, 18).toString());
        const api = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd`,
        );
        const rate = api.data.ethereum.usd;
        console.log(rate);
        let USDbalance = parseFloat(tempBalance) * parseFloat(rate);
        tempBalance = USDbalance.toString();
        console.log(tempBalance)
        tempBalance = tempBalance.slice(0, 6);
        setBalance(tempBalance);
      } catch (error) {
        alert(error);
      }
    };
    getwalletDetails();
    
   }, []);

  async function getTransaction() {
    const ADDRESS = connector.accounts[0];
    const apikey = "ZYDTV4HXTU8KRZ9EIQA263HK287Y514ZN8";
    const endpoint = "https://api-testnet.polygonscan.com/api";
    try {
      const etherscan = await axios.get(
        endpoint +
          `?module=account&action=txlist&address=${ADDRESS}&startblock=0
        &endblock=999999
        &page=1
        &offset=150
        &sort=asc
        &apikey=${apikey}`
      );
      console.log("the data from api is:", etherscan.data.result);
      settransaction(etherscan.data.result);
      // console.log(transaction);
      setLoading(false);
    } catch (error) {
      Alert.alert("Problem in fetching Transaction Details");
      setLoading(false);
    }
    getTransaction = function () {
      setexpandActivityStatus(!expandactivityStatus);
    };
  }

  const options = [
    {
      id: 1,
      ScreenName: "Buy Coin",
      iconName: "plus",
      OptionName: "Buy",
    },
    {
      id: 2,
      ScreenName: "Sell Coin",
      iconName: "minus",
      OptionName: "Sell",
    },
    {
      id: 3,
      ScreenName: "Select Recipient",
      iconName: "location-arrow",
      OptionName: "Send",
    },
  ];

  const Card = ({
    title = "Ethereum",
    subtitle = "ETH",
    amount = "0",
    expanded,
  }) => (
    <>
      <View style={styles.WalletContainer}>
        <View style={styles.ImageContainer}>
          <Image source={image} resizeMode={"cover"} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.heading}>{title}</Text>
          <Text style={styles.subheading}>{subtitle}</Text>
        </View>
        <Text style={styles.amountText}>$ {balance}</Text>
      </View>
      {expanded ? (
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 10,
          }}
        >
          {/* Navigate to Buy Screen  */}
          {options.map((option) => (
            <TouchableOpacity
              key={option.id}
              onPress={() => {
                navigation.navigate(option.ScreenName);
              }}
              style={styles.tradingoptions}
            >
              <FontAwesome5 name={option.iconName} color={"#FFF"} size={10} />
              <Text style={{ color: "#FFF", fontSize: 10, marginTop: 3 }}>
                {option.OptionName}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : null}
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        {/* Navigate to Pay Screen  */}
        <TouchableOpacity
          onPress={() => alert("PayScreen is done will be added to navigation in updates")
          }
          style={styles.PayButtonStyle}
        >
          <Text style={styles.label}>Pay</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ActivityhandlePress}>
          <View
            style={[
              styles.PayButtonStyle,
              { backgroundColor: "#FFF", borderWidth: 3 },
            ]}
          >
            <Text style={[styles.label, { color: "#000" }]}>Activity</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={handlePress}>
        <Card expanded={expanded} amount={0} />
      </TouchableOpacity>
      {transactionActivity ? <Text>Transaction Activity</Text> : null}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexDirection: "column-reverse" }}
      >
        {transactionActivity ? (
          <>
            {transaction &&
              transaction.map((transactions) => (
                <TransactionActivityDetails
                  key={transactions.blockNumber}
                  receiver={transactions.to}
                  gasPrice={ethers.utils
                    .formatUnits(transactions.value, 18)
                    .toString()}
                  timeStamp={transactions.timeStamp}
                />
              ))}
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    marginTop: 30,
    height: 60,
    alignItems: "center",
  },
  WalletContainer: {
    backgroundColor: "white",
    margin: 5,
    marginBottom: 15,
    height: 90,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    shadowColor: "#121212",
    elevation: 4,
  },
  ImageContainer: {
    backgroundColor: "#00000",
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: "500",
    color: "#121212",
    marginLeft: -10,
  },
  subheading: {
    marginLeft: -10,
  },
  amountText: {
    textAlign: "right",
    flex: 1,
    fontSize: 18,
    fontWeight: "0",
    marginRight: 15,
  },

  PayButtonStyle: {
    width: 150,
    height: 50,
    backgroundColor: "#000000",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  label: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "700",
  },
  tradingoptions: {
    height: 50,
    width: 50,
    borderRadius: 30,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
