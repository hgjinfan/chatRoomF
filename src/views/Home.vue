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
        <md-input v-model="password" type="password"></md-input>
      </md-field>

      <md-field :md-toggle-password="false">
        <label>Password field without toggle</label>
        <md-input v-model="password" type="password"></md-input>
      </md-field>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      formData: {
        userName: ""
      }
    };
  }
};
</script>
