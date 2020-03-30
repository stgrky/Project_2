<template>
  <div id="secure">
    <h1>Patient List - {{ search }} </h1>
    <h2>Search Your Patient Below</h2>

    <input id="bubbles" type="text" v-model="search" placeholder="Patient Name" />
    <button id="bubbles-two" type="button" v-on:click="patientSearch()">Search</button>   

  <div v-if="search">
    <div class="table-responsive">
          <table class="table-hover">
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>City</th>
                      <th>Symptoms</th>
                      <th>Infected</th>
                      <th>Treatment</th>
                      <th>Admitted</th>
                      <th>Doctor</th>
                  </tr>
              </thead>
              <tbody>
                  <td> {{patients.id}} </td>
                  <td> {{patients.name}} </td>
                  <td> {{patients.phone_number}} </td>
                  <td> {{patients.city}} </td>
                  <td> {{patients.symptoms}} </td>
                  <td> {{patients.infected}} </td>
                  <td> {{patients.treatment}} </td>
                  <td> {{patients.admitted}} </td>
                  <td> {{patients.doctor}} </td>
              </tbody>
          </table>
    </div>      
  </div>

  <div v-else-if="!search"> 
    <!-- {{allPatients}} -->
    <div class="table-responsive">
      <table class="table-hover">
          <thead>
              <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Phone Number</th>
                  <th>City</th>
                  <th>Symptoms</th>
                  <th>Infected</th>
                  <th>Treatment</th>
                  <th>Admitted</th>
                  <th>Doctor</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in allPatients" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone_number }}</td>
                  <td>{{ item.city }}</td>
                  <td>{{ item.symptoms }}</td>
                  <td>{{ item.infected }}</td>
                  <td>{{ item.treatment }}</td>
                  <td>{{ item.admitted }}</td>
                  <td>{{ item.doctor }}</td>
              </tr>
          </tbody>
      </table>
    </div>
  </div>


 <!-- THIS NEEDS WORK!!! -->
    <div v-else-if="search != patients.name">
        "Sorry, no patient on record found. Please try your search again."
    </div>

    <h1>Add a Patient </h1>


    <input id="bubble-three" type="text" v-model="name" placeholder="Patient Name" />
    <!-- <input id="bubble-three" type="text" v-model="addPatient.Id" placeholder="ID" /> -->
    <input id="bubble-three" type="text" v-model="phone_number" placeholder="Phone Number" />
    <!-- <input id="bubble-three" type="text" v-model="addPatient.city" placeholder="City" />
    <input id="bubble-three" type="text" v-model="addPatient.symptoms" placeholder="Symptoms" />
    
    <div class="form-questions">
      <label for="admittedQuestion">Infected?</label>
      <input type="radio" id="yes" value="Yes" v-model="addPatient.infectedQuestion"> Yes
      <input type="radio" id="no" value="No" v-model="addPatient.infectedQuestion"> No
    </div>
    
    <input id="bubbles-three" type="text" v-model="addPatient.treatment" placeholder="Treatment" />
    
    <div class="form-questions">
      <label for="admittedQuestion">Admitted?</label>
      <input type="radio" id="yes" value="Yes" v-model="addPatient.admittedQuestion"> Yes
      <input type="radio" id="no" value="No" v-model="addPatient.admittedQuestion"> No
    </div>
    
    <input id="bubbles-three" type="text" v-model="addPatient.doctorLastName" placeholder="Doctor Last Name" /> -->
    <button id="bubbles-four" type="button" v-on:click="addPatients()">Add</button>
  </div>



</template>

<script>
import axios from "axios";
// The below is a basic framework for searching for patient data

export default {
  name: "Patients",
  data() {
    return {
      patients: [],
      results: "",
      search: "",
      info: null,
      allPatients: [],
      searchData: "",
      addPatient: []
    };
  },
  mounted () {
      axios.get("http://localhost:8081/api/patients")
      .then(response => {
        this.info = response.data;
        this.allPatients = this.info;
      }).catch(err => {
        console.log("Error: ", err);
      });
  },
  methods: {
    patientSearch() {
      axios.get("http://localhost:8081/api/patients")
        .then(response => (
          console.log("response: ",response),
          this.info = response.data));
          const searchData = this.info;
          console.log("atx:",searchData);
          const results = searchData.find( (patient) => {
            return patient.name.toLowerCase() === this.search.toLowerCase();
          }).catch(err => {
            console.log("Error: ", err);
          });
          this.patients = results;
          // console.log("results: ", results);
          // response.send(results);
    },
    addPatients() {
      this.addPatient.axios.post("http://localhost:8081/api/patients", {
          name: document.name,
          phone_number: document.phone_number
      })
      .then(function (response) {
          this.addPatient.output = response.data;
      })
      .catch(function (error) {
          this.output = error;
      });
  }
  }
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
  list-style-type: none
}
td, th {
  padding-left: 15px;
}
</style>