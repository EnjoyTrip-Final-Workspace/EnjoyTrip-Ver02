/*
board.js 코드는 Vue.js 애플리케이션에서
게시판과 관련된 API 요청을 처리하기 위한 모듈입니다.
이 코드는 API를 통해 서버와 상호작용하여
게시판의 글 목록 조회, 글 작성, 수정, 삭제 등의 기능을 구현합니다.
따라서 이 코드는 Vue.js 애플리케이션의 컴포넌트 파일에서
해당 API 함수들을 호출하여 게시판과 상호작용할 수 있습니다.
*/

import { apiInstance } from './index.js';
/*
./index.js 파일에서 apiInstance를 가져옵니다.
apiInstance는 API 요청을 처리하기 위한 axios 인스턴스입니다.
*/

const api = apiInstance();
// apiInstance 함수를 호출하여 axios 인스턴스를 생성하고 api 변수에 할당합니다.

function listArticle(param, success, fail) {
  api.get(`/board`, { params: param }).then(success).catch(fail);
}
// api라는 axios 인스턴스를 통해 get 요청을 보내는 것
/*
listArticle 함수는 게시판의 글 목록을 조회하기 위한 API 요청을 보냅니다.
param은 요청에 필요한 매개변수입니다.
요청이 성공할 경우 success 콜백 함수가 호출되고,
실패할 경우 fail 콜백 함수가 호출됩니다.
*/

function writeArticle(article, success, fail) {
  api.post(`/board`, JSON.stringify(article)).then(success).catch(fail);
}
/*
writeArticle 함수는 새로운 글을 작성하기 위한 API 요청을 보냅니다.
article은 작성할 글의 정보를 담고 있는 객체입니다.
요청이 성공할 경우 success 콜백 함수가 호출되고,
실패할 경우 fail 콜백 함수가 호출됩니다.
*/

function getArticle(articleno, success, fail) {
  api.get(`/board/${articleno}`).then(success).catch(fail);
}
/*
getArticle 함수는 특정 글의 상세 정보를 조회하기 위한 API 요청을 보냅니다.
articleno는 조회할 글의 번호입니다.
요청이 성공할 경우 success 콜백 함수가 호출되고,
실패할 경우 fail 콜백 함수가 호출됩니다.
*/

function modifyArticle(article, success, fail) {
  api.put(`/board`, JSON.stringify(article)).then(success).catch(fail);
}
/*
modifyArticle 함수는 글을 수정하기 위한 API 요청을 보냅니다.
article은 수정할 글의 정보를 담고 있는 객체입니다.
요청이 성공할 경우 success 콜백 함수가 호출되고,
실패할 경우 fail 콜백 함수가 호출됩니다.
*/

function deleteArticle(articleno, success, fail) {
  api.delete(`/board/${articleno}`).then(success).catch(fail);
}
/*
 deleteArticle 함수는 글을 삭제하기 위한 API 요청을 보냅니다.
 articleno는 삭제할 글의 번호입니다.
 요청이 성공할 경우 success 콜백 함수가 호출되고,
 실패할 경우 fail 콜백 함수가 호출됩니다.
*/

export { listArticle, writeArticle, getArticle, modifyArticle, deleteArticle };
/*
listArticle, writeArticle, getArticle, modifyArticle, deleteArticle는
board.js 파일에서 정의된 함수들입니다.
이 함수들은 게시판과 관련된 API 요청을 처리하는 역할을 수행합니다.
export 구문을 통해 이러한 함수들을 외부로 공개함으로써
다른 파일에서 import 구문을 사용하여 이 함수들을 가져와 사용할 수 있습니다.

다른 파일에서 이러한 함수들을 import하여 사용하면,
해당 파일에서는
listArticle, writeArticle, getArticle, modifyArticle, deleteArticle
함수를 호출하여 게시판과 상호작용할 수 있습니다.
이를 통해 코드의 재사용성과 모듈화를 구현할 수 있습니다.
*/
