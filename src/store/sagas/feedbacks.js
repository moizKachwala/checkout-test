import { takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions/feedbacks';

function *list() {
    try {
        yield put({ type: actions.FEEDBACKS_LIST_PENDING });
        // const payload = yield call(API.getRoles);
        yield put({ type: actions.FEEDBACKS_LIST_FULFILLED, payload: [] });
    }
    catch (error) {
        const { error: errorMessage } = (error && error.payload) || { error: ''};
        yield put({ type: actions.FEEDBACKS_LIST_REJECTED, payload: errorMessage });
    }
}

function *create(action) {
    try {
        yield put({ type: actions.FEEDBACKS_CREATE_PENDING });
        const { feedback, callback } = action.payload;

        // const payload = {
        //     ...feedback,
        // }
        // const newUser = yield call(API.createUser, payload);
        yield put({ type: actions.FEEDBACKS_CREATE_FULFILLED, payload: {} });

        if (callback) {
            callback();
        }
    } catch (error) {
        const { error: errorMessage } = (error && error.payload) || { error: ''};
        yield put({ type: actions.FEEDBACKS_CREATE_REJECTED, payload: errorMessage });
    }
}

export default function *() {
    yield takeEvery(actions.FEEDBACKS_LIST, list);
    yield takeEvery(actions.FEEDBACKS_CREATE, create);
}