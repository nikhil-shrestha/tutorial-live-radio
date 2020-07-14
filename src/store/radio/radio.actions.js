import * as RadioType from './radio.types';

export const fetchLocalRadioStart = () => ({
  type: RadioType.FETCH_LOCAL_RADIO_START,
});

export const fetchLocalRadioSuccess = (data) => ({
  type: RadioType.FETCH_LOCAL_RADIO_SUCCESS,
  payload: data,
});

export const fetchLocalRadioFail = (error) => ({
  type: RadioType.FETCH_LOCAL_RADIO_FAIL,
  payload: error,
});

export const getRadioStationStart = (id) => ({
  type: RadioType.GET_RADIO_STATION_START,
  payload: id,
});

export const getRadioStationSuccess = (id, data) => ({
  type: RadioType.GET_RADIO_STATION_SUCCESS,
  payload: { id, data },
});

export const getRadioStationFail = (error) => ({
  type: RadioType.GET_RADIO_STATION_FAIL,
  payload: error,
});
