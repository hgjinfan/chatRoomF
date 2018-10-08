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
      <md-button class="md-primary sign-in md-raised">sign in</md-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data() {
    return {
      formData: {
        userName: "",
        passWord: "",
      }
    }
  }
};
</script>

<style scoped>
  .login-form {
    width: 6rem;
    margin: 0 auto;
  }
  .sign-in {
    width: 5rem;
    
  }
</style>
