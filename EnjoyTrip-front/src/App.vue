<template>
  <div id="app">
    <div class="content">
      <the-header-navbar></the-header-navbar>
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheHeaderNavbar from "@/components/TheHeaderNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheHeaderNavbar,
    TheFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /* 푸터 추가 */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.the-footer {
  margin-top: auto;
}

/* 여기까지 푸터때메 */

* {
  font-family: font;
}

a.router-link-exact-active {
  color: #89bfef;
}

a.router-link-exact-active:hover {
  text-decoration: none;
}
</style>
