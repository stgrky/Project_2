<template>
  <div id="secure">
    <h1>Patient List - {{ search }}</h1>
    <h2>Search Your Patient Below</h2>

    <input id="bubbles" type="text" v-model="search" placeholder="Patient Name" />
    <button id="bubbles-two" type="button" v-on:click="patientSearch()">Search</button>

    <!-- Adding New Patient -->
    <div class="container">
        <div class="row justify-center-content">
            <div class="card">
    <div class="card-header">Add a Patient - {{ addPatient.name }}</div>

    <div class="card-body">
        <form @submit="addPatient">
    <input id="bubbles-three" type="text" v-model="name" placeholder="Patient Name" />
    <input id="bubbles-three" type="text" v-model="phone_number" placeholder="Phone Number" />
    <input id="bubbles-three" type="text" v-model="city" placeholder="City" />
    <input id="bubbles-three" type="text" v-model="symptoms" placeholder="Symptoms" />
    <div class="form-questions">
      <label for="admittedQuestion">Infected?</label>
      <input type="radio" id="yes" value="Yes" v-model="infectedQuestion" /> Yes
      <input type="radio" id="no" value="No" v-model="infectedQuestion" /> No
    </div>
    <input id="bubbles-three" type="text" v-model="treatment" placeholder="Treatment" />
    <div class="form-questions">
      <label for="admittedQuestion">Admitted?</label>
      <input type="radio" id="yes" value="Yes" v-model="admittedQuestion" /> Yes
      <input type="radio" id="no" value="No" v-model="admittedQuestion" /> No
    </div>
        <input id="bubbles-three" type="text" v-model="doctor" placeholder="Doctor Name" />
    <button class="btn bubbles-four" type="button" v-on:click="addPatient()">Add</button>
    </form>
    <pre>
        {{output}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
// The below is a basic framework for searching for patient data

// 
export default {
    mounted () {
      axios.get("http://localhost:8081/api/patients")
      .then(response => {
        this.info = response.data;
        this.allPatients = this.info;
      }).catch(err => {
        console.log("Error: ", err);
      });
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
          doctor: "",
          };
  },

  methods: {
    addPatient(e) {
        e.preventDefault();
        let currentObj = this;
      this.axios.post ("http://localhost:8081/api/patients")
        .then(response => (
          console.log("response: ",response),
          this.info = response.data));
          const searchData = this.info;
          console.log("atx:",searchData);
          const results = searchData.find( (patient) => {
            return patient.name.toLowerCase() === this.search.toLowerCase();
          });
          this.patients = results;
          // console.log("results: ", results);
          // response.send(results);
    }
}
};


    var patientString = new addPatient({
      data: function(){
      return {
        addPatient: {
          name: "",
          phone_number: "",
          city: "",
          symptoms: "",
          infectedQuestion: "",
          treatment: "",
          admitted: "",
          doctor: "",
          }
          .then(
          console.log(addPatient),
          axios.post("http://localhost:8081/api/patient"))
  created() {
    axios.get("http://localhost:8081/api/patients").then(function(data) {
      this.info = data.body.slice(0, 10);
    });
  },
};

</script>


<style>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}

.single-patient {
  width: 250px;
  border: 3px solid black;
}

li {
  list-style-type: none;
}

td,
th {
  padding-left: 15px;
}
</style>