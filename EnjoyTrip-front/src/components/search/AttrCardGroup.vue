<template>
  <div v-if="attractions.length > 0" class="container">
    <div class="row">
      <div
        v-for="attraction in attractions"
        :key="attraction.contentId"
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <div class="card custom-card">
          <div class="card-custom-card">
            <div class="card-body d-flex flex-column align-items-center">
              <div class="d-flex flex-column align-items-center">
                <img
                  :src="attraction.img"
                  @error="replaceImg"
                  alt="Attraction Image"
                  class="card-img-top custom-card-img"
                  @click="showDetailPage(attraction.contentId)"
                />
                <h5 class="card-title custom-card-title">{{ attraction.title }}</h5>
                <p class="card-text custom-card-address">{{ attraction.addr }}</p>
              </div>
              <div class="d-flex align-items-center justify-content-end">
                  <b-icon class="b-icon" icon="plus-square"  @click="addmyPlan(attraction)"></b-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const attrStore = "attrStore";
const planStore = "planStore";

export default {
  name: "AttrCardGroup",
  computed: {
    ...mapState(attrStore, ["attractions"]),
    ...mapState(planStore, ["selectedAttractions"]),
  },
  methods: {
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },

    addmyPlan(attraction) {
      this.$store.dispatch("planStore/addSelectedAttraction", attraction);
    },
    showDetailPage(contentId) {
      console.log(contentId);
      this.$store.dispatch("attrStore/detailAttr", contentId);
      this.$router.push("/detail");
    },
  },
};
</script>

<style>
.b-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 25px;
  cursor: pointer;
}

.b-icon:hover {
  transform: scale(1.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.custom-card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.custom-card:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3);
}

.card-custom-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.custom-card .card-body {
  padding: 1rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.custom-card .card-text {
  margin-bottom: 0.5rem;
  color: #555;
  white-space: pre-line;
}

.custom-card .card-img-top {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  width: 300px;
  height: 320px; /* 수정된 부분 */
}

.custom-card .custom-card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.3s ease;
}

.custom-card .custom-card-img:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.custom-card .custom-card-title {
  font-weight: bold;
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.custom-card .custom-card-address {
  color: #777;
  margin-bottom: 1rem;
}
</style>
