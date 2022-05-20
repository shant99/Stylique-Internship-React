import { configureStore } from "@reduxjs/toolkit"
import cardDetailsPage_Slice from "./slice/cardDetailsPage_Slice"
import allProductsPage_Slice from './slice/allProductsPage_Slice'

const store = configureStore({
    reducer: {
        allProductsPage_Slice,
        cardDetailsPage_Slice
    }
})

export default store