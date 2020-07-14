import { combineReducers } from 'redux';

import radioReducer from './radio/radio.reducer';

const rootReducer = combineReducers({
  radio: radioReducer,
});

export default rootReducer;
