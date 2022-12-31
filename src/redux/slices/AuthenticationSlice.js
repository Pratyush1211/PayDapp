// user flow
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "../../services/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const user = AsyncStorage.getItem("@userdetails");


export const login = createAsyncThunk(
  "login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          AsyncStorage.setItem("@userdetails", JSON.stringify(userCredential.user));
          return userCredential;
        })
        .catch((error) => alert(error));
      return { user: response.user };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const signup = createAsyncThunk(
  "signup",
  async (
    { email, password, firstname, lastname, username, phoneno },
    thunkAPI
  ) => {
    try {
      const response = await auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          AsyncStorage.setItem("@userdetails", JSON.stringify(userCredential.user));
          db.collection("users").doc(userCredential.user.uid).set({
            firstname: firstname,
            lastname: lastname,
            username: username,
            phone_number: phoneno,
          });
          return userCredential;
        })
        .catch((error) => alert(error.message));
      return { user: response.user };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk("signout", async (thunkAPI) => {
  try {
    await auth.signOut();
    AsyncStorage.removeItem("@userdetails");
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const initialState = user
  ? { isLoggedIn: true, user: user }
  : { isLoggedIn: false, user: null };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice.reducer;
