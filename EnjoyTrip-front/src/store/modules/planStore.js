const planStore = {
  namespaced: true,
  state: {
    selectedAttractions: [
    ], 

    // 선택한 여행지의 contentId 와 userid를 저장할 배열
    selectedInfo: [
    ],
  },
  getters: {
  },
  mutations: {
    ADD_SELECTED_ATTRACTION(state, attraction) {
      console.log(attraction);
      state.selectedAttractions.push(attraction);
    },

    CLEAR_SELECTED_ATTRACTIONS(state) {
      state.selectedAttractions = [];
    },
    REMOVE_SELECTED_ATTRACTION(state, index) {
      state.selectedAttractions.splice(index, 1);
    },
  },
  actions: {

    addSelectedAttraction({ state, commit }, attraction) {
      if (state.selectedAttractions.includes(attraction)) {
        // 이미 선택된 여행지인 경우 알림창 표시
        alert("이미 선택된 여행지입니다.");
      } else {
        commit("ADD_SELECTED_ATTRACTION", attraction);
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
