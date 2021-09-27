import { all, put, takeEvery } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* helloSaga() {
	console.log("Hello Sagas!");
}

//Worker Saga: will perform the async increment task
export function* incrementAsync() {
	yield delay(1000);
	yield put({ type: "INCREMENT" });
}

//Watcher Saga: spawn a new async increment task on
//each INCREMENT_ASYNC

export function* watchIncrementAsync() {
	yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

//Root Saga: to start all the Sagas at once
export function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}