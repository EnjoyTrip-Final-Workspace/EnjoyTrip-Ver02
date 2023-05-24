import { apiInstance } from "./index.js";

const api = apiInstance();

function getSidoList(success, fail) {
  api.get(`/attr/sido`).then(success).catch(fail);
}

function getGugunList(sidoCode, success, fail) {
  api.get(`/attr/gugun/${sidoCode}`).then(success).catch(fail);
}

function detail(contentId, success, fail) {
  api.get(`/attr/detail/${contentId}`).then(success).catch(fail);
}

function searchByKeyword(keyword, success, fail) {
  api.get(`/attr/keyword?keyword=${keyword}`).then(success).catch(fail);
}

function searchByParams(searchParams, success, fail) {
  api.post(`/attr/search`, JSON.stringify(searchParams)).then(success).catch(fail);
}

function getRandomAttractions(success, fail) {
  api.get('/attr/main').then(success).catch(fail);
}

export { getSidoList, getGugunList, detail, searchByKeyword, searchByParams, getRandomAttractions };
