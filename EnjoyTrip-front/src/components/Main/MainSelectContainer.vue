<template>
  <div class="select-container">
    <b-form-input v-model="keyword" placeholder="Key Word"></b-form-input>
    <b-button class="search-button" @click="searchAttr">검색</b-button>
  </div>
</template>

<style scoped>
.select-container {
  display: flex;
  align-items: center;
}

.search-button {
  height: 40px;
  align-self: stretch;
  margin-left: 5px;
  white-space: nowrap;
  padding: 0 20px;
  background-color: #4e8fff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #2680ff;
}

.search-button:active {
  background-color: #1c65cc;
  outline: none;
}

.b-form-input {
  height: 40px;
  flex-grow: 1;
  margin-right: 5px;
}

.b-form-select {
  height: 40px;
  margin-right: 5px;
}
</style>

<script>
import axios from "axios";
import { mapState, mapActions, mapMutations } from "vuex";

const attrStore = "attrStore";

export default {
  name: "MainSelectContainer",
  data() {
    return {
      // attractions: [],
      sidoCode: null,
      gugunCode: null,
      type: 0,
      keyword: "",
    };
  },
  computed: {
    ...mapState(attrStore, ["sidos", "guguns"]),
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
    this.CLEAR_SIDO_LIST();
    this.getSido();
  },

  methods: {
    calculateTextAreaHeight() {
      const selectedArea = document.querySelector(".select-container");
      if (selectedArea) {
        this.selectedAreaHeight = selectedArea.offsetHeight;
      }
    },
    ...mapActions(attrStore, ["getSido", "getGugun"]),
    ...mapMutations(attrStore, ["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST"]),
    gugunList() {
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    searchAttr() {
      const searchParams = {
        sido: this.sidoCode,
        gugun_code: this.gugunCode,
        type: this.type,
        addr: this.keyword,
      };
      axios
        .post("http://localhost:9999/vue/attr/search", searchParams)
        .then((response) => {
          const attractions = response.data;
          this.attractions = attractions;
          console.log(attractions);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
