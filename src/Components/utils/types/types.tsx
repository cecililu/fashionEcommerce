import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../categoryReducer/categoryReducer";
import productReducer from "../productReducer/productReducer";

const rootReducer=combineReducers({categoryReducer,productReducer})
export type AppState=ReturnType<typeof rootReducer>