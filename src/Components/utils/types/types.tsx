import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "../categoryReducer/categoryReducer";



const rootReducer=combineReducers({categoryReducer})
export type AppState=ReturnType<typeof rootReducer>