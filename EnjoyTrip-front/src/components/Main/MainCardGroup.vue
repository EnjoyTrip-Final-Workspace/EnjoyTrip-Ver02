<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="grid-container">
        <div class="grid-cell" v-for="attraction in randomAttractions" :key="attraction.id">
          <b-card
            :title="attraction.title"
            :img-src="attraction.img"
            img-alt="이미지"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ attraction.overview }}
            </b-card-text>
            <b-button href="#" variant="primary">방문하기</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
// 여기서 const로 가져오든 해야한다.
const attrStore = 'attrStore';
export default {
  name: 'MainCardGroup',
  computed: {
    ...mapState(attrStore, ['randomAttractions']
    ),
  },
  mounted() {
    this.getRandomAttractions();
  },
  methods: {
    ...mapActions(attrStore, ["getRandomAttractions"]),
    // 비어있는 이미지 처리
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
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 1rem;
}

.grid-cell {
  max-width: 20rem;
}

@media (max-width: 991px) {
  .grid-container {
    grid-template-columns: repeat(2, 2fr);
  }
}

@media (max-width: 576px) {
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style> 

여기서 카드 안의 텍스트가 너무 길어지면 카드 내 스크롤러 만들어줘