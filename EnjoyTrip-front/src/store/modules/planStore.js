const attrStore = {
  namespaced: true,
  state: {
    // 선택한 여행지의 contentId 저장할 배열
    selectedAttractions: [],
  },
  getters: {},
  mutations: {
    ADD_SELECTED_ATTRACTION(state, contentId) {
      state.selectedAttractions.push(contentId);
    },
    CLEAR_SELECTED_ATTRACTIONS(state) {
      state.selectedAttractions = [];
    },
  },
  actions: {
    addSelectedAttraction({ commit }, contentId) {
      commit("ADD_SELECTED_ATTRACTION", contentId);
    },
    clearSelectedAttractions({ commit }) {
      commit("CLEAR_SELECTED_ATTRACTIONS");
    },
  },
};

export default attrStore;
