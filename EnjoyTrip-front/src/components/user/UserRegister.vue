 
<template>
   <b-container class="bv-example-row mt-3">
    <h1>회원 가입</h1>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-alert show variant="danger" v-if="isRegisterError">회원가입 에러 메시지</b-alert>
             <!-- <b-alert show variant="success" v-if="isRegisterSuccess">회원가입 성공</b-alert> -->
            <b-form-group label="아이디:" label-for="userid">
              <b-form-input
                id="userid"
                v-model="user.userid"
                required
                placeholder="아이디 입력...."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="비밀번호:" label-for="userpwd">
              <b-form-input
                type="password"
                id="userpwd"
                v-model="user.userpwd"
                required
                placeholder="비밀번호 입력...."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이름:" label-for="username">
              <b-form-input
                id="username"
                v-model="user.username"
                required
                placeholder="이름 입력...."
              ></b-form-input>
            </b-form-group>
            <b-form-group label="이메일:" label-for="email">
              <b-form-input
                id="email"
                v-model="user.email"
                required
                placeholder="이메일 입력...."
              ></b-form-input>
            </b-form-group>
            <b-button type="button" variant="primary" class="m-1" @click="register">회원가입</b-button>
            <b-button type="button" variant="success" class="m-1" @click="movePage">로그인</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
// export default {
//   name: "UserRegister",
// };

// 5.13 회원가입 추가
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserRegister",
  data() {
    return {
      user: {
        userid: null,
        userpwd: null,
        username: null,
        email: null
      },
    };
  },
  computed: {
    ...mapState(memberStore, ["isRegisterError", "isRegisterSuccess"]),
    isRegistered() {
      return !this.isRegisterError;
    },
  },
  methods: {
    ...mapActions(memberStore, ["registerUser"]),
    async register() {
      await this.registerUser(this.user);
      if (!this.isRegisterError) {
        this.$store.commit(`${memberStore}/SET_IS_REGISTER_SUCCESS`, true);
        alert("회원가입이 성공하였습니다!");
        this.$router.push({ name: "login" });
      }
    },
    movePage() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>

<style scoped>

</style>
