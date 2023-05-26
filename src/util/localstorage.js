import axios from 'axios';
import { getCookie, removeCookie } from './cookie';
import { API_URL } from '../constants/index';

// NOTE: 일단 access_token만 유효성 검증, refresh_token은 검증 안함
const verifyToken = async () => {
  const accessToken = getCookie('access_token');
  if (accessToken) {
    const response = await axios
      .post(
        `${API_URL}token/verify/`,
        { token: accessToken },
        { headers: { Authorization: `Bearer ${accessToken}` } },
      )
      .then((res) => {
        // console.log(res);
        return res;
      })
      .catch((err) => {
        // console.log(err);
        return err;
      });
    if (response.status === 200) {
      return true;
    }
  }
  return false;
};

// 로그인상태라면 유저정보 반환, 비로그인상태면 null 반환
export const getUser = () => {
  const isLogin = verifyToken();
  const userInfo =
    localStorage.getItem('userInfo') && isLogin
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;
  return userInfo;
};

// 로그아웃 시 유저정보, access_token 삭제
export const removeUser = () => {
  removeCookie('access_token');
  localStorage.clear();
};
