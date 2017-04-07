import { actionTypes } from '../actions/settings-actions';
import { AsyncStorage } from 'react-native';

const initialState = {
  list: [
    {
      id: 0,
      name: 'Item1',
      data: [],
    },
    {
      id: 1,
      name: 'Item2',
      data: [],
    },
    {
      id: 2,
      name: 'Item3',
      data: [],
    },
    {
      id: 3,
      name: 'Item4',
      data: [],
    },
  ],
};

export default function MainReducers (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
