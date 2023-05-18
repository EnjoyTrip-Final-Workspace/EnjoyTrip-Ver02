<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-orange">
      <!--b-icon icon="house-fill"><b-icon>-->
      여행지 검색
    </h3>
    <b-row>
      <b-col>
        <!-- <b-img alt="Happy House" :src="require('@/assets/happyhouse.png')" /> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <attr-search-bar></attr-search-bar>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="6" align="left">
        <!-- <house-list /> -->
      </b-col>
      <b-col cols="6">
        <!-- <house-detail /> -->
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import AttrSearchBar from "@/components/attraction/AttrSearchBar.vue";

export default {
  name: "AppAttraction",
  components: {
    AttrSearchBar,
  },
};
</script>
<style scoped>
* {
  font-family: font;
}
.underline-orange {
  display: inline-block;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgba(231, 149, 27, 0.3) 30%);
}
</style>
