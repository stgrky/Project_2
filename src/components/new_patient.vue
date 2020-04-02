<template>
  <!-- Add New Patient Form -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            New Patient
            <strong>: {{ first_name }} {{last_name}}</strong>
          </div>

          <div class="card-body" id="myapp">
            <form @submit="addPatient">
              <input
                type="text"
                class="form-control"
                v-model="first_name"
                placeholder="First Name"
              />
              <input
                type="text"
                class="form-control"
                v-model="last_name"
                placeholder="Last Name"
              />
              <input
                type="text"
                class="form-control"
                v-model="phone_number"
                placeholder="(XXX) XXX-XXXX"
                template = "template"
              />
              <input
                type="text"
                class="form-control"
                v-model="city"
                placeholder="City"
              />
              <input
                type="text"
                class="form-control"
                v-model="symptoms"
                placeholder="Symptoms"
              />
              <div class="infected-box">
                <b-form-group label="Infected?">
                  <b-form-radio v-model="infected" name="some-radios" value="true">Yes</b-form-radio>
                  <b-form-radio v-model="infected" name="some-radios" value="false">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ infected }}</strong>
                </div>
              </div>
              <input
                class="form-control"
                type="text"
                v-model="treatment"
                placeholder="Treatment"
              />
              <div class="admitted-box">
                <b-form-group label="Admitted to Hospital?">
                  <b-form-radio v-model="admitted" name="admitted-radio" value="true">Yes</b-form-radio>
                  <b-form-radio v-model="admitted" name="admitted-radio" value="false">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ admitted }}</strong>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                v-model="doctor"
                placeholder="Doctor Name"
              />
              <button class="btn btn-success">Submit New Patient</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { Router } from 'express';

// Mounting Data
export default {
  mounted() {},

  props: [
      "template"
  ],

  data() {
    return {
      first_name: "",
      last_name: "",
      phone_number: "",
      city: "",
      symptoms: "",
      infected: "",
      treatment: "",
      admitted: "",
      doctor: ""
    };
  },

  watch: {
    phone_number() {
      this.phone_number = this.phone_number.replace(/[^0-9]/g, "")
      .replace (/^(\d{3})?(\d{3})?(\d{4})/g, "($1) $2-$3");
    }
  },

  // Post New Patient Data Back to DB
  methods: {
    addPatient(event) {
      event.preventDefault();
      let newPatient = {
        first_name: this.first_name,
        last_name: this.last_name,
        phone_number: parseInt(this.phone_number),
        city: this.city,
        symptoms: this.symptoms,
        infected: this.infected,
        treatment: this.treatment,
        admitted: this.admitted,
        doctor: this.doctor
      };

      // eslint-disable-next-line no-undef
      axios
        .post("/api/patient", newPatient)
        .then(response => {
          console.log("response: ", response);
          alert("New Patient Added!");
          this.$router.push("/secure");
          console.log("Success");
        })
        //  { // THIS IS NOT WORKING!!!! GETTING ERROR FOR THIS ROUTE

        .catch(function(error) {
          console.log("error: ", error);
        });
    }
  }
};
</script>

<style>
#yes,
#no {
  width: 15px;
}

/* .bubbles-three {
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  margin: 10px;
  width: 80%;
  outline: none;
} */

.form-control {
    width: 50%;
}

.container {
  width: 100%;
}

.btn {
  color: black;
}
</style>
