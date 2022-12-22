import { handleAddCourseToCourseOfUser, handleGetUserById, handleGetUserEntityById, handleLogin, handleUpdateUser } from "../apis/userAPIs";
import { put, takeEvery } from 'redux-saga/effects';
import { ADD_COURSE_TO_COURSE_OF_USER, GET_USER_BY_ID, LOGIN, UPDATE_USER } from "../types/userTypes";
import { setNewUser, setUser } from "../slices/profileSlice";

export function* onHandleAddCourseToCourseOfUser(action) {
    yield handleAddCourseToCourseOfUser(action.userId, action.courses);
}

export function* onHandleLogin(action){
    const user = yield handleLogin(action.username, action.password);
    if (user){
        action.success(user);
    }else{
        action.fail();
    }
}

export function* onHandleGetUserById(action){
    const user = yield handleGetUserById(action.id);
    const userEntity = yield handleGetUserEntityById(action.id);
    yield put(setUser(user));
    yield put(setNewUser(userEntity));
}

export function* onHandleUpdateUser(action) {
    console.log(action.newUser);
    yield handleUpdateUser(action.newUser);
}

export function* allUserSaga(){
    yield takeEvery(ADD_COURSE_TO_COURSE_OF_USER, onHandleAddCourseToCourseOfUser);
    yield takeEvery(LOGIN, onHandleLogin);
    yield takeEvery(GET_USER_BY_ID, onHandleGetUserById);
    yield takeEvery(UPDATE_USER, onHandleUpdateUser);
}