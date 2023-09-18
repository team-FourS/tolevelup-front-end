// authService.js
import axios from 'axios';

const baseUrl = 'http://ec2-44-198-225-181.compute-1.amazonaws.com:8080';

// 로그인 요청 보내기
export const login = (credentials) => {
  return axios.post(`${baseUrl}/login`, credentials);
};

// 회원가입 요청 보내기
export const register = (userData) => {
  return axios.post(`${baseUrl}/register`, userData);
};
