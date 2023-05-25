<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="col-lg-8">
        <b-card-group columns>
          <b-card
            v-for="attraction in attractions"
            :key="attraction.id"
            :title="attraction.title"
            class="mb-4"
            @click="showDetailPage(attraction.contentId)"
          >
            <img
              v-if="attraction.img"
              :src="attraction.img"
              :alt="attraction.title"
              class="card-img"
              
            />
            <b-card-text>
              {{ attraction.addr }}
            </b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img {
  width: 100%;
  height: auto;
}
</style>

<script>
export default {
  name: 'MainCardGroup',
  computed: {
    // randomAttractions을 가져와서 attractions에 할당
    attractions() {
      return this.$store.state.attrStore.randomAttractions;
    },
  },
  methods: {
    showDetailPage(contentId) {
      console.log(contentId);
      this.$store.dispatch("attrStore/detailAttr", contentId);
      this.$router.push("/detail");
    },
  },
  mounted() {
    // 페이지 로드 시 초기 랜덤 여행지 9개를 가져오는 액션 호출
    this.$store.dispatch('attrStore/getRandomAttractions');
  },
};
</script>
