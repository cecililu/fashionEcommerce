import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "../categoryReducer/categoryReducer"




export const store= configureStore({
  reducer:{
    categoryReducer
  } 
  
  
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;



