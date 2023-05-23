<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3>여행지 상세정보</h3>
    <b-row>
      <b-col>
        <attr-detail></attr-detail>
        <attr-detail-map></attr-detail-map>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import AttrDetail from "@/components/detail/AttrDetail.vue";
import AttrDetailMap from "@/components/detail/AttrDetailMap.vue";

export default {
  name: "AppAttractionDetail",
  components: {
    AttrDetail,
    AttrDetailMap,
  },
};
</script>
<style scoped>
* {
  font-family: font;
}
</style>
