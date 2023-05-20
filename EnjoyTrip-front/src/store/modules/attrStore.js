import { getSidoList, getGugunList, detail } from "@/api/Attraction.js";


/*
<attrStore.js>
Vuex 스토어 모듈을 정의하고 있습니다.
이 모듈은 시도와 구군 목록을 상태로 가지고 있으며,
해당 목록을 비동기적으로 가져오는 액션과 목록을 업데이트하는 뮤테이션을 포함합니다.
*/
import { getSidoList, getGugunList, detail, searchByKeyword, searchByParams } from "@/api/Attraction.js";
/*
"@/api/Attraction.js" 파일에서 getSidoList와 getGugunList 함수를 가져옵니다.
이 함수들은 시도와 구군 목록을 가져오기 위해 백엔드 API와 통신하는 역할을 할 것으로 예상됩니다.
*/
const attrStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    // attrs: [],
    attractions: [] // 검색 결과를 담을 배열
  },
  getters: {},
  mutations: {
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
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
    SET_ATTRACTIONS(state, attractions) {
      state.attractions = attractions;
    },
    SET_ATTRS(state, attractions) {
      state.attractions = attractions;
    }

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
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    searchByKeyword({ commit }, keyword) {
      searchByKeyword(
        keyword,
        (response) => {
          const attractions = response.data;
          commit("SET_ATTRACTIONS", attractions);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    searchByParams: ({ commit }, searchParams) => {
      searchByParams(
        searchParams,
        (response) => {
          const attrs = response.data;
          commit("SET_ATTRS", attrs);
          console.log(attrs)
        },
        (error) => {
          console.log(error);
        }
      )
    },
  },
};

export default attrStore;

