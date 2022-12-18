import { handleDeleteCategoryById, handleGetCategoies, handleGetCategoryById, handleSaveCategory, handleUpdateCategory } from "../apis/categoryAPIs";
import { put, takeEvery } from "redux-saga/effects"
import { ADD_CATEGORY, DELETE_CATEGORY, GET_ALL_CATEGORIES, GET_CATEGORY_BY_ID, UPDATE_CATEGORY } from "../types/categoryTypes";
import { closeEditCategoryForm, setCategories, setCategory } from "../slices/categorySlice";

export function* onHandleGetAllCategories() {
    const categories = yield handleGetCategoies();
    yield put(setCategories(categories));
};

export function* onHandleAddCategory(action){
    yield handleSaveCategory(action.category);
    yield onHandleGetAllCategories();
}

export function* onHandleGetCategoryById(action){
    const category = yield handleGetCategoryById(action.id);
    yield put(setCategory(category));
}

export function* onHandleUpdateCategory(action){
    yield handleUpdateCategory(action.category);
    yield put(closeEditCategoryForm());
    yield put(setCategory(null));
    yield onHandleGetAllCategories();
}

export function* onHandleDeleteCategory(action){
    yield handleDeleteCategoryById(action.id);
    yield onHandleGetAllCategories();
}

export function* allCategoriesSaga(){
    yield takeEvery(GET_ALL_CATEGORIES, onHandleGetAllCategories);
    yield takeEvery(ADD_CATEGORY, onHandleAddCategory);
    yield takeEvery(GET_CATEGORY_BY_ID, onHandleGetCategoryById);
    yield takeEvery(UPDATE_CATEGORY, onHandleUpdateCategory)
    yield takeEvery(DELETE_CATEGORY, onHandleDeleteCategory);
}