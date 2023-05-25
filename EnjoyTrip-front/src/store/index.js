import Vue from "vue";
import Vuex from "vuex"; // Vue와 Vuex를 가져옵니다
import createPersistedState from "vuex-persistedstate";
// Vuex 상태를 브라우저의 세션 스토리지(sessionStorage)에 영속적으로 저장하기 위한 플러그인
// module import
import boardStore from "@/store/modules/boardStore";
import memberStore from "@/store/modules/memberStore";
import attrStore from "@/store/modules/attrStore";
import planStore from "@/store/modules/planStore";
import myplanStore from "@/store/modules/myplanStore"; // myplanStore 모듈 추가


Vue.use(Vuex); // Vue에 Vuex를 사용하도록 설정

export default new Vuex.Store({
  modules: {
    boardStore,
    memberStore,
    attrStore,
    planStore,
    myplanStore
  },
  // 각 모듈은 Vuex 스토어의 상태(state), 게터(getter), 변이(mutation), 액션(action) 등을 정의
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
  // createPersistedState 플러그인을 사용하여 세션 스토리지에 Vuex 상태를 영속적으로 저장합니다.
  // storage 옵션을 통해 세션 스토리지로 설정하고, 브라우저가 종료되면 자동으로 제거되도록 설정합니다.
});
