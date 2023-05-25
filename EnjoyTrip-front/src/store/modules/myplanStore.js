// memberStore 모듈에 추가
import { getMyAttractions, deleteMyAttraction } from "@/api/plan.js"; // 백엔드 API 호출하는 함수 import

const myplanStore = {
  namespaced: true,
  state: {
    myattractions: [], // 내 여행지 데이터를 저장할 배열
    userid: '',
    content_id: '',
  },
  mutations: {
    GET_MY_ATTRACTIONS(state, attractions) {
      state.myattractions = attractions;
    },
    DELETE_MY_ATTRACTION(state, userid, content_id) {
      state.userid = userid;
      state.content_id = content_id
    }
  },
  actions: {
    getMyAttractions({ commit }, userid) {
      getMyAttractions(
        userid,
        (response) => {
          console.log(response);
          const myattractions = response.data;
          commit("GET_MY_ATTRACTIONS", myattractions);
        },
        (error) => {
          console.log(error);
        }
      )
    },
    deleteMyAttraction({ commit }, payload) {
      const { userid, contentId } = payload;
    
      deleteMyAttraction(
        userid,
        contentId,
        (response) => {
          console.log(response);
          commit("DELETE_MY_ATTRACTION", userid, contentId);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default myplanStore;