import { handleGetAllByQuestionId, handleSaveListAnswer } from "../apis/answerAPIs";

export function* onHandleSaveListAnswers(answers){
    yield handleSaveListAnswer(answers);
}

export function* onHandleGetAllByQuestionId(action) {
    const answers = yield handleGetAllByQuestionId(action.questionId);
}