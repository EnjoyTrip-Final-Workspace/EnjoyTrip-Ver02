import { apiInstance } from "./index.js";

const api = apiInstance();

// 0516 시도 받아오기추가
function getSidoList(success, fail) {
  api.get(`/attr/sido`).then(success).catch(fail);
}

function getGugunList(sidoCode, success, fail) {
  api.get(`/attr/gugun/${sidoCode}`).then(success).catch(fail);
}

function detail(contentId, success, fail) {
  api.get(`/attr/detail/${contentId}`).then(success).catch(fail);
}


// function getAttrList(search, success, fail){
//   api.post(`/attr/search`, JSON.stringify(search)).then(success).catch(fail);
// }

function searchByKeyword(keyword, success, fail) {
  api.get(`/attr/keyword?keyword=${keyword}`).then(success).catch(fail);
}
/*
searchByKeyword 함수를 정의합니다.
이 함수는 키워드를 이용하여 백엔드로부터 검색 결과를 받아오는 API 요청을 보냅니다.
URL 쿼리 파라미터인 keyword에 검색 키워드를 전달합니다.
요청이 성공하면 success 콜백 함수를 호출하고, 실패하면 fail 콜백 함수를 호출합니다.
*/

function searchByParams(searchParams, success, fail) {
  api.post(`/attr/search`, JSON.stringify(searchParams)).then(success).catch(fail);
}

export { getSidoList, getGugunList, detail, searchByKeyword, searchByParams };

