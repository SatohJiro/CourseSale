import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lessonVideos: [],
    lessonVideo: undefined,
};

const lessonVideoSlice = createSlice({
    name: "lesson-video",
    initialState,
    reducers: {
        setLessonVideos: (state, action) => {
            return {
                ...state,
                lessonVideos: action.payload
            }
        }
    }
});

export const {setLessonVideos} = lessonVideoSlice.actions;
export default lessonVideoSlice.reducer;