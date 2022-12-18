import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    course: undefined,
};

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setCourses: (state, action) => {
            return {
                ...state,
                courses: action.payload
            }
        }
    }
});

export const {setCourses} = courseSlice.actions;
export default courseSlice.reducer;