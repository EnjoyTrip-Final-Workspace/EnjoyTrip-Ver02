<template>
  <div id="appmain">
    <main-slider-container></main-slider-container>
    <main-select-container></main-select-container>
    <main-card-group></main-card-group>
    <main-load-more-card></main-load-more-card>
  </div>
</template>

<script>
import MainCardGroup from "@/components/Main/MainCardGroup";
import MainSelectContainer from "@/components/Main/MainSelectContainer";
import MainSliderContainer from "@/components/Main/MainSliderContainer";
import MainLoadMoreCard from "@/components/Main/MainLoadMoreCard.vue";

export default {
  name: "AppMain",
  components: {
    MainCardGroup,
    MainSelectContainer,
    MainSliderContainer,
    MainLoadMoreCard,
  },
};
</script>

<style></style>
