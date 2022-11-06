import { request } from '../common/request';

export const userLoginApi = async (data) => {
  try {
    const response = await request('POST', `/auth/login`, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const userRegisterApi = async (data) => {
  try {
    const response = await request('POST', `/auth/register`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
