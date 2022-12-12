import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { userSlice } from "./slices/userSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice,
    }
})

export default store;