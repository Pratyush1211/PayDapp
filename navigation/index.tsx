/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import LoginScreen from "../src/screens/LoginScreen";
import CreateAccountScreen from "../src/screens/CreateAccountScreen";
import AddPaymentMethodScreen from "../src/screens/AddPaymentMethodScreen";
import AddCryptoWallet from "../src/screens/AddCryptoWallet";
import HomeScreen from "../src/screens/HomeScreen";

import SelectRecepientScreen from "../src/screens/SelectRecepientScreen";
import AddRecipientScreen from "../src/screens/AddRecipientScreen";
import ReviewandSendScreen from "../src/screens/ReviewandSendScreen";
import ProfileScreen from "../src/screens/ProfileScreen";
import EditProfileScreen from "../src/screens/EditProfileScreen";
import ChangePasswordScreen from "../src/screens/ChangePasswordScreen";
import PaymentScreen from "../src/screens/PaymentScreen";
import ModalScreen from "../src/screens/ModalScreen";
import NotFoundScreen from "../src/screens/NotFoundScreen";
import TabOneScreen from "../src/screens/TabOneScreen";
import TabTwoScreen from "../src/screens/TabTwoScreen";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";


export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Create Account"
        component={CreateAccountScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Add Payment Method"
        component={AddPaymentMethodScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}
      />
      <Stack.Screen
        name="Add Crypto Wallet"
        component={AddCryptoWallet}
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
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
        <Stack.Screen name="Select Recipient" component={SelectRecepientScreen} options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}/>
      <Stack.Screen name="Add Recipient" component={AddRecipientScreen} options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}/>
      <Stack.Screen name="Review & Send" component={ReviewandSendScreen} options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#000",
            fontWeight: "400",
            fontSize: 18,
          },
        }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarLabelStyle:{
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 60,
        }
      }}
    >
      {/* <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      /> */}
      {/* <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      /> */}
      <BottomTab.Screen
        name="Wallet"
        component={HomeScreen}
        options={{
          title: "Metamask Wallet",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={30} />
          ),
          tabBarLabel: 'Wallet',
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

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
// }


const ProfileNavigation = () => {
  return(
    <Stack.Navigator initialRouteName="Profile" >
    <Stack.Screen
      options={{
        headerStyle: {backgroundColor: 'white'},
        headerTitleStyle: {color: 'black', fontWeight: '400', fontSize: 20},
        headerTintColor: 'white',
        title: 'Profile Information',
        headerTitleAlign: 'center',
      }}
      name="Profile"
      component={ProfileScreen}
    />
    <Stack.Screen
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'black', fontWeight: '400', fontSize: 20},
      }}
      name="Edit Profile"
      component={EditProfileScreen}
    />
  <Stack.Screen
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'black', fontWeight: '400', fontSize: 20},
      }}
      name="Change Password"
      component={ChangePasswordScreen}
    />
        <Stack.Screen
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'black', fontWeight: '400', fontSize: 20},
      }}
      name="Payments"
      component={PaymentScreen}
    />
  </Stack.Navigator>


  )
}