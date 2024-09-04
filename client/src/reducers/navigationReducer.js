// reducers/navigationReducer.js

import { NAVIGATE_TO } from '../actions/navigationActions';

const initialState = {
  currentRoute: 'home'
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE_TO:
      return {
        ...state,
        currentRoute: action.payload
      };
    default:
      return state;
  }
};

export default navigationReducer;