import * as types from '../actions/ActionTypes';

const initialState = {
  rtl: false,
  lang: 'en-US',
};

export default (state= initialState, action) => {
  switch (action.type) {
    case types.CHANGE_DIRECTION:
      return {
        ...state,
        rtl: action.data.RTLStatus.RTL,
        lang: action.data.RTLStatus.lang,
      };
    default:
      return state;
  }
};