import { all, call } from 'redux-saga/effects';

import { radioSagas } from './radio/radio.sagas';

export default function* rootSaga() {
  yield all([call(radioSagas)]);
}
