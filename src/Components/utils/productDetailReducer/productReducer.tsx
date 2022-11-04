import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProduct = createAsyncThunk("product/thunk", async () =>
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
       return data;
    }).catch((err) => "error-api-call")
);
const initialState = {
    data: [],
    error: "",
    loading: false,
  };
const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: function (builder) {
    builder.addCase(fetchProduct.pending, (state, action) => {
      return {
        loading: true,
        error: "",
        data: [],
      };
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      console.log(
        "🚀 ~ file: Reducer4.js ~ line 35 ~ builder.addCase ~ action",
        action
      );
      return {
        loading: false,
        error: "",
        data: action.payload,
      };
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      return {
        loading: false,
        error: "Could not get Category",
        data: [],
      };
    });
  },
});

export default productSlice.reducer;