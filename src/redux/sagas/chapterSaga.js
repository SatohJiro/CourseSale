import { put, takeEvery } from "redux-saga/effects";
import { handleAddChapter, handleDeleteChapter, handleGetAllChapter, handleGetChaptersByCourseId, handleGetOneById, handleUpdateChapter } from "../apis/chapterAPIs";
import { closeFormEditChapters, setChapter, setChapters } from "../slices/chapterSlice";
import { ADD_CHAPTER, DELETE_CHAPTER, GET_ALL_CHAPTERS, GET_CHAPTERS_BY_COURSE_ID, GET_CHAPTER_BY_ID, UPDATE_CHAPTER } from "../types/chapterTypes";

export function* onHandleGetAllChapter(){
    const chapters = yield handleGetAllChapter();
    yield put(setChapters(chapters));
}

export function* onHandleAddChapter(action){
    yield handleAddChapter(action.chapter);
}

export function* onHandleGetOneById(action){
    const chapter = yield handleGetOneById(action.id);
    yield put(setChapter(chapter));
}

export function* onHandleUpdateChapter(action){
    yield handleUpdateChapter(action.chapter);
    yield put(closeFormEditChapters());
    yield put(setChapter(null));
    console.log("endUpdate");
}

export function* onHandleDeleteChapter(action){
    yield handleDeleteChapter(action.id);
    console.log("end delete")
}

export function* onHandleGetChaptersByCourseId(action){
    const chapters = yield handleGetChaptersByCourseId(action.courseId);
    yield put(setChapters(chapters));
}

export function* allChapterSaga(){
    yield takeEvery(GET_ALL_CHAPTERS, onHandleGetAllChapter);
    yield takeEvery(ADD_CHAPTER, onHandleAddChapter);
    yield takeEvery(GET_CHAPTER_BY_ID, onHandleGetOneById);
    yield takeEvery(UPDATE_CHAPTER, onHandleUpdateChapter);
    yield takeEvery(DELETE_CHAPTER, onHandleDeleteChapter);
    yield takeEvery(GET_CHAPTERS_BY_COURSE_ID, onHandleGetChaptersByCourseId);
}