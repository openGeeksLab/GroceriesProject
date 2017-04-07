import { combineReducers } from 'redux';

import settings from './settings-reducers';
import main from './main-reducers';

export const reducers = {
  settings,
  main,
};

export default combineReducers(reducers);
