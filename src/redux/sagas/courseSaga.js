import { handleAddCourse, handleGetAllCourse } from "../apis/courseAPIs";
import { put, takeEvery } from "redux-saga/effects"
import { ADD_COURSE, GET_ALL_COURSES } from "../types/courseTypes";
import { onHandleAddBenefits} from "./benefitSaga";
import { setCourses } from "../slices/courseSlice";
import { endLoading } from "../slices/loaderSlice";

export function* onHandleAddCourse(action){
    yield handleAddCourse(action.course);
    yield onHandleAddBenefits(action);
    yield put(endLoading());
}

export function* onHandleGetAllCourse() {
    const courses = yield handleGetAllCourse();
    yield put(setCourses(courses));
}

export function* allCourseSaga(){
    yield takeEvery(ADD_COURSE, onHandleAddCourse);
    yield takeEvery(GET_ALL_COURSES, onHandleGetAllCourse);
}