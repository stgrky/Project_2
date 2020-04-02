<template>
  <!-- Add New User Form -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md-12">
        <div class="card">
          <router-link to="/">Back to Login Page</router-link>

          <div class="card-header">
            New User Login
            <strong>: {{ newUserID }}</strong>
          </div>

          <div class="card-body" id="myNewLogin">
            <form @submit="SignUp">
              <input
                type="text"
                class="form-control bubbles-three"
                v-model="email"
                placeholder="email"
              />

              <input
                type="password"
                class="form-control bubbles-three"
                v-model="password"
                placeholder="password"
              />

              <button class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// Mounting Data
export default {
  mounted() {},

  data() {
    return {
      email: "",
      password: ""
    };
  },

  // Post New Patient Data Back to DB
  methods: {
    SignUp() {
      let newUser = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/user", newUser)
        .then(response => {
          console.log("userResponse: ", response);
          alert("New User Added!");
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>

<style>
.container {
  margin-top: 20%;
}

#yes,
#no {
  width: 15px;
}

.bubbles-three {
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  outline: none;
}

.btn {
  color: black;
}
</style>
