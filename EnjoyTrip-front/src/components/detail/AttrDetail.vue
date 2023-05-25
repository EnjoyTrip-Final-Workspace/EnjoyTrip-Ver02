<template>
  <div>
    <img
      v-if="attractions.img"
      :src="attractions.img"
      @error="replaceImg"
      class="attractions-img"
      alt="Attraction Image"
    />
    <!-- 관광지 명 -->
    <h1 class="attractions-title">{{ attractions.title }}</h1>
    <!-- 관광지 주소 -->
    <p class="attractions-address">{{ attractions.addr }}</p>
    <!-- 관광지 정보 -->
    <p class="attractions-overview">{{ attractions.overview }}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrDetail",
  computed: {
    ...mapState(attrStore, ["attractions"]),
  },

  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require("@/assets/close.png");
    },
  },
};
</script>
<style>
.attractions-img {
  width: 60%;
  height: auto;
  padding-top: 40px;
}

.attractions-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.attractions-address {
  font-size: 16px;
  color: #888;
  margin-top: 5px;
}

.attractions-overview {
  font-size: 18px;
  margin-top: 20px;
}
</style>
