import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../categoryReducer/categoryReducer";
import productDetailReducer from "../productDetailReducer/productDetailReducer";
import productReducer from "../productReducer/productReducer";
// import productDetailReducer from "../productDetailReducer/productDetailReducer";

const rootReducer=combineReducers({categoryReducer,productReducer,productDetailReducer})
export type AppState=ReturnType<typeof rootReducer>