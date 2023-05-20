import { getSidoList, getGugunList, detail } from "@/api/Attraction.js";

const attrStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    attr: null
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
  },
};

export default attrStore;
