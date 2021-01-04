const { combineReducers } = require('redux');
const userReducer = require('./user');
const postReducer = require('./post');

// reducer : prevState와 nextState의 히스토리

module.exports = combineReducers({
  user: userReducer,
  posts: postReducer,
});
