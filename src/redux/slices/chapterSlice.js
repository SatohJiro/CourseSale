import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chapters: [],
    chapter: undefined,
    showFormAddChapter: false,
    showFormEditChapter: false
};

const chapterSlice = createSlice({
    name: "chapter",
    initialState,
    reducers: {
        setChapters: (state, action) => {
            return {
                ...state,
                chapters: action.payload
            }
        },
        setChapter: (state, action) => {
            return {
                ...state,
                chapter: action.payload
            }
        },
        openFormAddChapters: (state) => {
            return {
                ...state,
                showFormAddChapter: true
            }
        },
        closeFormAddChapters: (state, action) => {
            return {
                ...state,
                showFormAddChapter: false
            }
        },
        openFormEditChapters: (state, action) => {
            return {
                ...state,
                showFormEditChapter: true
            }
        },
        closeFormEditChapters: (state, action) => {
            return {
                ...state,
                showFormEditChapter: false
            }
        },
    }
});

export const {setChapters, setChapter,openFormAddChapters, openFormEditChapters, closeFormAddChapters, closeFormEditChapters } = chapterSlice.actions;
export default chapterSlice.reducer;