import { createStore } from 'redux';

// reducer : prevState와 nextState의 히스토리
const reducer = (prevState, action) => {
  switch (action.type) {
    case 'CHANGE_COMP_A':
      return {
        ...prevState,
        compA: action.data,
      };
    case 'CHANGE_COMP_B':
      return {
        ...prevState,
        compB: action.data,
      };
    case 'CHANGE_COMP_C':
      return {
        ...prevState,
        compC: action.data,
      };
    default:
      return prevState;
  }
};

const initialState = {
  compA: 'a',
  compB: 12,
  compC: null,
};

const store = createStore(reducer, initialState);
store.subscribe(() => {
  console.log('changed');
});

console.log('1st', store.getState());

// action 생성 함수
const changeCompA = (data) => {
  return {
    //action
    type: 'CHANGE_COMP_A',
    data: data,
  };
};

changeCompA('b');

store.dispatch(changeCompA('b'));

console.log('2nd', store.getState());
