 
<template>
   <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <h1 class="display-modify">회원정보 수정</h1>
        <!-- <b-alert variant="secondary" show><h3></h3></b-alert> -->
      </b-col>
    </b-row>
    <b-row>
      <b-col></b-col>
      <b-col cols="8">
        <b-card class="text-center mt-3" style="max-width: 40rem" align="left">
          <b-form class="text-left">
            <b-alert show variant="danger" v-if="isUpdateError">정보수정 에러 메시지</b-alert>
            <b-form-group label="아이디:" label-for="userid">
              <b-form-input
                id="userid"
                v-model="user.userid"
                disabled
                required
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
            <b-button type="button" variant="outline-primary" class="m-1" @click="update">수정</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col></b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserModify",
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

  created() {
      this.user.userid = this.userInfo.userid;
  },
  computed: {
    ...mapState(memberStore, ["isUpdateError", "isUpdateSuccess", "userInfo"]),
    isUpdated() {
      return !this.isUpdateError;
    },
  },
  methods: {
    ...mapActions(memberStore, ["updateUser"]),
    async update() {
      console.log(this.user);
      await this.updateUser(this.user);
      if (!this.isUpdateError) {
        this.$store.commit(`${memberStore}/SET_IS_UPDATE_SUCCESS`, true);
        alert("회원정보가 수정되었습니다!");
        this.$router.push({ name: "mypage" });
      } 
    },
  },
};
</script>

<style scoped>

.m-1:hover {
  background-color: #007bff;
  color: white;
}

h1.display-modify {
  font-size: 2.5rem;
  font-weight: bold;
  color :#007bff;
}
</style>
