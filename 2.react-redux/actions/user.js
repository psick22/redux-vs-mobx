const logIn = (data) => {
  //async action creator
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(
          logInSuccess({
            userId: 1,
            nickname: 'kgirok',
          }),
        );
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data: data,
  };
};
const logInSuccess = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data: data,
  };
};
const logInFailure = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data: data,
  };
};
const logOut = () => {
  return {
    //action
    type: 'LOG_OUT',
  };
};

module.exports = { logIn, logOut };
