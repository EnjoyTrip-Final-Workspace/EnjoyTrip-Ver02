<template>
  <div class="select-container">
    <b-form-input v-model="keyword" placeholder="Enter a keyword"></b-form-input>
    <router-link :to="{ name: 'attr' }" class="m-2 link">
      <b-button class="search-button" @click="handleSearch">검색</b-button>
    </router-link>
   
  </div>
</template>

<style scoped>
.select-container {
  display: flex;
  align-items: center;
}

.search-button {
  height: 40px;
  align-self: stretch;
  margin-left: 5px;
  white-space: nowrap;
  padding: 0 20px;
  background-color: #4e8fff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #2680ff;
}

.search-button:active {
  background-color: #1c65cc;
  outline: none;
}

.b-form-input {
  height: 40px;
  flex-grow: 1;
  margin-right: 5px;
}

.b-form-select {
  height: 40px;
  margin-right: 5px;
}
</style>

<script>
import { mapActions } from "vuex";
/*
이건 일종의 규칙이라고 봐야한다.
vuex는 상태관리를 해주는 방법이고 나는 vuex에서 Actioins 영역에 접근하려 하는 것이다.
Actions에 접근하는 이유는 Actions에 내가 입력하는 키워드를 전달해야하기 때문이다.
정확히는 동작을 설정하는 것이 Actions이기 때문이다.
*/

const attrStore = "attrStore"; //attrStore를 사용한다는 것.

export default {
  name: 'AttrSearchByKeyword',
  data() {
    return {
      keyword: '',
      /*
      이 부분은 위의 v-model로 양방향 통신으로 내가 키워드를 입력하면
      이 부분도 내가 입력한 키워드로 바뀐다.
      */
    };
  },
  
  methods: {
    /*
    Vue 컴포넌트의 methods 객체 안에
    handleSearch() 메서드가 정의되어 있는 것입니다.
    이 메서드는 검색 버튼이 클릭되었을 때 실행됩니다.
    */
    ...mapActions(attrStore, ["searchByKeyword"]),
    /*
    mapActions 헬퍼 함수를 사용하여 attrStore 네임스페이스에서 searchByKeyword 액션을 가져온다.
    attrStore store폴더의 js파일이다. 해당 파일로가면 네임스페이스를 사용하겠다고 정의한 것을 확인할 수 있다.
    ... 연산자를 사용하여 액션을 현재 컴포넌트의 메서드로 매핑한다.
    searchByKeyword 액션은 키워드를 매개변수로 받아 백엔드로 검색 요청을 보내는 역할을 한다.
    */
    handleSearch() {
      /*
      검색 버튼 클릭 시 실행되는 메서드다.
      키워드를 JavaScript 파일로 전달한다.
      메서드 내부에서는 this.searchByKeyword(this.keyword) 코드를 통해
      현재 컴포넌트의 keyword 데이터를 searchByKeyword 액션에 전달합니다.
      이렇게 하면 검색 버튼이 클릭되었을 때 입력한 키워드가 액션으로 전달되어 백엔드와의 통신이 이루어집니다.
      여기서 searchByKeyword는 attrStore.js의 메서드이고 해당 메서드의 인자로 this.keyword로 내가 입력한 키워드가 전달된다.
      */
      this.searchByKeyword(this.keyword);
    }
  }
};
</script>