// Component to be used in HomeScreen
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Divider } from "react-native-paper";

// displaying date from timestamp in Transaction Activity Details card
const DateDetails = (timeStamp) => {
  var dateFormat = new Date(timeStamp * 1000);
  return (
    "Date: " +
    dateFormat.getDate() +
    "/" +
    (dateFormat.getMonth() + 1) +
    "/" +
    dateFormat.getFullYear()
  );
};

export default function TransactionActivityDetails({
  receiver,
  gasPrice,
  timeStamp,
}) {
  return (
    <>
      <View>
        <View style={styles.AvatarContainer}>
          <Avatar.Image
            size={50}
            source={{
              uri: "https://avatars.githubusercontent.com/u/6250754?s=200&v=4",
            }}
          />
          <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
            <View style={styles.TransactionDetailsAlignment}>
              <Text style={styles.InfoText}>
                To: {receiver.slice(0, 15)}.....
              </Text>
              <Text style={[styles.InfoText, { fontSize: 12 }]}>
                Amount: {gasPrice}
              </Text>
            </View>
            <Text style={[styles.InfoText, { fontSize: 12 }]}>
              {DateDetails(timeStamp)}
            </Text>
          </View>
        </View>
        <Divider style={{ height: 1, color: "#AEAEAE" }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  AvatarContainer: {
    flexDirection: "row",
    height: 60,
    marginTop: 10,
    alignItems: "center",
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
    fontFamily: "Poppins-Regular",
  },
  TransactionDetailsAlignment: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
});
