import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';
import modalReducer from './modalSlice';
import thxReducer from './thxSlice';
import { getTotals } from './cartSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productsReducer,
        modal: modalReducer,
        thx: thxReducer,
    },
});

store.dispatch(getTotals());
