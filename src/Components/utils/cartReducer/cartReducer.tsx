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
     
      if (index>=0){ 
        state.items[index]['cartQuantity'] =state.items[index]['cartQuantity'] +1
    
      }else{
    
      const tempProduct={...action.payload,cartQuantity:1}
      state.items=[...state.items,tempProduct];  
    
    }
      state.cartTotalQuantity=state.items.reduce((prevValue:any, currentValue:any) => prevValue + currentValue.cartQuantity,0)
     
    },
    increaseQuantity(state: any,action) {
      console.log(action.payload.id)
       const index=state.items.findIndex((item:any)=>{
        
        return item.data.id===action.payload.id
      })
      state.items[index]['cartQuantity'] =state.items[index]['cartQuantity'] +1
    },
    decreaseQuantity(state: any,action) {
      const index=state.items.findIndex((item:any)=>{
       return item.data.id===action.payload.data.id
     })
     state.items[index]['cartQuantity'] =state.items[index]['cartQuantity'] -1
   }
  },
})
export const { addItem ,decreaseQuantity,increaseQuantity} = cartSlice.actions
export default cartSlice.reducer
