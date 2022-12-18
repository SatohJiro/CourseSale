import { all, fork } from "redux-saga/effects";
import { allBenefitSaga } from "./sagas/benefitSaga";
import { allCategoriesSaga } from "./sagas/categorySaga";
import { allChapterSaga } from "./sagas/chapterSaga";
import { allCourseSaga } from "./sagas/courseSaga";
import { allLessonQuestionSaga } from "./sagas/lessonQuestionSaga";
import { allLessonVideoSaga } from "./sagas/lessonVideoSaga";

export function* rootSaga(){
    yield all([
        fork(allCategoriesSaga), 
        fork(allCourseSaga),
        fork(allBenefitSaga),
        fork(allChapterSaga),
        fork(allLessonVideoSaga),
        fork(allLessonQuestionSaga)
    ])
}