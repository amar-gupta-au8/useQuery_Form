import React, { useReducer } from 'react';
import userReducer from './userReducer';
import UserContext from './userContext';
import { loading, signIn, signUp, error } from './actionGenerator';
import { auth } from '../firebase';

const UserState = ({ children }) => {
  const initialState = {
    user: {},
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(userReducer, initialState);

  const signUpUser = async ({ email, password, name }) => {
    try {
      dispatch(loading());
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await auth.currentUser.updateProfile({
        displayName: name,
      });
      dispatch(signIn(response.user));
    } catch (err) {
      dispatch(error(err));
    }
  };
  const signInUser = async ({ email, password }) => {
    try {
      dispatch(loading());
      const response = await auth.signInWithEmailAndPassword(email, password);
      dispatch(signUp(response.user));
    } catch (err) {
      dispatch(error(err));
    }
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        signInUser,
        signUpUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserState;
