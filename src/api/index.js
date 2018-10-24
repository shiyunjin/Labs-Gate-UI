import axios from 'axios';

export async function login(params) {
  return axios({
    url: '/api/v1/login',
    method: 'post',
    data: params,
  });
}

export async function postUserRegister(params) {
  return axios({
    url: '/api/v1/register',
    method: 'post',
    data: params,
  });
}

export async function postUserLogout() {
  return axios({
    url: '/api/v1/logout',
    method: 'post',
  });
}

export async function getUserProfile() {
  return axios('/api/v1/profile');
}

export async function getAuthority() {
  return axios('/api/v1/authority');
}

export default {
  postUserRegister,
  postUserLogout,
  getUserProfile,
  getAuthority,
};
