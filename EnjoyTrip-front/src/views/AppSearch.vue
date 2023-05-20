<template>
  <div id="appsearch">
    <!-- <attr-search-bar></attr-search-bar> -->
    <attr-search-by-keyword></attr-search-by-keyword>
    <attr-show-by-keyword></attr-show-by-keyword>
    <router-view></router-view>
    <!-- router 폴더 안에 있는 index.js에 따라서 
        현재 url에 따라서 해당하는 컴포넌트가 동적으로 랜더링 된다. -->
  </div>
</template>
<!-- 컴포넌트를 연결시키기 위해서넌 script에서 import로 가져오는 것과,
template 안에 태그를 사용하는 것. 두가지 모두 필요하다. -->
<script>
import AttrSearchByKeyword from "@/components/search/AttrSearchByKeyword.vue";
import AttrShowByKeyword from "@/components/search/AttrShowByKeyword.vue";
// import AttrSearchBar from '@/components/attraction/AttrSearchBar.vue';

export default {
  name: "AppSearch",
  components: {
    AttrSearchByKeyword,
    AttrShowByKeyword,
    // AttrSearchBar,
  },
};
</script>

<style></style>
