import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    load: false,
};

const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        startLoading: (state) => {
            return {
                ...state,
                load: true
            }
        },
        endLoading: (state) => {
            return {
                ...state,
                load: false
            }
        }
    }
});

export const {startLoading, endLoading} = loaderSlice.actions;
export default loaderSlice.reducer;