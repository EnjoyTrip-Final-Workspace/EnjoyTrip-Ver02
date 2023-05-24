// attrStore.js

import { getSidoList, getGugunList, detail, searchByKeyword, searchByParams, getRandomAttractions } from "@/api/Attraction.js";

const attrStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    attractions: {
      img: '',
      title: '',
      addr: '',
      overview: ''
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
    SET_ATTRACTIONS(state, attractions) {
      state.attractions = attractions;
    },
    SET_RANDOM_ATTRACTIONS(state, randomAttractions) {
      state.randomAttractions = randomAttractions;
    },
    ADD_RANDOM_ATTRACTIONS(state, randomAttractions) {
      state.randomAttractions = state.randomAttractions.concat(randomAttractions);
    },
  },
  actions: {
    getRandomAttractions({ commit, state }) {
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
    getMoreRandomAttractions({ commit, state }) {
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
