<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
          <v-card style="margin-bottom:200px;">
            <div class="pa-3">We can make a logo or header or something that can go here</div>
            <hr />
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Welcome to the Doctor's Portal</h3>
                <div>
                  Welcome to the COVID-19 doctor's portal. Patients who have been tested for COVID-19 are stored in this database so doctors have easy access to their medical information.
                  <br />
                  <br />
                  <br />
Please log in below using 
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <p>User Name: {{ message }}</p>
              <div><input v-model="message" placeholder="edit me">

<p>Password:</p>
<p style="white-space: pre-line">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
</div>

            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  methods: {
    auth0Login() {
      this.$store.dispatch("auth0Login");
      console.log("we are in auth0Login");
    }
  }
};
</script>

<style scoped>

</style>
