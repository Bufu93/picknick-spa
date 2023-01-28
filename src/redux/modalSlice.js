import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
    },
    reducers: {
        Open(state, action) {
            state.isOpen = true;
            document.querySelector('body').style.overflow = 'hidden';
        },
        Close(state, action) {
            state.isOpen = false;
            document.querySelector('body').style.overflow = 'auto';
        },
    },
});

export const { Open, Close } = modalSlice.actions;
export default modalSlice.reducer;
