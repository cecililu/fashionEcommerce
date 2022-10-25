import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "../categoryReducer/categoryReducer"
import productReducer from "../productReducer/productReducer"




export const store= configureStore({
  reducer:{
    categoryReducer,
    productReducer
  } 
  
  
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;



