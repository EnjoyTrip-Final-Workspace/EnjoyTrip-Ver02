<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-orange">
      <b-icon icon="compass-fill" class="icon"></b-icon>
      여행지 검색
    </h3>
    <b-row>
      <b-col>
        <attr-search-bar></attr-search-bar>
        <attr-card-group></attr-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <!-- 여기에 원하는 내용을 추가하세요 -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AttrSearchBar from "@/components/search/AttrSearchBar.vue";
import AttrCardGroup from "@/components/search/AttrCardGroup.vue";

export default {
  name: "AppAttraction",
  components: {
    AttrSearchBar,
    AttrCardGroup,
  },
};
</script>

<style scoped>

.icon {
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #007bff;
}

.underline-orange {
  display: inline-block;
  font-size: 1.8rem;
  font-weight: bold;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #007bff;
  margin-bottom: 2rem;
}

.bv-example-row {
  margin-top: 2rem;
  text-align: center;
}

attr-search-bar {
  margin-bottom: 2rem;
}
</style>
