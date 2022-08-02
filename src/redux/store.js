import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./root-reducer";

let store = configureStore({
    reducer:{
        root: RootReducer,
    }
})

export default store;