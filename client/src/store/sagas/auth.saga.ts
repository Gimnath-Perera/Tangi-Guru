import { put, call, takeEvery } from 'redux-saga/effects';
import _ from 'lodash';

import {
  USER_LOGIN,
  USER_REGISTER,
  START_LOADING,
  END_LOADING,
  SET_ERROR_MESSAGE,
  SET_CURRENT_USER,
  SET_SUCCESS_MESSAGE
} from '../../constants/common-constant';
import { userLoginApi, userRegisterApi } from '../../apis/user.api';

export function* userLogin({
  payload
}: {
  type: typeof USER_LOGIN;
  payload: any;
}): any {
  try {
    yield put({ type: START_LOADING });

    const response = yield call(userLoginApi, payload);

    const message = 'Invalid Credentials.';
    yield put({ type: SET_ERROR_MESSAGE, payload: message });
    if (response?.status == 200) {
      yield put({ type: SET_CURRENT_USER, payload: response.data });
    } else {
      const message = 'Invalid Credentials.';
      yield put({ type: SET_ERROR_MESSAGE, payload: message });
    }

    yield put({ type: END_LOADING });
  } catch (error) {
    yield put({ type: END_LOADING });
    const message = 'Invalid Credentials.';
    yield put({ type: SET_ERROR_MESSAGE, payload: message });
  }
}

export function* userRegister({
  payload
}: {
  type: typeof USER_REGISTER;
  payload: any;
}): any {
  try {
    yield put({ type: START_LOADING });

    const response = yield call(userRegisterApi, payload);
    if (response.status === 201) {
      const message = 'User registration successful';
      yield put({ type: SET_SUCCESS_MESSAGE, payload: message });
      window.location.href = '/login';
    }

    yield put({ type: END_LOADING });
  } catch (error) {
    yield put({ type: END_LOADING });
    const message = 'User registration failed';
    yield put({ type: SET_ERROR_MESSAGE, payload: message });
  }
}

function* userSaga() {
  yield takeEvery(USER_LOGIN, userLogin);
  yield takeEvery(USER_REGISTER, userRegister);
}

export default userSaga;
