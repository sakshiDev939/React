import {createSlice} from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cartItems:null,
    },
    reducers:{
        addToCart:(state,action) => {
            state.cartItems = action.payload;
        },
        removeFromCart:()=>{},
    },
})

export const {addToCart,removeFromCart} = CartSlice.actions;
export default CartSlice.reducer;