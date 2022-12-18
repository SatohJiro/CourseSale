import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    showChangeAvtForm: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        openChangeAvtForm: (state, action) => {
            return {
                ...state,
                showChangeAvtForm: true
            }
        },
        closeChangeAvtForm: (state, action) => {
            return {
                ...state,
                showChangeAvtForm: false
            }
        }
    }
});

export const {openChangeAvtForm, closeChangeAvtForm} = profileSlice.actions;
export default profileSlice.reducer;