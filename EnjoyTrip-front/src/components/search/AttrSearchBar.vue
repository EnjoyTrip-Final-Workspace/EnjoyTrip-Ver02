<template>
  <b-form-row class="mt-4 mb-4 text-center">
    <b-col sm="3" class="mb-2 custom-col">
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col sm="3" class="mb-2 custom-col">
      <b-form-select v-model="gugunCode" :options="guguns"></b-form-select>
    </b-col>
    <b-col sm="3" class="mb-2 custom-col">
      <b-form-select v-model="type" :options="attrTypes"></b-form-select>
    </b-col>
    <b-col sm="3" class="mb-2 custom-col">
      <b-form-input v-model="keyword"></b-form-input>
    </b-col>
    <b-col sm="12" class="mt-2">
      <b-button @click="handleSearch" variant="primary" class="custom-button">검색</b-button>
    </b-col>
  </b-form-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      type: 0,
      keyword: "",
    };
  },
  computed: {
    ...mapState(attrStore, ["sidos", "guguns", "attractions"]),
    attrTypes() {
      return [
        { value: 0, text: "관광지 유형" },
        { value: 12, text: "관광지" },
        { value: 14, text: "문화시설" },
        { value: 15, text: "축제공연행사" },
        { value: 25, text: "여행코스" },
        { value: 28, text: "레포츠" },
        { value: 32, text: "숙박" },
        { value: 38, text: "쇼핑" },
        { value: 39, text: "음식점" },
      ];
    },
  },

  created() {
    // this.$store.dispatch("attractionStore/getSidos");
    this.CLEAR_SIDO_LIST();
    this.getSido();
  },

  methods: {
    ...mapActions(attrStore, ["getSido", "getGugun", "searchByParams"]),
    ...mapMutations(attrStore, ["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST"]),
    
    gugunList() {
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },

    handleSearch() {
      const searchParams = {
        sido: this.sidoCode,
        gugun: this.gugunCode,
        type: this.type,
        keyword: this.keyword,
      };
      this.searchByParams(searchParams);
    },

    // 빈 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },

    showDetailPage(contentId) {
      console.log(contentId);
      this.$store.dispatch('attrStore/detailAttr', contentId);
      this.$router.push('/detail')
    },
  },
};
</script>