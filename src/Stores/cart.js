import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const {productId, quantity} = action.payload;
            const indexProduct = (state.items).findIndex(item => item.productId === productId);
            if(indexProduct >= 0 ){
                state.items[indexProduct].quantity += quantity;
            }else{
                state.items.push({productId, quantity});
            }
        },
        changeQuantity(state, action){
            const {productId, quantity} = action.payload;
            const indexProductId = (state.items).findIndex(item => item.productId === productId);
            if(quantity > 0){
                state.items[indexProductId].quantity = quantity;
            }
            else{
                // delete state.items[indexProductId]
                state.items = (state.items).filter(item => item.productId !== productId);
            }
        },
    }
})

export const { addToCart, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;