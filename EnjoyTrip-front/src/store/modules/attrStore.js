
/*
<attrStore.js>
Vuex 스토어 모듈을 정의하고 있습니다.
이 모듈은 시도와 구군 목록을 상태로 가지고 있으며,
해당 목록을 비동기적으로 가져오는 액션과 목록을 업데이트하는 뮤테이션을 포함합니다.
*/

import { getSidoList, getGugunList } from "@/api/Attraction.js";
/*
"@/api/Attraction.js" 파일에서 getSidoList와 getGugunList 함수를 가져옵니다.
이 함수들은 시도와 구군 목록을 가져오기 위해 백엔드 API와 통신하는 역할을 할 것으로 예상됩니다.
*/
const attrStore = {
  namespaced: true,
  // namespaced 옵션을 true로 설정하여 모듈의 네임스페이스 사용을 활성화합니다. 이렇게 하면 다른 모듈과 충돌 없이 모듈을 사용할 수 있습니다.
  state: {

    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    attr: null
  },
  /*
  상태 객체인 state를 정의합니다.
  이 상태 객체는 sidos와 guguns라는 두 개의 배열 속성을 가지고 있습니다.
  각 배열은 초기값으로 선택 옵션을 포함한 객체를 담고 있습니다.
  */
  getters: {},
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "시/도 선택" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "구/군 선택" }];
    },
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.code, text: sido.name });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      console.log(guguns);
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.code, text: gugun.name });
      });
    },
    SET_DETAIL_ATTR(state, attr) {
      state.attr = attr;
    },
  },
  actions: {
    getSido: ({ commit }) => {
      getSidoList(
        ({ data }) => {
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      // const params = { sido: sidoCode };
      getGugunList(
        // params,
        sidoCode,
        ({ data }) => {
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    detailAttr: ({ commit }, contentId) => {
      detail(
        contentId,
        ({ data }) => {
          commit("SET_DETAIL_ATTR", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default attrStore;
