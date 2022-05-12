import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [] ,
    cardOpen: false,
}

const reducerOne = createSlice({
    name: 'reducerOne' ,
    initialState,
    reducers: {
        setProducts: (state, action)=> {

        }
    }
})

export let {setProducts} = reducerOne.actions;
export default reducerOne.reducer;