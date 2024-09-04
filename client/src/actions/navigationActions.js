// actions/navigationActions.js

export const NAVIGATE_TO = 'NAVIGATE_TO';

export const navigateTo = (route) => ({
  type: NAVIGATE_TO,
  payload: route
});