# Paydapp
This app demonstrates use of WalletConnect to connect app to Metamask.

# WalletConnect Example on Expo
`WalletConnect` is used to connect decentralized wallet like Metamask with React Native `expo`

## `WalletConnect`'s dependency on Node's `crypto` package

`WalletConnect` uses node's built-in crypto package which is not available on iOS or Android.
In order to work around this we can use `metro.config.js` to create aliases for different packages, this idea is from [here](https://learn.figment.io/tutorials/how-to-successfully-connect-to-a-celo-wallet-with-a-react-native-dapp).
This will allow us to use `WalletConnect` directly from the `expo` client without having to eject the application.

## Firebase is used for Authentication.
A user can register or sign in with Firebase functions using email and password the whole authentication states are managed by redux-toolit 

