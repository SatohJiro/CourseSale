import { takeEvery } from "redux-saga/effects";
import { handleAddBenefits } from "../apis/benefitAPIs";
import { ADD_LIST_BENEFIT } from "../types/benefitType";

export function* onHandleAddBenefits(action){
    yield handleAddBenefits(action.benefits);
}

export function* allBenefitSaga(){
    yield takeEvery(ADD_LIST_BENEFIT, onHandleAddBenefits);
}