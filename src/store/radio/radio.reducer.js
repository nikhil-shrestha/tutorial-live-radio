import * as RadioType from './radio.types';

import data from '../../data/data1.json';

const INITIAL_STATE = {
  results: data,
  isFetching: false,
  errors: [],
};

const radioReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  let updatedState;
  switch (type) {
    case RadioType.FETCH_LOCAL_RADIO_START:
      return {
        ...state,
        isFetching: true,
      };

    case RadioType.FETCH_LOCAL_RADIO_SUCCESS:
      updatedState = {
        ...state,
        isFetching: false,
      };
      for (const radio of payload) {
        updatedState.results[radio.guide_id] = radio;
      }

      return updatedState;

    case RadioType.FETCH_LOCAL_RADIO_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default radioReducer;
