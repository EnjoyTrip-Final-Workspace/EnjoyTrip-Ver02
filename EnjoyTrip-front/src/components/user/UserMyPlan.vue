<template>
  <div>
    <div class="col-lg-7 mx-auto">
      <b-list-group>
        <b-list-group-item
          v-for="attraction in attractions"
          :key="attraction.contentId"
          href="#"
          class="d-flex align-items-start"
          style="height: auto"
        >
          <b-img
            thumbnail
            :src="attraction.img"
            alt="Image 1"
            class="mr-3"
            style="width: 120px; height: 120px; object-fit: cover"
            @error="replaceImg"
          ></b-img>
          <div class="flex-grow-1">
            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-1">{{ attraction.title }}</h5>
              <b-icon-x
                size="2x"
                @click="deleteListItem(attraction.contentId)"
              ></b-icon-x>
            </div>
            <div class="d-flex justify-content-left">
              <p class="mb-1">{{ attraction.addr }}</p>
            </div>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";
const myplanStore = "myplanStore";

export default {
  data() {
    return {};
  },
  name: "UserMyPlan",

  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(myplanStore, ["myattractions"]),
    attractions() {
      return this.$store.state.myplanStore.myattractions;
    },
  },
  methods: {
    deleteListItem(contentId) {
      // console.log(contentId)
      this.$store.dispatch("myplanStore/deleteMyAttraction", {
      userid: this.userInfo.userid, 
      contentId: contentId
    });
    },
    // 비어있는 이미지 처리
    replaceImg(e) {
      e.target.src = require(`@/assets/close.png`);
    },
  },
  mounted() {
    this.$store.dispatch("myplanStore/getMyAttractions", this.userInfo.userid);
  },
};
</script>