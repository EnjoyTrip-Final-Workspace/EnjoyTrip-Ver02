<template>
  <div>
    <div class="scroll-container">
      <!-- 스크롤이 움직여도 버튼이 고정될 부분 -->
    </div>
    <div class="fixed-button-container" v-if="!sidebarOpen">
      <b-button v-b-toggle.sidebar-right>선택한 여행지 보기</b-button>
    </div>
    <b-sidebar id="sidebar-right" title="" right shadow v-model="sidebarOpen">
      <button class="close-button" @click="closeSidebar">닫기</button>
      <div v-if="selectedAttractions.length > 0" class="container">
        <div class="attraction-card" v-for="attraction in selectedAttractions" :key="attraction.id">
          <div class="attraction-content">
            <h2>{{ attraction.title }}</h2>
            <img
              v-if="attraction.img"
              :src="attraction.img"
              :alt="attraction.title"
              class="card-img"
            />
            <p>{{ attraction.addr }}</p>
            <button class="btn" @click="removeMyAttr(attraction)">삭제</button>
          </div>
        </div>
        <button class="btn" @click="saveMyAttr()">여행지 저장</button>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

const planStore = "planStore";
const memberStore = "memberStore";

export default {
  name: "AttrPlanBar",
  computed: {
    ...mapState(planStore, ["selectedAttractions"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  data() {
    return {
      sidebarOpen: false, // 사이드바 열림/닫힘 상태
    };
  },
  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },
    removeMyAttr(contentId) {
      this.$store.dispatch("planStore/removeSelectedAttraction", contentId);
    },

    /*
    사용자가 "여행지 저장" 버튼을 클릭하면 호출되는 메서드입니다. 이 메서드는 선택한 여행지 정보를 서버로 전송하여 데이터베이스에 저장합니다.
    */
    // 선택한 여행지를 가공하여 저장할 형식으로 변환
    saveMyAttr() {
      if (this.userInfo) {
        // console.log(this.selectedAttractions)
        const attractionsToSave = this.selectedAttractions.map((selectedAttractions) => ({
          userid: this.userInfo.userid,
          content_id: selectedAttractions.contentId,
        }));

        console.log(attractionsToSave);
        axios
          .post("http://localhost:9999/vue/plan/myplan", attractionsToSave)
          .then((response) => {
            console.log(response);
            alert("등록에 성공했습니다.");
            // 여기에서 response 변수를 사용할 수 있습니다.
            this.$store.dispatch("planStore/clearSelectedAttractions");
          })
          .catch((error) => {
            console.error("Failed to save attractions:", error);
            alert("등록된 여행지가 포함되어 있습니다.");
          });

        // 여행지 정보 저장 후 배열 초기화
      } else {
        alert("로그인 해주세요.");
        this.$router.push("user/login");
      }
    },
    closeSidebar() {
      this.sidebarOpen = false;
    },
  },
};
</script>

<style scoped>

.close-button {
  text-align: left;
  color: red;
  position: absolute;
  top: 10px;
  left: 10px;
}

.fixed-button-container {
  position: fixed;
  top: 100px;
  right: 170px;
  z-index: 9999;
}

.attraction-card {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
}

.attraction-content {
  display: flex;
  flex-direction: column;
}

.card-img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 8px;
}

.btn {
  background-color: gray;
  color: white;
}

.close {
  float: right;
  font-size: 1.5rem;
  display: none;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
</style>
