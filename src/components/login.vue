<template id = "body">
  <div id="login">
      <img class="logo" src="../assets/c19-logo.jpg" alt="c19 logo">
    
    <input id="bubbles" type="text" name="username" v-model="input.username" placeholder="Username" />
    <input
      id="bubbles"
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button id="bubbles-two" type="button" v-on:click="login()">Login</button>

    <router-link to="/signUp">Create New Login</router-link>

    <h6>A COVID-19 PATIENT DATABASE</h6> 
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
    }, 
    SignUp() {

    }
  }
};
</script>

<style>
body {
  background: url(../assets/covid-bkgrd.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
}

.logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

#login {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 20px;
  width: 500px;
  margin: 0 auto;
  margin-top: 20%;
  padding: 100px;
}

#bubbles {
  border-radius: 20px;
  outline: none;
  display: block;
  padding: 5px;
  margin: 10px auto;
}

#password {
  padding: 5px;
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
</style>