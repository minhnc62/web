import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const getUser = createAsyncThunk("getUser", async (_, thunk) => {
  const token = localStorage.getItem("token");
  return axios
    .get("https://todo-api-with-auth.herokuapp.com/api/auth/user", {
      headers: {
        Athorzation: token,
      },
    })
    .then((res) => {
      return res.data.data;
    })
    .catch((err) => {
      return thunk.rejectWithValue(err.error);
    });
});

const login = createAsyncThunk("login", async(user,thunk)=>{
    return axios.post("https://todo-api-with-auth.herokuapp.com/api/auth/signin",JSON.stringify(user),
    {
        headers:{
            "content-Type":"application/json",
        },
    }).then((res)=>{
        localStorage.setItem("token", res.headers.authorization);
        return res.data.data;
    }).catch((err)=>{
        return thunk.rejectWithValue(err.error)
    })

})

const authSlide = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
  },
});

export const authReducer = authSlide.reducer;
export { getUser };
export const { setUser } = authSlide.actions;
