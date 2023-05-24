const planStore = {
  namespaced: true,
  state: {
    selectedAttractions: [], // 선택한 여행지의 contentId 저장할 배열
  },
  getters: {},
  mutations: {
    ADD_SELECTED_ATTRACTION(state, contentId) {
      state.selectedAttractions.push(contentId);
    },
    CLEAR_SELECTED_ATTRACTIONS(state) {
      state.selectedAttractions = [];
    },
    REMOVE_SELECTED_ATTRACTION(state, index) {
      state.selectedAttractions.splice(index, 1);
    },
  },
  actions: {
    addSelectedAttraction({ state, commit }, contentId) {
      if (state.selectedAttractions.includes(contentId)) {
        // 이미 선택된 여행지인 경우 알림창 표시
        alert("이미 선택된 여행지입니다.");
      } else {
        commit("ADD_SELECTED_ATTRACTION", contentId);
      }
    },
    removeSelectedAttraction({ commit, state }, contentId) {
      const index = state.selectedAttractions.findIndex(attraction => attraction === contentId);
      if (index !== -1) {
        commit("REMOVE_SELECTED_ATTRACTION", index);
      }
    },
    
    clearSelectedAttractions({ commit }) {
      commit("CLEAR_SELECTED_ATTRACTIONS");
    },
  },
};

export default planStore;
