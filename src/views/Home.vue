<template>
  <div class="home">
    <h1>chatRoom</h1>
    <div class="login-form">
      <md-field>
        <md-icon>email</md-icon>
        <label>User Name</label>
        <md-input v-model="formData.userName"></md-input>
      </md-field>
      <md-field>
        <md-icon>lock</md-icon>
        <label>Password</label>
        <md-input v-model="formData.passWord" type="password"></md-input>
      </md-field>
      <md-button class="md-primary sign-in md-raised" @click="signIn(formData)">sign in</md-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { userLogin } from "@/service/api.js";
import {mapMutations,mapState} from 'vuex'
export default {
  name: "home",
  data() {
    return {
      formData: {
        userName: "",
        passWord: "",
        avatar: ""
      }
    };
  },
  computed: {
    ...mapState(['isLogin','userInfo'])
  },
  methods: {
    ...mapMutations(['SAVE_USERINFO']),
    async signIn(formData) {
      console.log(formData)
      const res = await userLogin(formData);
      if(res.data.user_id) {
        this.SAVE_USERINFO(res.data)
        console.log(this.userInfo)
        this.$router.push('/about')
      }
    }
  },
  mounted() {
    
  }
};
</script>

<style scoped>
.home {
  /* display: none; */
}
.login-form {
  width: 6rem;
  margin: 0 auto;
}
.sign-in {
  width: 5rem;
}
</style>
