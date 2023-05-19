import { getCookie, removeCookie } from './cookie';

// 로그인상태라면 유저정보 반환, 비로그인상태면 null 반환
export const getUser = () => {
  const userInfo =
    localStorage.getItem('userInfo') && getCookie('access_token')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null;
  return userInfo;
};

// 로그아웃 시 유저정보, access_token 삭제
export const removeUser = () => {
  removeCookie('access_token');
  localStorage.clear();
};
