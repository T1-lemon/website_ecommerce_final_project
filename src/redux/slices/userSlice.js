import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginServices } from "../../services/loginServices";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    message: "logout",
    userInfor: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLoginApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLoginApi.fulfilled, (state, action) => {
        state.status = "idle";
        action.payload.accessToken === undefined
          ? (state.message = "LoginFail")
          : (state.message = "LoginSuccess");
        state.userInfor = action.payload;
      });
  },
});

export const userLoginApi = createAsyncThunk(
  "user/userLogin",
  async (dataLogin) => {
      const respone = await loginServices(dataLogin);
      return respone.data;
  }
);

