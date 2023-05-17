<template>
  <b-row class="mt-4 mb-4 text-center">
    <b-col class="sm-3">
      <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="gugunCode" :options="guguns"></b-form-select>
      <!-- <b-form-select v-model="gugunCode" :options="guguns" @change="searchApt"></b-form-select> -->
    </b-col>
    <b-col class="sm-3">
      <b-form-select v-model="type" :options="attrTypes"></b-form-select>
    </b-col>
    <b-form-input v-model="keyword"></b-form-input>
    <b-col class="sm-12">
      <b-button @click="searchAttr">검색</b-button>
    </b-col>

    <div v-if="attractions.length > 0">
      <b-card-group deck v-if="attractions.length > 0">
        <b-card
          v-for="attraction in attractions"
          :key="attraction.content_id"
          :bg-variant="attraction.bgVariant"
          :text-variant="attraction.textVariant"
          :header="attraction.header"
          class="text-center"
        >
          <b-card-text>{{ attraction.title }}</b-card-text>
          <b-card-text>{{ attraction.addr }}</b-card-text>
          <b-card-img :src="attraction.img" alt="Attraction Image"></b-card-img>
        </b-card>
      </b-card-group>
    </div>
    <div v-else>
      <p>No attractions found.</p>
    </div>
  </b-row>
</template>

<script>
import axios from "axios"; // 추가한거
import { mapState, mapActions, mapMutations } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrSearchBar",
  data() {
    return {
      attractions: [], // 추가한거

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
          this.attractions = attractions; // 받아온 데이터를 Vue 데이터에 저장
          console.log(attractions);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
