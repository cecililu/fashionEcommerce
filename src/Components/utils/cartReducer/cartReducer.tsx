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
      
      const index=state.items.findIndex((item:any)=>{
              return item.data.id===action.payload.data.id
            })
      console.log(index)
      //aready exist
      if (index>=0){ 
        state.items[index]['cartQuantity'] =state.items[index]['cartQuantity'] +1
    
      }else{
      //not exist
      // console.log('new product added exists')
      const tempProduct={...action.payload,cartQuantity:1}
      state.items=[...state.items,tempProduct];

      console.log(state.items[0])    
      
    }
      state.cartTotalQuantity=state.items.reduce((prevValue:any, currentValue:any) => prevValue + currentValue.cartQuantity,0)
     

      
    }
  },
})
export const { addItem } = cartSlice.actions
export default cartSlice.reducer
