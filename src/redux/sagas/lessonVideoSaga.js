import { put, takeEvery } from "redux-saga/effects";
import { handleAddLessonVideo, handleGetAllLessonVideo } from "../apis/lessonVideoAPIs";
import { setLessonVideos } from "../slices/lessonVideoSlice";
import { ADD_LESSON_VIDEO, GET_ALL_LESSON_VIDEO_ENTITY } from "../types/lessonVideoType";

export function* onHandleGetAllLessonVideoEntity() {
    const lessonVideos = yield handleGetAllLessonVideo();
    yield put(setLessonVideos(lessonVideos));
}

export function* onHandleAddLessonVideo(action){
    yield handleAddLessonVideo(action.lessonVideo);
    console.log("ok");
}

export function* allLessonVideoSaga() {
    yield takeEvery(GET_ALL_LESSON_VIDEO_ENTITY, onHandleGetAllLessonVideoEntity);
    yield takeEvery(ADD_LESSON_VIDEO, onHandleAddLessonVideo);
}