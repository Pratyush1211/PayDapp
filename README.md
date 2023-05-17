# Paydapp
This app demonstrates use of WalletConnect to connect app to Metamask.

## App Flow
1. Login though email and password.
2. Click on Connect Wallet.
3. User selects Metamask.
4. User approves Metamask to connect to Paydapp..
5. User can click on Paydapp Continnue to land to Paydapp home page.


## Features
- Connect Wallet
- Able to fetch transaction details.
- Able to Scan QR Code for wallet address to perform transactions.
- Phone Book like Display of Contacts to perform quick transaction.(Dummy Data)

# WalletConnect Example on Expo
`WalletConnect` is used to connect decentralized wallet like Metamask with React Native `expo`

## `WalletConnect`'s dependency on Node's `crypto` package

`WalletConnect` uses node's built-in crypto package which is not available on iOS or Android.
In order to work around this we can use `metro.config.js` to create aliases for different packages, this idea is from [here](https://learn.figment.io/tutorials/how-to-successfully-connect-to-a-celo-wallet-with-a-react-native-dapp).
This will allow us to use `WalletConnect` directly from the `expo` client without having to eject the application.

## Return object on successful wallet connection
{
  "accounts": [
    "0xc8ee416ca70ba4b500dcc3fdf351b65a924eaded"
  ],
  "chainId": 1,
  "peerId": "cee46d16-9e4e-4177-9ffc-dfd11ee19ba4",
  "peerMeta": {
    "description": "MetaMask Mobile app",
    "icons": [
      "![MetaMask Logo](https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg)"
    ],
    "name": "MetaMask",
    "ssl": true,
    "url": "https://metamask.io"
  }
}

## Firebase is used for Authentication.
A user can register or sign in with Firebase functions using email and password the whole authentication states are managed by redux-toolit 



## Getting Started 
1. Clone the repo.
2. run `yarn install`.
3. run `npx expo start`.
4. Scan the QR Code.
5. Run the application.


