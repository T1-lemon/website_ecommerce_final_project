import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCurrentUser, loginServices } from "../../services/loginServices";
import { toast } from "react-toastify";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    message: "logout",
    token: {},
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
        state.token = action.payload.accessToken;
        if (state.message === "LoginSuccess") {
          state.userInfor = action.payload;
          localStorage.setItem("currentUser", JSON.stringify(action.payload.currentUser));
          localStorage.setItem("token", JSON.stringify(state.token));
        }
      })
  },
});

export const userLoginApi = createAsyncThunk(
  "user/userLogin",
  async (dataLogin) => {
    const responeToken = await loginServices(dataLogin);
    const accessToken = responeToken.data.accessToken;
    const responeCurrenUser = await getCurrentUser(accessToken);
    const respone = {
      accessToken,
      currentUser: responeCurrenUser.data,
    };
    return respone;
  }
);

