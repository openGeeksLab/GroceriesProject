import { combineReducers } from 'redux';

import settings from './settings-reducers';

export const reducers = {
  settings
};

export default combineReducers(reducers);
