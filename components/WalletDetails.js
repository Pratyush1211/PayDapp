import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper"

const image = require("../assets/images/metamask.png");
const WalletDetails = ({
  title,
  NetworkId,
  address,
}) => {
  return (
    <>
      <View style={styles.cardContainer}>
        <View style={styles.MethodContainer}>
          <View style={styles.ImageContainer}>
            <Avatar.Image
              style={styles.ImageContainer}
              size={60}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/120px-MetaMask_Fox.svg.png',
              }}
            />

          </View>
          <View style={styles.TextAlignment}>
            <Text style={styles.heading}>{title}</Text>
            <Text style={{ fontSize: 12 }}>{NetworkId}</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 15, color: "#000", fontSize: 12, fontWeight: '400' }}>
            Your Wallet Address: {address}
          </Text>
        </View>
      </View>
    </>
  );
};

export default WalletDetails;

const screen = Dimensions.get("screen").width;
const CardWidth = 0.85 * screen;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    height: 130,
    width: CardWidth,
    borderRadius: 10,
    elevation: 3,
  },
  MethodContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ImageContainer: {
    backgroundColor: 'transparent'
  },
  heading: {
    fontSize: 15,
    fontWeight: "600",
    color: "#121212",
  },
  TextAlignment: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
