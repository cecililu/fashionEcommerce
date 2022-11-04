import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchProductDetail = createAsyncThunk("productDetail/thunk", async () =>
  fetch("https://fakestoreapi.com/products/1")
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
const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: function (builder) {
    builder.addCase(fetchProductDetail.pending, (state, action) => {
      return {
        loading: true,
        error: "",
        data: [],
      };
    });
    builder.addCase(fetchProductDetail.fulfilled, (state, action) => {
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
    builder.addCase(fetchProductDetail.rejected, (state, action) => {
      return {
        loading: false,
        error: "Could not get Category",
        data: [],
      };
    });
  },
});

export default productDetailSlice.reducer;