<template>
  <!-- Add New Patient Form -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">New Patient<strong> : {{ name }}</strong></div>

          <div class="card-body" id="myapp">
            <form @submit="addPatient">
              <input
                type="text"
                class="form-control bubbles-three"
                v-model="name"
                placeholder="Patient Name"
              />
              <input
                type="text"
                class="form-control bubbles-three"
                v-model="phone_number"
                placeholder="Phone Number"
              />
              <input
                type="text"
                class="form-control bubbles-three"
                v-model="city"
                placeholder="City"
              />
              <input
                type="text"
                class="form-control bubbles-three"
                v-model="symptoms"
                placeholder="Symptoms"
              />
              <div class="infected-box">
                <b-form-group label="Infected?">
                  <b-form-radio class="form-control" v-model="infected" name="some-radios" value="true">Yes</b-form-radio>
                  <b-form-radio class="form-control" v-model="infected" name="some-radios" value="false">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ infected }}</strong>
                </div>
              </div>
              <input class="form-control" type="text" v-model="treatment" placeholder="Treatment" />
              <div class="form-questions">
                <b-form-group label="Admitted to Hospital?">
                  <b-form-radio class="form-control" v-model="admitted" name="admitted-radio" value="true">Yes</b-form-radio>
                  <b-form-radio class="form-control" v-model="admitted" name="admitted-radio" value="false">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ admitted }}</strong>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="bubbles-three"
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

// Mounting Data
export default {
  mounted() {
  },

  data() {
    return {
      name: "",
      phone_number: "",
      city: "",
      symptoms: "",
      infected: "",
      treatment: "",
      admitted: "",
      doctor: ""
    };
  },

// Post New Patient Data Back to DB
  methods: {
    addPatient(event) {
      event.preventDefault();
      let newPatient = {
        name: this.name,
        phone_number: parseInt(this.phone_number),
        city: this.city,
        symptoms: this.symptoms,
        infected: this.infected,
        treatment: this.treatment,
        admitted: this.admitted, 
        doctor: this.doctor
      };

      // eslint-disable-next-line no-undef
      axios.post("/api/patient", newPatient)
      .then(response => {
        console.log("response: ", response);
        alert("New Patient Added!");
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
#yes, #no {
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
