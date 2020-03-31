<template>
  <!-- Adding New Patient -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md=8">
        <div class="card">
          <div class="card-header">Add a Patient - {{ name }}</div>

          <div class="card-body" id="myapp">
            <form @submit="addPatient">
              <input id="bubbles-three" type="text" v-model="name" placeholder="Patient Name" />
              <input id="bubbles-three" type="text" v-model="phone_number" placeholder="Phone Number">
              <input type="text" class="form-control" v-model="city" placeholder="City" />
              <input type="text" class="form-control" v-model="symptoms" placeholder="Symptoms" />
              
              <div class="form-questions">
                <br>
                <span>Infected?: {{ infectedQuestion }} </span>
                <br>
                <input type="radio" id="yes" value="Yes" v-model="infectedQuestion">
                <label for="yes">Yes</label>
                <br>
                <input type="radio" id="no" value="No" v-model="infectedQuestion">
                <label for="no">No</label>
                <br>
              </div>
              <br>
              <input class="form-control" id="bubbles-three" type="text" v-model="treatment" placeholder="Treatment" />
              
              <div class="form-questions">
                <br>
                <span>Admitted?: {{ admittedQuestion }} </span>
                <br>
                <input type="radio" id="yes2" value="Yes" v-model="admittedQuestion">
                <label for="yes2">Yes</label>
                <br>
                <input type="radio" id="no2" value="No" v-model="admittedQuestion">
                <label for="no2">No</label>
                <br>
              </div>
              <br>
              <input type="text" class="form-control" id="bubbles-three" v-model="doctor" placeholder="Doctor Name">
              <br>
              <button class="btn" id="bubbles-four">Add</button>
            </form>
            <br>
            <strong>New Patient Preview:</strong>
            <!-- <pre>{{addPatient}}</pre> 
            function () { [native code] } -->

            <pre>Name: {{name}}</pre>
            <pre>Phone Number: {{phone_number}}</pre>
            <pre>City: {{city}}</pre>
            <pre>Symptoms: {{symptoms}}</pre>
            <pre>Infected?: {{infectedQuestion}}</pre>
            <pre>Admitted?: {{admittedQuestion}}</pre>
            <pre>Doctor Name: {{doctor}}</pre>
        
          <!-- {{ output }} nothing shows for this  -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";

// import app from "../../server";
// import Vue from "vue";
// var db = require("../models");

// app = new Vue({
//   el: "#myapp",
//   data: {
//     name: "",
//     phone_number: "",
//     city: "",
//     symptoms: "",
//     infectedQuestion: "",
//     treatment: "",
//     admittedQuestion: "",
//     doctor: ""
//   },
//   methods: {
//     addPatient: function() {
//       axios.post("/api/patients", {
//         name: this.name,
//         phone_number: this.phone_number,
//         city: this.city,
//         symptoms: this.symptoms,
//         infectedQuestion: this.infectedQuestion,
//         treatment: this.treatment,
//         admittedQuestion: this.admittedQuestion, 
//         doctor: this.doctor
//       }).then(function (response) {
//         alert(response.data);
//       }).catch(function (err) {
//         console.log(err);
//       });
//     }
//   }
// });


// Mounting Data
export default {
  mounted() {
    console.log("Mount Success!");
  },

  data() {
    return {
      name: "",
      phone_number: "",
      city: "",
      symptoms: "",
      infectedQuestion: "",
      treatment: "",
      admittedQuestion: "",
      doctor: ""
    };
  },

  methods: {
    addPatient() {
      axios
        .post("/api/patients", { // THIS IS NOT WORKING!!!! GETTING ERROR FOR THIS ROUTE
        //console logged all below and Correctly working
          name: this.name,
          phone_number: this.phone_number,
          city: this.city,
          symptoms: this.symptoms,
          infectedQuestion: this.infectedQuestion,
          treatment: this.treatment,
          admittedQuestion: this.admittedQuestion, 
          doctor: this.doctor
        }, console.log(this.name))
        .then(function(response) {
          console.log("a: ",response);
          console.log("b: ",response.data);
          let output = response.data;
          console.log("c: ", output);
        })
        .catch(function(error) {
          let output = error;
          console.log(output);
        });
    }
  }
};
</script>

<style>
#yes, #no {
  width: 15px;
}

</style>
