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
 

    <h6>A COVID-19 PATIENT DATABASE</h6>
  </div>
</template>



<style>
body {
  background: url(../assets/covid-bkgrd.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
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

h6 {
  text-align: center;
  color: #f9a214;
  margin-top: 20%;
  font-size: 16px;
}
</style>