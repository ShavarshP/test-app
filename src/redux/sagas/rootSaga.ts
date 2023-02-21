import { all, fork } from 'redux-saga/effects';
import speakersSaga from './speakersSaga';

export function* rootSaga() {
    yield all([fork(speakersSaga)]);
}
