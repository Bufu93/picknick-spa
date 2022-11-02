import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import { getTotals } from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productsReducer,
    },
});

store.dispatch(getTotals());
