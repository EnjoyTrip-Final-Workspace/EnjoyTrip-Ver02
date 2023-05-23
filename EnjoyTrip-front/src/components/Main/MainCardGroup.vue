<template>
  <div class="container-fluid">
    <div class="row justify-content-center align-items-center">
      <div class="grid-container">
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=26"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=27"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=28"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=29"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=30"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=31"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=32"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
        <div class="grid-cell">
          <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=33"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 d-none d-md-block"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- 
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
import attrStore from '@/store/modules/attrStore';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MainCardGroup',
  computed: {
    ...mapState(attrStore
      // { randomAttractions: state => state.attrStore.randomAttractions}
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



-->
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