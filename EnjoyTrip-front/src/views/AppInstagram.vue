<template>
  <div>
    <!-- navigation -->
    <div class="col-md-9">
      <!-- 관광지 검색 start -->
      <form class="d-flex my-3" @submit.prevent="searchAttr">
        <input type="hidden" name="action" value="search">
        <b-form-select v-model="sido" :options="sidos"></b-form-select>
        <b-form-select v-model="gugun" :options="guguns"></b-form-select>
        <b-form-select v-model="type" :options="attrTypes"></b-form-select>
        <b-form-input v-model="keyword" type="search" placeholder="검색어"></b-form-input>
        <b-button type="submit" variant="outline-success">검색</b-button>
      </form>
    </div>

    <div class="container-fluid">
      <div class="px-lg-5">
        <div class="row">
          <!-- Gallery item -->
          <div v-for="attraction in attractions" :key="attraction.contentId" class="col-xl-3 col-lg-4 col-md-6 mb-4">
            <div class="bg-white rounded shadow-sm">
              <img :src="attraction.img" @error="handleImageError" alt="" class="img-fluid card-img-top" />
              <div class="p-4">
                <h5><router-link :to="`/attr?action=detail&contentId=${attraction.contentId}`" class="text-dark">{{ attraction.title }}</router-link></h5>
                <p class="small text-muted mb-0">{{ attraction.addr }}</p>
              </div>
            </div>
          </div>
          <!-- End -->
        </div>
      </div>
    </div>

    <!-- footer -->
    <div></div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "AttractionSearch",
  data() {
    return {
      sido: 0,
      gugun: 0,
      type: 0,
      keyword: "",
    };
  },
  computed: {
    ...mapState("attractionStore", ["sidos", "guguns", "attractions"]),
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
    this.$store.dispatch("attractionStore/getSidos");
  },
  methods: {
    ...mapActions("attractionStore", ["searchAttractions"]),
    searchAttr() {
      const searchData = {
        sido: this.sido,
        gugun: this.gugun,
        type: this.type,
        keyword: this.keyword,
      };
         this.searchAttractions(searchData);
    },
    handleImageError(event) {
      event.target.src = "./assets/NoImage.png";
    },
  },
};
</script>

<style></style>