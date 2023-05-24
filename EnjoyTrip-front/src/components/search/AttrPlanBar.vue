<template>
  <div>
    <div class="scroll-container">
      <!-- 스크롤이 움직여도 버튼이 고정될 부분 -->
    </div>
    <div class="fixed-button-container">
      <b-button v-b-toggle.sidebar-right>선택한 여행지 보기</b-button>
    </div>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div v-if="selectedAttractions.length > 0" class="container">
        <h2 v-for="attraction in selectedAttractions" :key="attraction.id">
          {{ attraction.title }}
          <button class="btn btn-primary" @click="removeMyAttr(attraction)">삭제</button>
        </h2>
        <!-- <b-button size="sm" @click="hide">Close</b-button> -->
        <button class="btn btn-primary" @click="saveMyAttr()">여행지 저장</button>
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
  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },
    removeMyAttr(attraction) {
      this.$store.dispatch("planStore/removeSelectedAttraction", attraction.contentId);
    },
    saveMyAttr() {
  const attractionsToSave = this.selectedAttractions.map((attraction) => ({
    userId: this.userInfo.userid,
    contentId: attraction.contentId,
  }));

  axios.post("http://localhost:9999/vue/plan/myplan", attractionsToSave)
  .then((response) => {
    console.log(response);
    // 여기에서 response 변수를 사용할 수 있습니다.
  })
  .catch((error) => {
    console.error("Failed to save attractions:", error);
  });

}
  },
};
</script>

<style scoped>
.fixed-button-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
</style>
