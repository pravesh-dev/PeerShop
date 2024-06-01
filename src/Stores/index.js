import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import userReduces from "./user";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReduces
        // can add more reducer for example user: ....
    }
})
