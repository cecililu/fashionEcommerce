import { configureStore } from "@reduxjs/toolkit"

import categoryReducer from "../categoryReducer/categoryReducer"
import productReducer from "../productReducer/productReducer"

import cartReducer from "../cartReducer/cartReducer"

import productDetailReducer from '../productDetailReducer/productDetailReducer'


export const store= configureStore({
     reducer:{
      categoryReducer,
      productReducer,
      productDetailReducer,
      cartReducer,
  } 
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export {}

