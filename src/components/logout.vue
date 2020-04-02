<template id = "body">
  <div id="login">
    <img class="logo" src="../assets/c19-logo.jpg" alt="c19 logo" />

    <h3>You have now been logged out of the database.</h3>

    <p>To return to login</p>

    <!-- <button id="bubbles-login" type="button" v-on:click="login()">Login</button> -->
    <router-link to="/"  replace>Logout</router-link>


    <h6>For the latest COVID-19 guidelines and information please visit the CDC website</h6>
    <a href="https://www.cdc.gov/">CDC.gov</a>
  </div>
</template>

<script>
export default {
  name: "Patients",
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    logout() {

    }
  }
};
</script>


<style>
body {
  background: url(../assets/covid-bkgrd.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  font-size: 20px;
}

.logo {
  display: block;
  margin: 10px auto;
  width: 70px;
}

#login {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  margin-top: 20%;
  padding: 100px;
}

#bubbles-two {
  padding: 5px;
  border-radius: 20px;
  display: block;
  margin: 15px auto;
  width: 100px;
  outline: none;
}

#bubbles-two:hover {
  background-color: #bf9000;
  outline: none;
}

h6 {
  text-align: center;
  color: #f9a214;
  margin-top: 20px !important;
  font-size: 16px;
}
</style>