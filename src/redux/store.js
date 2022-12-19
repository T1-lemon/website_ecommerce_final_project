import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import { userSlice } from "./slices/userSlice";
import { productSlice } from "./slices/productSlice";
import globalSlice  from "./slices/globalSlice";
import categorySlice  from "./slices/categorySlice";


const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice,
        product: productSlice.reducer,
        globalSlice,
        categorySlice
    }
})

export default store;