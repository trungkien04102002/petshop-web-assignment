import { configureStore } from "@reduxjs/toolkit";
import cartAddingReducer from '../components/Slice/cartSlice'

const store =configureStore({
    reducer:{
        cartAdding: cartAddingReducer
    },
})

export default store;