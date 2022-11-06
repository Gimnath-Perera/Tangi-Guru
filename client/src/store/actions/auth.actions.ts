import {
  USER_LOGIN,
  CLEAR_REDUX_STORE,
  USER_REGISTER
} from '../../constants/common-constant';

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload
});

export const userRegister = (payload) => ({
  type: USER_REGISTER,
  payload
});

export const userLogout = () => {
  return {
    type: CLEAR_REDUX_STORE
  };
};
