<template>
  <b-container class="mt-4" v-if="userInfo">
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-jumbotron class="bg-white text-primary rounded">
          <h1 class="display-4">My Page</h1>
          <hr class="my-4" />

          <b-container class="mt-4">
            <b-row>
              <b-col cols="2" class="text-right">
                <span class="text-dark">아이디</span>
              </b-col>
              <b-col cols="4">
                <span class="text-dark">{{ userInfo.userid }}</span>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col cols="2" class="text-right">
                <span class="text-dark">이름</span>
              </b-col>
              <b-col cols="4">
                <span class="text-dark">{{ userInfo.username }}</span>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col cols="2" class="text-right">
                <span class="text-dark">이메일</span>
              </b-col>
              <b-col cols="4">
                <span class="text-dark">{{ userInfo.email }}</span>
              </b-col>
            </b-row>
            <hr>
            <b-row>
              <b-col cols="2" class="text-right">
                <span class="text-dark">가입일</span>
              </b-col>
              <b-col cols="4">
                <span class="text-dark">{{ userInfo.joindate }}</span>
              </b-col>
            </b-row>
          </b-container>
          <hr class="my-4" />
          <b-button variant="outline-primary" class="mr-2" @click="goToModify">
            정보 수정
          </b-button>
          <b-button variant="outline-primary" @click="deleteAccount">
            회원 탈퇴
          </b-button>
        </b-jumbotron>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserMyPage",
  components: {},
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  methods: {
    deleteAccount() {
      this.$store.dispatch("memberStore/deleteUser", this.userInfo.userid).then(() => {
        this.$store.commit("memberStore/SET_USER_INFO", null);
        sessionStorage.removeItem("access-token");
        sessionStorage.removeItem("refresh-token");
        alert("회원 탈퇴되었습니다.");
        this.$router.push({ name: "login" });
      });
    },
    goToModify() {
      this.$router.push({ name: "modify" });
    },
  },
};
</script>

<style scoped>
h1.display-4 {
  font-size: 2.5rem;
  font-weight: bold;
}

.text-right {
  text-align: right;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.mt-4 {
  margin-top: 1.5rem;
}

.my-4 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.bg-white {
  background-color: white;
}

.text-primary {
  color: #007bff;
}

.text-dark {
  color: black;
}

.b-button {
  color: #007bff;
  border-color: #007bff;
}

.b-button:hover {
  background-color: #007bff;
  color: white;
}

.rounded {
  border-radius: 10px;
}
</style>
