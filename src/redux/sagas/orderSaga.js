import { handleGetAllOrders, handleGetOrderById, handleUpdateOrder } from "../apis/orderAPIs";
import { put, takeEvery } from 'redux-saga/effects';
import { GET_ALL_ORDER, GET_BY_ORDER_ID, UPDATE_ORDER } from "../types/orderTypes";
import { setOrder, setOrders } from "../slices/orderSlices";

export function* onHandleGetAllOrder() {
    const orders = yield handleGetAllOrders();
    yield put(setOrders(orders));
}

export function* onHandleGetOrderById(action){
    const order = yield handleGetOrderById(action.id);
    yield put(setOrder(order));
}

export function* onHandleUpdateOrder(action){
    yield handleUpdateOrder(action.order);
    yield put(setOrder(action.order));
}

export function* allOrderSaga(){
    yield takeEvery(GET_ALL_ORDER, onHandleGetAllOrder);
    yield takeEvery(GET_BY_ORDER_ID, onHandleGetOrderById);
    yield takeEvery(UPDATE_ORDER, onHandleUpdateOrder);
}