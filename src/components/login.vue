<template id = "body">
  <div id="login">
    <img class="logo" src="../assets/c19-logo.jpg" alt="c19 logo" />

    <input id="bubbles" type="text" name="username" v-model="input.username" placeholder="Username" />
    <input
      id="bubbles"
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button id="bubbles-two" type="button" v-on:click="login()">Login</button>
    
    <router-link to="/signUp" id="new-login">Create New Login</router-link>

    <h6 class="covid">A COVID-19 PATIENT DATABASE</h6>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (
          this.input.username === this.$parent.mockAccount.username &&
          this.input.password === this.$parent.mockAccount.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style>
body {
  width: 100%;
  height: 100%;
  background-image: url(../assets/covid-image.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* container */
#login {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  width: 500px;
  margin: 0px auto;
  margin-top: 10%;
  padding: 60px;
}
/* username box */
#bubbles {
  border-radius: 20px;
  outline: none;
  display: block;
  padding: 5px;
  margin: 10px auto;
}

/* password box */
#password {
  padding: 5px;
}

/* login button */
#bubbles-two {
  padding: 5px;
  border-radius: 20px;
  display: block;
  margin: 15px auto;
  width: 100px;
  outline: none;
}
/* login button */
#bubbles-two:hover {
  background-color: #bf9000;
  outline: none;
}
/* new login link */
#new-login {
  margin-left: 30%;
}

/* covid db text */
.covid {
  color: #f9a214;
  margin-top: 20% !important;
  font-size: 16px;
  text-align: center;
}
</style>