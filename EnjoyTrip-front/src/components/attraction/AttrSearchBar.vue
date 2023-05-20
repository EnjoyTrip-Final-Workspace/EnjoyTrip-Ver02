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

    <div v-if="attractions.length > 0">
      <b-card-group deck v-if="attractions.length > 0">
        <b-row>
          <b-col md="4" v-for="attraction in attractions" :key="attraction.content_id">
            <b-card
              :bg-variant="attraction.bgVariant"
              :text-variant="attraction.textVariant"
              :header="attraction.header"
              class="text-center mb-4 custom-card"
              @click="showDetailPage(attraction.contentId)"
            >
              <b-card-img
                :src="attraction.img"
                @error="replaceImg"
                alt="Attraction Image"
                class="custom-card-img"
              ></b-card-img>
              <b-card-text class="custom-card-title">{{ attraction.title }}</b-card-text>
              <b-card-text class="custom-card-address">{{ attraction.addr }}</b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-card-group>
    </div>
  </b-form-row>
</template>

<script>
// import axios from "axios"; // 추가한거
import { mapState, mapActions, mapMutations } from "vuex";

const attrStore = "attrStore";

export default {
  name: "AttrSearchBar",
  data() {
    return {
      // attractions: [], // 추가한거

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
    /*
    getSido 액션은 데이터베이스에서 sido의 목록을 받아온다.
    getGugun 액션은 데이터베이스에서 gugun의 목록을 맏아온다.
    액션이 실행되면 commit으로 mutation의 SET_SIDO_LIST, SET_GUGUN_LIST
    가 실행되어 state에 sido와 gugun을 숫자-이름 형식으로 집어 넣는다.
    */
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
        addr: this.keyword,
      };

      this.searchByParams(searchParams);

      // axios
      //   .post("http://localhost:9999/vue/attr/search", searchParams)
      //   .then((response) => {
      //     const attractions = response.data;
      //     this.attractions = attractions; // 받아온 데이터를 Vue 데이터에 저장
      //     console.log(attractions);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
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

<style>
/* .attraction-img {
  width: 100%;
  height: auto;
} */

.attraction-card {
  width: 300px; /* 원하는 너비로 설정 */
  height: 400px; /* 원하는 높이로 설정 */
}

.card-body {
  width: 300px; /* 원하는 너비로 설정 */
  height: 300px; /* 원하는 높이로 설정 */
}

.card-img {
  width: 300px;
  height: 250px;
}

.custom-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
}

.custom-card:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.custom-card .card-header {
  background-color: #f8f9fa;
  border-bottom: none;
  font-weight: bold;
}

.custom-card .card-body {
  padding: 1rem;
}

.custom-card .card-text {
  margin-bottom: 0.5rem;
  color: #555;
}

.custom-card .card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
}

.custom-card .custom-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.3s ease; /* 효과를 부드럽게 하기 위한 transition 속성 추가 */
}

.custom-card .custom-card-img:hover {
  transform: scale(1.1); /* 이미지를 약간 확대하는 효과 */
  cursor: pointer; /* 마우스 커서를 포인터로 변경 */
}

.custom-card .custom-card-title {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.custom-card .custom-card-address {
  color: #777;
}
</style>
