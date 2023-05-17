import axios from 'axios';
/*
axios 모듈을 가져옵니다.
axios는 HTTP 클라이언트 라이브러리로서 서버로부터 데이터를 가져오거나
서버로 데이터를 보낼 수 있게 해줍니다.
*/

// local vue api axios instance
function apiInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return instance;
}
/*
apiInstance 함수는
Vue.js 애플리케이션의 로컬 API를 요청하기 위한 axios 인스턴스를 생성합니다.
process.env.VUE_APP_API_BASE_URL을 기준으로 baseURL을 설정하고,
요청 헤더에는 "Content-Type"을 "application/json;charset=utf-8"로 설정합니다.
생성된 axios 인스턴스를 반환합니다.
*/
/*
 Vue.js 애플리케이션은 apiInstance 함수를 사용하여
 로컬 API 서버와 데이터 통신을 수행하고,
 해당 API 서버는 Vue.js 애플리케이션의 요청을 받아
 필요한 데이터를 반환하는 역할을 합니다.
*/

// house deal API axios instance
function houseInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_HOUSE_DEAL_URL,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return instance;
}
/*
houseInstance 함수는
house deal API를 요청하기 위한 axios 인스턴스를 생성합니다.
process.env.VUE_APP_HOUSE_DEAL_URL을 기준으로 baseURL을 설정하고,
요청 헤더에는 "Content-Type"을 "application/json;charset=utf-8"로 설정합니다.
생성된 axios 인스턴스를 반환합니다.
*/

export { apiInstance, houseInstance };
/*
apiInstance와 houseInstance 함수를 외부에서 사용할 수 있도록 내보냅니다.
다른 파일에서 이 모듈을 import하여 해당 함수들을 사용할 수 있습니다.
*/
