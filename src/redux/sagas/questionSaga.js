import { handleSaveListQuestions } from '../apis/questionAPIs';
import { onHandleSaveListAnswers } from './answerSaga';

export function* onHandleSaveListQuestions(questions){
    console.log(questions[0].answers);
    yield handleSaveListQuestions(questions);
    for (let i = 0; i < questions.length; i++){
        yield onHandleSaveListAnswers(questions[i].answers);
    }
}