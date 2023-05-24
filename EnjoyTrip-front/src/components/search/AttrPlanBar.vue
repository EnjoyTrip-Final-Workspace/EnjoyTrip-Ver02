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

const planStore = "planStore";

export default {
  name: "AttrPlanBar",
  computed: {
    ...mapState(planStore, ["selectedAttractions"]),
  },
  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },
    removeMyAttr(contentId) {
      console.log(contentId);
      this.$store.dispatch("planStore/removeSelectedAttraction", contentId);
    },
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
