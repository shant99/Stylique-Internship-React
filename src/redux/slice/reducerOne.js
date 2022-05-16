import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [] ,
    tagname: [],
    cardOpen: false,
    cardDetails: {}
}

const reducerOne = createSlice({
    name: 'reducerOne' ,
    initialState,
    reducers: {
        setProducts: (state, action)=> {
            state.products = action.payload.products
        } , 
        setTagname: (state, action)=>{
            state.tagname = action.payload.tagname
        },
        setCardDetails:(state, action)=> {
            state.cardDetails = action.payload.cardDetails
        }
    }
})

export let {setProducts , setTagname , setCardDetails} = reducerOne.actions;
export default reducerOne.reducer;