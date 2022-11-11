import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../categoryReducer/categoryReducer";
import productDetailReducer from "../productDetailReducer/productDetailReducer";
import productReducer from "../productReducer/productReducer";
import cartReducer from "../cartReducer/cartReducer";
// import productDetailReducer from "../productDetailReducer/productDetailReducer";

const rootReducer=combineReducers({categoryReducer,productReducer,productDetailReducer,cartReducer})
export type AppState=ReturnType<typeof rootReducer>