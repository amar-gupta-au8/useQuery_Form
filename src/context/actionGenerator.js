//these are function to fire dispatch type
import { LOAD, SIGN_IN, SIGN_UP, ERROR } from './actionTypes';

export const loading = () => ({
  type: LOAD,
});
export const signIn = (payload) => ({
  type: SIGN_IN,
  payload,
});
export const signUp = (payload) => ({
  type: SIGN_UP,
  payload,
});
export const error = (payload) => ({
  type: ERROR,
  payload,
});
