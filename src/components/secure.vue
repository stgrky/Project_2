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


    <div>
      <h1>Add a Patient - {{ addPatient }} </h1>

      <input id="bubbles-three" type="text" v-model="addPatient.name" placeholder="Patient Name" />
      <button id="bubbles-four" type="button" v-on:click="addPatient()">Add</button>   
    </div>

  </div>



</template>

<script>
import axios from "axios";
// import db from "../../models";
// import app from "../../server";
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
          });
          this.patients = results;
          // console.log("results: ", results);
          // response.send(results);
    },
    addPatient() {
      // axios.post("http://localhost:8081/api/patient", {
      //   name: ,
      //   phone_number: ,
      //   city: ,
      //   symptoms: ,
      //   infected: ,
      //   treatment: ,
      //   admitted: ,
      //   doctor: ,
      // })
    }
  },
  created() {
    this.$http.get("http://localhost:8081/api/patients").then(function(data) {
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
  list-style-type: none
}
td, th {
  padding-left: 15px;
}
</style>