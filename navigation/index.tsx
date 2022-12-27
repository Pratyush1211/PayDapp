// navigation flow throughout the app

import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import useColorScheme from "../hooks/useColorScheme";

import LoginScreen from "../src/screens/LoginScreen";
import CreateAccountScreen from "../src/screens/CreateAccountScreen";

import AddCryptoWallet from "../src/screens/AddCryptoWallet";

import HomeScreen from "../src/screens/HomeScreen";
import BuyCoinScreen from "../src/screens/BuyCoinScreen";
import SellCoinScreen from "../src/screens/SellCoinScreen";
import MarketPlaceScreen from "../src/screens/MarketPlaceScreen";

import SelectRecepientScreen from "../src/screens/SelectRecepientScreen";
import ContactsScreen from "../src/screens/ContactsScreen";
import AddRecipientScreen from "../src/screens/AddRecipientScreen";
import EnterAmountScreen from "../src/screens/EnterAmountScreen";
import ReviewandSendScreen from "../src/screens/ReviewandSendScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import EditProfileScreen from "../src/screens/EditProfileScreen";
import ChangePasswordScreen from "../src/screens/ChangePasswordScreen";
import PaymentScreen from "../src/screens/PaymentScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#000",
    background: "#FFF",
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#000000",
          fontWeight: "400",
          fontSize: 18,
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Create Account" component={CreateAccountScreen} />
      <Stack.Screen name="Add Crypto Wallet" component={AddCryptoWallet} />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Buy Coin"
        component={BuyCoinScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Sell Coin"
        component={SellCoinScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen name="Select Recipient" component={SelectRecepientScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Add Recipient" component={AddRecipientScreen} />
      <Stack.Screen name="Enter Amount" component={EnterAmountScreen} />
      <Stack.Screen name="Review & Send" component={ReviewandSendScreen} />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      <BottomTab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          title: "Metamask Wallet",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={30} />
          ),
          tabBarLabel: "Wallet",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <BottomTab.Screen
        name="Market"
        component={MarketPlaceScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={30} />
          ),
          tabBarLabel: "Market",
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <BottomTab.Screen
        name="ProfileNav"
        component={ProfileNavigation}
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" color={color} size={30} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerTitleStyle: { color: "black", fontWeight: "400", fontSize: 20 },
          headerTintColor: "white",
          title: "Profile Information",
          headerTitleAlign: "center",
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "black", fontWeight: "400", fontSize: 20 },
        }}
        name="Edit Profile"
        component={EditProfileScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "black", fontWeight: "400", fontSize: 20 },
        }}
        name="Change Password"
        component={ChangePasswordScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: { color: "black", fontWeight: "400", fontSize: 20 },
        }}
        name="Payments"
        component={PaymentScreen}
      />
    </Stack.Navigator>
  );
};
