<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3 class="underline-orange">
      <!--b-icon icon="house-fill"><b-icon>-->
      여행지 상세정보
    </h3>
    <b-row>
      <b-col>
        <attr-detail></attr-detail>
        <attr-detail-map></attr-detail-map>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import AttrDetail from "@/components/attraction/AttrDetail.vue";
import AttrDetailMap from '@/components/attraction/AttrDetailMap.vue';

export default {
  name: "AppAttractionDetail",
  components: {
    AttrDetail,
    AttrDetailMap
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
