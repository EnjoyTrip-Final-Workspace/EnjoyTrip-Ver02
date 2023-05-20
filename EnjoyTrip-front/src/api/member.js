import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function tokenRegeneration(user, success, fail) {
  api.defaults.headers["refresh-token"] = sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
  await api.post(`/user/refresh`, user).then(success).catch(fail);
}

async function logout(userid, success, fail) {
  await api.get(`/user/logout/${userid}`).then(success).catch(fail);
}

// 05.13 회원가입 기능 추가
async function signup(user, success, fail) {
  await api.post(`/user/signup`, JSON.stringify(user)).then(success).catch(fail);
}

// 05.14 회원탈퇴 기능 추가
async function deleteMember(userid, success, fail) {
  await api.delete(`/user/delete/${userid}`).then(success).catch(fail);
}

async function updateMember(user, success, fail) {
  await api.put(`/user/update`, JSON.stringify(user)).then(success).catch(fail);
}


export { login, findById, tokenRegeneration, logout, signup, deleteMember, updateMember };
