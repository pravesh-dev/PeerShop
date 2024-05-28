import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    statusCartTab: false
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
            localStorage.setItem("carts", JSON.stringify(state.items))
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
            localStorage.setItem("carts", JSON.stringify(state.items))
        },
        toggleStatusCartTab(state){
            if(state.statusCartTab === false){
                state.statusCartTab = true;
            }else {
                state.statusCartTab = false;
            }
        }
    }
})

export const { addToCart, changeQuantity, toggleStatusCartTab } = cartSlice.actions;
export default cartSlice.reducer;