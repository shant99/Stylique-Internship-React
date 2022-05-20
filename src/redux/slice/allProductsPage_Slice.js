import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: [] ,
    tagname: [],
    cardOpen: false,
    cardDetails: {}
}

const allProductsPage_Slice = createSlice({
    name: 'allProductsPage_Slice' ,
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

export let {setProducts , setTagname , setCardDetails} = allProductsPage_Slice.actions;
export default allProductsPage_Slice.reducer;