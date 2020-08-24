import { LOAD, SIGN_IN, SIGN_UP, ERROR } from './actionTypes';

export default (state, { type, payload }) => {
  switch (type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case SIGN_IN:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case SIGN_UP:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        user: null,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
