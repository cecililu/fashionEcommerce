import { createSlice } from '@reduxjs/toolkit'

const initialState = { items:[] }

const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      
    }
  },
})

export const { increment } = cartSlice.actions
export default cartSlice.reducer
