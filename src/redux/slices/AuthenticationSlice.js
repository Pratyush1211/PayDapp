import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../services/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const user = null;

export const login = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    try {
        const response = await auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return userCredential
        })
        .catch((error) =>
          alert("Register on App first or enter the credential carefully ")
        );
        return {user: response.user}
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      console.log(action.payload.user)
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
