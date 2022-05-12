import { configureStore } from "@reduxjs/toolkit"
import reducerOne from './slice/reducerOne'

const store = configureStore({
    reducer: {
        reducerOne
    }
})

export default store