const planStore = {
  namespaced: true,
  state: {
    selectedAttractions: [], // 선택한 여행지를 저장할 배열
    selectedInfo: [], // 선택한 여행지의 contentId 와 userid를 저장할 배열
  },
  getters: {},
  mutations: {
    // 선택한 여행지 추가
    ADD_SELECTED_ATTRACTION(state, attraction) {
      console.log(attraction);
      state.selectedAttractions.push(attraction);
      //선택한 여행지 정보를 selectedAttractions 배열에 추가
    },
    // 선택한 여행지 모두 제거ß
    CLEAR_SELECTED_ATTRACTIONS(state) {
      state.selectedAttractions = [];
    },
    // 선택한 여행지 제거
    REMOVE_SELECTED_ATTRACTION(state, index) {
      state.selectedAttractions.splice(index, 1);
    },
  },
  actions: {
    // 선택한 여행지 추가 액션
    addSelectedAttraction({ state, commit }, attraction) {
      if (state.selectedAttractions.includes(attraction)) {
        // 이미 선택된 여행지인 경우 알림창 표시
        alert("이미 선택된 여행지입니다.");
      } else {
        commit("ADD_SELECTED_ATTRACTION", attraction); //선택한 여행지 정보를 selectedAttractions 배열에 추가
      }
    },
    // 선택한 여행지 제거 액션
    removeSelectedAttraction({ commit, state }, contentId) {
      const index = state.selectedAttractions.findIndex(
        (attraction) => attraction === contentId
      );
      if (index !== -1) {
        commit("REMOVE_SELECTED_ATTRACTION", index);
      }
    },
    // 선택한 여행지 모두 제거 액션
    clearSelectedAttractions({ commit }) {
      commit("CLEAR_SELECTED_ATTRACTIONS");
    },
  },
};

export default planStore;
