// /*
// <attrStore.js>
// Vuex 스토어 모듈을 정의하고 있습니다.
// 이 모듈은 시도와 구군 목록을 상태로 가지고 있으며,
// 해당 목록을 비동기적으로 가져오는 액션과 목록을 업데이트하는 뮤테이션을 포함합니다.
// */

import {
  getSidoList,
  getGugunList,
  detail,
  searchByKeyword,
  searchByParams,
  getRandomAttractions,
} from "@/api/Attraction.js";

const attrStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    attractions: {
      img: "",
      title: "",
      addr: "",
      overview: "",
    },
    randomAttractions: [], // 랜덤 여행지 데이터를 저장할 배열
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
    SET_DETAIL_ATTR(state, attractions) {
      state.attractions = attractions;
    },
    SET_ATTRACTIONS(state, attractions) {
      state.attractions = attractions;
    },
    SET_RANDOM_ATTRACTIONS(state, attractions) {
      state.randomAttractions = attractions;
    },
    ADD_RANDOM_ATTRACTIONS(state, attractions) {
      state.randomAttractions = state.randomAttractions.concat(attractions);
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
      getGugunList(
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
          const attractions = response.data;
          commit("SET_ATTRACTIONS", attractions);
          console.log(attractions);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    // getRandomAttractions({ commit }) {
    //   getRandomAttractions(
    //     (response) => {
    //       const randomAttractions = response.data;
    //       commit("ADD_RANDOM_ATTRACTIONS", randomAttractions);
    //       console.log(randomAttractions);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // },
    getRandomAttractions({ commit }) {
      getRandomAttractions(
        (response) => {
          const randomAttractions = response.data;
          commit("SET_RANDOM_ATTRACTIONS", randomAttractions);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getMoreRandomAttractions({ commit }) {
      getRandomAttractions(
        (response) => {
          const randomAttractions = response.data;
          commit("ADD_RANDOM_ATTRACTIONS", randomAttractions);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default attrStore;
