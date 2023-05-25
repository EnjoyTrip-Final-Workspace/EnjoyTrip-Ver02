

<template>
  <div class="container">
    <!-- 내용 -->
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        this.loadMore();
      }
    },
    loadMore() {
      this.$store.dispatch("attrStore/getMoreRandomAttractions");
    },
  },
};
</script>
