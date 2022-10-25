import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchCategory = createAsyncThunk("todo/thunk", async () =>
  fetch("https://fakestoreapi.com/products/categories")
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
const categorySlice = createSlice({
  name: "Thunk",
  initialState: initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: function (builder) {
    builder.addCase(fetchCategory.pending, (state, action) => {
      return {
        loading: true,
        error: "",
        data: [],
      };
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
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
    builder.addCase(fetchCategory.rejected, (state, action) => {
      return {
        loading: false,
        error: "Could not get Category",
        data: [],
      };
    });
  },
});

export default categorySlice.reducer;