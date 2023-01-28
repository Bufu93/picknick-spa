import { createSlice } from '@reduxjs/toolkit';

const thxSlice = createSlice({
    name: 'thx',
    initialState: {
        isOpen: false,
    },
    reducers: {
        thxOpen(state, action) {
            state.isOpen = true;
            document.querySelector('body').style.overflow = 'hidden';
        },
        thxClose(state, action) {
            state.isOpen = false;
            document.querySelector('body').style.overflow = 'auto';
        },
    },
});

export const { thxOpen, thxClose } = thxSlice.actions;
export default thxSlice.reducer;
