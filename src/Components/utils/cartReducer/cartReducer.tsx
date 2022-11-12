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

      const index=state.items.findIndex((item:any)=>item.id===action.payload)
      //aready exist
      if (index>=0){ 
        state.item[index].cartQuanity+=1
      }else{
      //not exist
      const tempProduct={...action.payload,cartQuantity:1}
      state.items.push(tempProduct);
      }
      state.cartTotalQuantity=state.items.reduce((prevValue:any, currentValue:any) => prevValue + currentValue.cartQuantity,0)
      
    }
  },
})
export const { addItem } = cartSlice.actions
export default cartSlice.reducer
