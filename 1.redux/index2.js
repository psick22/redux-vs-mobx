import { createStore } from 'redux';

// reducer : prevState와 nextState의 히스토리
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...prevState,
        user: action.data,
      };
    case 'LOG_OUT':
      return {
        ...prevState,
        user: null,
      };
    case 'ADD_POST':
      return {
        ...prevState,
        posts: [...prevState.posts, action.data],
      };
    default:
      return prevState;
  }
};

const initialState = {
  user: null,
  posts: [],
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

// actions

const logIn = (data) => {
  return {
    //action
    type: 'LOG_IN',
    data: data,
  };
};
const logOut = () => {
  return {
    //action
    type: 'LOG_OUT',
  };
};

const addPost = (data) => {
  return {
    type: 'ADD_POST',
    data: data,
  };
};

//----------------------------

console.log('2nd', store.getState());

store.dispatch(
  logIn({
    id: 1,
    name: 'kirok',
    admin: true,
  }),
);
console.log('3rd', store.getState());

store.dispatch(
  addPost({
    userId: 1,
    id: 1,
    content: '안녕하세요',
  }),
);
console.log('4th', store.getState());
store.dispatch(
  addPost({
    userId: 1,
    id: 2,
    content: '안녕하세요22',
  }),
);
console.log('5th', store.getState());

store.dispatch(logOut());

console.log('6th', store.getState());
