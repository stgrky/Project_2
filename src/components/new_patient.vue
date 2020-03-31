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
                <span>Infected?: {{ infected }} </span>
                <br>
                <input type="radio" id="yes" value="true" v-model="infected">
                <label for="yes">Yes</label>
                <br>
                <input type="radio" id="no" value="false" v-model="infected">
                <label for="no">No</label>
                <br>
              </div>
              <br>
              <input class="form-control" id="bubbles-three" type="text" v-model="treatment" placeholder="Treatment" />
              
              <div class="form-questions">
                <br>
                <span>Admitted?: {{ admitted }} </span>
                <br>
                <input type="radio" id="yes2" value="true" v-model="admitted">
                <label for="yes2">Yes</label>
                <br>
                <input type="radio" id="no2" value="false" v-model="admitted">
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
            <pre>Name: {{name}}</pre>
            <pre>Phone Number: {{phone_number}}</pre>
            <pre>City: {{city}}</pre>
            <pre>Symptoms: {{symptoms}}</pre>
            <pre>Infected?: {{infected}}</pre>
            <pre>Admitted?: {{admitted}}</pre>
            <pre>Doctor Name: {{doctor}}</pre>
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
    console.log("Mount Success!");
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
      console.log(newPatient);

      // eslint-disable-next-line no-undef
      axios.post("http://localhost:8081/api/patient", newPatient)
      .then(response => {
        console.log("response: ", response);
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

</style>
