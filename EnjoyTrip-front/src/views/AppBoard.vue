<template>
  <b-container class="bv-example-row mt-3 text-center">
    <h3>
      <!-- <b-icon icon="chat-dots" class="icon"></b-icon> -->
       자유 게시판
    </h3>
    <router-view></router-view>
  </b-container>
</template>
<script>
export default {
  name: "AppBoard",
};
</script>
<style scoped>

.icon {
  font-size: 2rem;
  margin-right: 0.5rem;
  color: #007bff;
}
</style>
