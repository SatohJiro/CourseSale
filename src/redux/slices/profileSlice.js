import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined,
    newUser: undefined,
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
        },
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload
            }
        },
        setNewUser: (state, action) => {
            return{
                ...state,
                newUser: action.payload
            }
        }
    }
});

export const {openChangeAvtForm, closeChangeAvtForm, setUser, setNewUser} = profileSlice.actions;
export default profileSlice.reducer;