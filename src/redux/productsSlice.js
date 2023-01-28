import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        currentProduct: localStorage.getItem('currentProduct')
            ? JSON.parse(localStorage.getItem('currentProduct'))
            : [],
    },
    reducers: {
        setCurrentProduct(state, action) {
            state.currentProduct = action.payload;
            localStorage.setItem(
                'currentProduct',
                JSON.stringify(state.currentProduct)
            );
        },
    },
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
