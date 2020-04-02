<template id = "body">
  <div id="login">
    <img class="logo" src="../assets/c19-logo.jpg" alt="c19 logo" />

    <h3>You are now logged out.</h3>

    <!-- <button id="bubbles-login" type="button" v-on:click="login()">Login</button> -->
    <router-link class="return" to="/" replace>Return to login</router-link>

    <h6 class="cdc">
      For the latest COVID-19 guidelines and information please visit
      <a href="https://www.cdc.gov/">CDC.gov</a>
    </h6>
  </div>
</template>

<script>
export default {
  name: "Patients",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    logout() {}
  }
};
</script>


<style>
body {
  width: 100%;
  height: 100%;
   background-image: url(../assets/covid-image.jpg);;
  background-repeat: no-repeat;
  background-size: cover;
}

.logo {
  display: block;
  margin: 10px auto;
  width: 70px;
}

/* container */
#login {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  margin-top: 10%;
  padding: 60px;
}

/* logged out text */
h3 {
  font-size: 22px !important;
  text-align: center;
  margin-top: 20% !important;
}

/* return to login link */
.return {
  margin-left: 35%;
}

/* CDC link and text */
.cdc {
  text-align: center;
  color: #f9a214;
  margin-top: 25% !important;
  font-size: 16px;
}
</style>