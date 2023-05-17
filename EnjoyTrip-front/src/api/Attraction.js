import { apiInstance } from "./index.js";

const api = apiInstance();

// 0516 시도 받아오기추가
function getSidoList(success, fail) {
  api.get(`/attr/sido`).then(success).catch(fail);
}

function getGugunList(sidoCode, success, fail) {
  api.get(`/attr/gugun/${sidoCode}`).then(success).catch(fail);
}

// function getAttrList(search, success, fail){
//   api.post(`/attr/search`, JSON.stringify(search)).then(success).catch(fail);
// }

export { getSidoList, getGugunList };
