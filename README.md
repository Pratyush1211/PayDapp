# Paydapp
This application is an demonstration of building an eccommerce market place powered by the functionality of decentralized application where a user can buy items from application with the help of smart contract.

# WalletConnect Example on Expo
`WalletConnect` is used to connect decentralized wallet like Metamask with React Native `expo`

## `WalletConnect`'s dependency on Node's `crypto` package

`WalletConnect` uses node's built-in crypto package which is not available on iOS or Android.
In order to work around this we can use `metro.config.js` to create aliases for different packages, this idea is from [here](https://learn.figment.io/tutorials/how-to-successfully-connect-to-a-celo-wallet-with-a-react-native-dapp).
This will allow us to use `WalletConnect` directly from the `expo` client without having to eject the application.

## Firebase is used for Authentication and storing data

## Getting Started

Please go ahead and install the packages via `yarn install`, then, run `yarn start` or `expo start`.
Once the build is complete and opened in the `Expo Go` app, connect your wallet by pressing the `Connect a wallet` button.
