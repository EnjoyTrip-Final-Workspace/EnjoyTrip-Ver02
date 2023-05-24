<template>
  <div id="appmain">
    <main-slider-container></main-slider-container>
    <main-select-container></main-select-container>
    <main-card-group></main-card-group>
    <main-load-more-card></main-load-more-card>
  </div>
</template>

<script>
import MainCardGroup from "@/components/main/MainCardGroup";
import MainSelectContainer from "@/components/main/MainSelectContainer";
import MainSliderContainer from "@/components/main/MainSliderContainer";
import MainLoadMoreCard from "@/components/main/MainLoadMoreCard";

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
