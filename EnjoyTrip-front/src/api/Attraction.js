import { apiInstance } from "./index.js";

const api = apiInstance();

// 0516 시도 받아오기추가
function getSidoList(success, fail) {
  api.get(`/attr/sido`).then(success).catch(fail);
  /*
  api.get(`/attr/sido`).
  - 백엔드 API에 GET 요청을 보냅니다.
  - URL 경로는 /attr/sido로 지정되어 있습니다.
  - 백엔드 서버에 시도 목록을 가져오기 위한 요청을 보낼 것입니다.
  then(success).catch(fail)
  - API 요청이 성공하면 success 콜백 함수를 호출하고, 실패하면 fail 콜백 함수를 호출합니다.
  - 이는 API 요청의 성공 또는 실패에 따라 적절한 동작을 수행할 수 있도록 합니다.
  */
}
/*
getSidoList 함수를 정의합니다.
이 함수는 시도 목록을 가져오는 API 요청을 보내고,
요청이 성공하면 success 콜백 함수를 호출하고, 실패하면 fail 콜백 함수를 호출합니다.
즉, 이 함수는 비동기적으로 백엔드로부터 시도 목록을 받아오는 역할을 합니다.
*/

function getGugunList(sidoCode, success, fail) {
  api.get(`/attr/gugun/${sidoCode}`).then(success).catch(fail);
}
/*

*/
// function getAttrList(search, success, fail){
//   api.post(`/attr/search`, JSON.stringify(search)).then(success).catch(fail);
// }

export { getSidoList, getGugunList };
