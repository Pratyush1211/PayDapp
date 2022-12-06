import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Divider } from "react-native-paper";

const { name, wallet_address } = {
  name: "Freddy Sanchez",
  wallet_address: "freddy_sz12",
};

export default function ContactContainer() {
  return (
    <>
      <View style={styles.AvatarContainer}>
        <Avatar.Image
          size={45}
          source={{
            uri: "https://picsum.photos/700",
          }}
        />
        <View style={styles.InfoContainer}>
          <Text style={styles.InfoText}>{name}</Text>
          <Text style={[styles.InfoText, { fontSize: 12 }]}>
            {wallet_address}
          </Text>
        </View>
      </View>
      <Divider style={{ height: 1, color: "#AEAEAE", marginTop: 10 }} />
    </>
  );
}

const styles = StyleSheet.create({
  AvatarContainer: {
    borderTopColor: "black",
    marginTop: 15,
    flexDirection: "row",
  },
  InfoContainer: {
    marginLeft: 10,
    alignItems: "flex-start",
    flex: 1,
  },
  InfoText: {
    fontSize: 15,
    color: "black",
    fontWeight: "400",
  },
});
