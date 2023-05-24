
<template>
  <b-button variant="secondary" @click="loadMore">더보기</b-button>
</template>

<script>
export default {
  methods: {
    loadMore() {
      // 더보기 버튼 클릭 시, 새로운 랜덤 여행지 9개를 조회하는 액션을 호출
      this.$store.dispatch('attrStore/getMoreRandomAttractions');
    },
  },
};
</script>
