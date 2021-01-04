const { createStore, compose, applyMiddleware } = require('redux');
const reducer = require('./reducers');
const { logIn, logOut } = require('./actions/user');
const { addPost } = require('./actions/post');

const initialState = {
  user: {
    isLoggingIn: true,
    data: null,
  },
  posts: [],
  comments: [],
  favorites: [],
  history: [],
  likes: [],
  followers: [],
};

// 미들웨어는 3단 함수
const firstMiddleware = (store) => (next) => (action) => {
  console.log('액션 로깅', action);
  // 기능 추가
  next(action);
  // 기능 추가
};
const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    // 비동기는 함수로 dispatch
    return action(store.dispatch, store.getState);
  }
  return next(action);
};

const enhancer = applyMiddleware(firstMiddleware, thunkMiddleware);

const store = createStore(reducer, initialState, enhancer);

console.log('1st', store.getState());

//----------------------------

store.dispatch(
  logIn({
    id: 1,
    name: 'kgirok',
    admin: true,
  }),
);

console.log('2nd', store.getState());
