import Request from './index';

export const login = (data) => {
  return Request.post('api/v1/auth/login', data);
}