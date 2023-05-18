<template>
  <div id="app">
    <the-header-navbar></the-header-navbar>
    <!-- TheHeaderNavbar.vue 컴포넌트가 랜더링 된다.
        vue파일의 이름,
        즉 컴포넌트를 의미하는 vue 파일의 이름으로 태그를 만들면 자동으로 연결된다. -->
    <router-view></router-view>
    <!-- router 폴더 안에 있는 index.js에 따라서 
        현재 url에 따라서 해당하는 컴포넌트가 동적으로 랜더링 된다. -->
  </div>
</template>
<!-- 컴포넌트를 연결시키기 위해서넌 script에서 import로 가져오는 것과,
template 안에 태그를 사용하는 것. 두가지 모두 필요하다. -->
<script>
import TheHeaderNavbar from '@/components/TheHeaderNavbar';

export default {
  name: 'App',
  components: {
    TheHeaderNavbar,
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
