import { takeEvery } from "@redux-saga/core/effects";
import { handleAddLessonQuestion } from "../apis/lessonQuestionAPIs";
import { ADD_LESSON_QUESTION } from "../types/lessonQuestionTypes";
import { onHandleSaveListQuestions } from "./questionSaga";

export function* onHandleAddLessonQuestion(action){
    yield handleAddLessonQuestion(action.lessonQuestion);
    yield onHandleSaveListQuestions(action.lessonQuestion.questions);
}

export function* allLessonQuestionSaga(){
    yield takeEvery(ADD_LESSON_QUESTION, onHandleAddLessonQuestion);
}