// navigation flow throughout the app
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import AddCryptoWallet from "../screens/AddCryptoWallet";

import HomeScreen from "../screens/HomeScreen";
import BuyCoinScreen from "../screens/BuyCoinScreen";
import SellCoinScreen from "../screens/SellCoinScreen";
import MarketPlaceScreen from "../screens/MarketPlaceScreen";

import SelectRecepientScreen from "../screens/SelectRecepientScreen";
import ContactsScreen from "../screens/ContactsScreen";
import AddRecipientScreen from "../screens/AddRecipientScreen";
import EnterAmountScreen from "../screens/EnterAmountScreen";
import ReviewandSendScreen from "../screens/ReviewandSendScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import PaymentScreen from "../screens/PaymentScreen";

import { useSelector } from "react-redux";

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
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#000",
          fontSize: 20,
          fontFamily: "Poppins-Semibold",
        },
      }}
    >
      {!isLoggedIn ? (
        <>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Create Account" component={CreateAccountScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Add Crypto Wallet" component={AddCryptoWallet} />
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
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
          <Stack.Screen
            name="Select Recipient"
            component={SelectRecepientScreen}
          />
          <Stack.Screen name="Contacts" component={ContactsScreen} />
          <Stack.Screen name="Add Recipient" component={AddRecipientScreen} />
          <Stack.Screen name="Enter Amount" component={EnterAmountScreen} />
          <Stack.Screen name="Review & Send" component={ReviewandSendScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins-Semibold",
          marginBottom: 5,
        },
      }}
    >
      <BottomTab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={30} />
          ),
          tabBarLabel: "Wallet",
          headerShown: true,
          headerTitle: "Metamask Wallet",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontSize: 20,
            fontFamily: "Poppins-Semibold",
            marginTop: 10,
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
    <Stack.Navigator initialRouteName="Profile"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerTitleStyle: { color: "#000", fontSize: 20, fontFamily: 'Poppins-Semibold' },
        
      }}
    >
      <Stack.Screen
        options={{
          title: "Profile Details",
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
