const { autorun, observable, runInAction, reaction } = require('mobx');

const state = observable({
  compA: 'a',
  compB: 12,
  compC: null,
});

// autorun -> observabale state가 바뀔때마다 콜백함수를 실행
autorun(() => {
  console.log('changed', state.compA);
});

// reaction -> 첫번째 인자로 감시하고자 하는 것, 두번째 인자로 값이 변화되었을 때 실행될 콜백 함수
reaction(
  () => {
    return state.compB;
  },
  () => {
    console.log('reaction', state.compB);
  },
);

runInAction(() => {
  state.compA = 'c';
  state.compC = 'c';
});

runInAction(() => {
  state.compB = 'd';

  state.compC = 'd';
});
