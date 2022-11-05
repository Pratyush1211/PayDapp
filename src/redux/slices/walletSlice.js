import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userwalletAddress: "",
}

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, action) => {
      state.userwalletAddress = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWalletAddress } = walletSlice.actions

export default walletSlice.reducer