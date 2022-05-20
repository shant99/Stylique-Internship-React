import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CARD_DETAILS_API } from "../../config/actions";

const initialState = {
  cardDetails: {},
  productImages: [],
};

export let asyncFunction = createAsyncThunk(
  "asyncFunction",
  async function (a, b) {
    // 1 parametr ayn inch karoxes tal dispatchov , 2 {}
    const response = await fetch(CARD_DETAILS_API);
    const data = await response.json();
    return data;
  }
);

const cardDetailsPage_Slice = createSlice({
  name: "cardDetailsPage_Slice",
  initialState,
  reducers: {
    setCardDetails: (state, action) => {
      console.log("ss");
      state.cardDetails = action.payload;
    },
  },
  extraReducers: {
    //urish slice-i reducerneri hamara
    [asyncFunction.pending]: (state, action) => {},
    [asyncFunction.fulfilled]: (state, action) => {
      state.cardDetails = action.payload;
      // fulfilled depqum state-@ karucum enq 
      state.productImages = action.payload.ProductImages;
    },
    [asyncFunction.rejected]: (state, action) => {},
  },
});

export let { setCardDetails } = cardDetailsPage_Slice.actions;
export default cardDetailsPage_Slice.reducer;
