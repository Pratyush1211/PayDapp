import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { Screenwidth } from "../constants/Layout";

const WalletDetails = ({ title, NetworkId, address }) => {
  return (
    <>
      <View style={styles.cardContainer}>

          <Avatar.Image
            style={styles.ImageContainer}
            size={70}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/120px-MetaMask_Fox.svg.png",
            }}
          />

        <Text style={styles.heading}>{title}</Text>
        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>{NetworkId}</Text>
        <Text style={styles.heading}>
          Your Wallet Address:
        </Text>
        <Text style={{ fontSize: 14 }}>{address}</Text>
      </View>
    </>
  );
};

export default WalletDetails;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    margin: 20,
    height: 250,
    width: Screenwidth * 0.9,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: 'center'
  },
  ImageContainer: {
    backgroundColor: "transparent",
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    color: "#121212",
    marginVertical: 10,
    fontFamily: "Poppins-Semibold",
  },

});
