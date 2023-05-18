<template>
  <div>
    <!-- img는 링크형식 -->
    <img :src="attr.img" @error="replaceImg" class="attr-img" alt="Attraction Image" />
    <!-- 관광지 명 -->
    <h1 class="attr-title">{{ attr.title }}</h1>
    <!-- 관광지 주소 -->
    <p class="attr-address">{{ attr.addr }}</p>
    <!-- 관광지 정보 -->
    <p class="attr-overview">{{ attr.overview }}</p>

    <!-- 나머지 상세 정보를 표시하는 코드를 추가하세요 -->
  </div>
</template>

<script>
import { mapState } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrDetail",
  computed: {
    ...mapState(attrStore, ["attr"]),
  },

  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },
  },
};
</script>

<style>
.attr-img {
  width: 100%;
  height: auto;
}

.attr-title {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
}

.attr-address {
  font-size: 16px;
  color: #888;
  margin-top: 5px;
}

.attr-overview {
  font-size: 18px;
  margin-top: 20px;
}
</style>
