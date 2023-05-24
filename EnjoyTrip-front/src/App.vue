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
import TheFooter from "@/components/TheHeaderNavbar";

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
}

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
