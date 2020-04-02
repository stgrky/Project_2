<template>
  <div id="app">
    <router-link v-if="authenticated" to="/logout" v-on:click.native="logout()" replace>Logout</router-link>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: "secureuser",
        password: "securepassword"
      }
    };
  },
  mounted() {
    if (!this.authenticated) {
      console.log("this: ", this.$router);
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
};
</script>

<style>
body {
  background-color: black;
}

#bubbles-out {
  padding: 5px;
  border-radius: 20px;
  display: block;
  margin: 15px auto;
  width: 100px;
  outline: none;
}

h1 {
  padding: 0;
  margin-top: 0;
}
#app {
  width: 1024px;
  margin: auto;
}
</style>