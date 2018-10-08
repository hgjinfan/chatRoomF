<template>
  <div class="home">
    <h1>chatRoom</h1>
    <div>
      <md-field>
        <label>user name</label>
        <md-input v-model="formData.userName"></md-input>
      </md-field>
      <md-field>
        <label>Password toggle</label>
        <md-input v-model="formData.passWord" type="password"></md-input>
      </md-field>
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
    };
  }
};
</script>
