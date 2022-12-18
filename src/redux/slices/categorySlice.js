import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    category: undefined,
    showAddCategoryForm: false,
    showEditCategoryForm: false
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        },
        setCategory: (state, action) => {
            return {
                ...state,
                category: action.payload
            }
        },
        openAddCategoryForm: (state) => {
            return {
                ...state,
                showAddCategoryForm: true
            }
        },
        closeAddCategoryForm: (state) => {
            return {
                ...state,
                showAddCategoryForm: false
            }
        },
        openEditCategoryForm: (state) => {
            return {
                ...state,
                showEditCategoryForm: true
            }
        },
        closeEditCategoryForm: (state) => {
            return {
                ...state,
                showEditCategoryForm: false
            }
        }
    }
});

export const {openAddCategoryForm, closeAddCategoryForm, setCategories, openEditCategoryForm, closeEditCategoryForm, setCategory} = categorySlice.actions;
export default categorySlice.reducer;