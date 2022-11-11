import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
                   items:[],
                   cartTotalQuantity:0,
                   cartTotal:0,

                 }

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     addItem(state: any,action) {
    state.items.push(action.payload)
    }
  },
})

export const { addItem } = cartSlice.actions
export default cartSlice.reducer
