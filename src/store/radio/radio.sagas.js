import { takeLatest, call, put, all } from 'redux-saga/effects';
import axios from 'axios';

import * as RadioType from './radio.types';
import {
  fetchLocalRadioFail,
  fetchLocalRadioSuccess,
  getRadioStationFail,
  getRadioStationSuccess,
} from './radio.actions';

export function* fetchLocalRadioAsync() {
  try {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    };
    const { data } = yield axios.get(
      'https://cors-anywhere.herokuapp.com/http://opml.radiotime.com/Browse.ashx?c=local&render=json',
      config
    );
    yield put(fetchLocalRadioSuccess(data.body[0].children));
  } catch (err) {
    console.warn('ERR::', err);
    yield put(fetchLocalRadioFail(err));
  }
}

export function* getRadioStationAsync({ payload: url }) {
  try {
    const { data } = yield axios.get(
      `https://cors-anywhere.herokuapp.com/${url}&formats=aac,mp3&render=json`
    );
    yield put(getRadioStationSuccess(data.body[0].url));
  } catch (err) {
    yield put(getRadioStationFail(err));
  }
}

export function* watchFetchLocalRadio() {
  yield takeLatest(RadioType.FETCH_LOCAL_RADIO_START, fetchLocalRadioAsync);
}

export function* watchGetRadioStation() {
  yield takeLatest(RadioType.GET_RADIO_STATION_START, getRadioStationAsync);
}

export function* radioSagas() {
  yield all([call(watchFetchLocalRadio), call(watchGetRadioStation)]);
}
