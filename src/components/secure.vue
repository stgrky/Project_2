<template>
  <div id="secure">
    <div>
      <h1>Patient List - {{ search }}</h1>
      <h2>Search Your Patient Below</h2>
      <input id="bubbles" type="text" v-model="search" 
       placeholder="Patient Name" />
      <!-- <button id="bubbles-two" type="button" v-on:click="patientSearch()">Search</button> -->
      <router-link to="/new_patient">Or Add a New Patient</router-link>
    </div>

    <div v-if="!flag">
      <!-- If Search Does Not Return Results, Show All Patients -->
      <div class="table-responsive">
        <table class="table-hover">
          <tbody>
            <tr v-for="item in filteredPatients" :key="item.id">
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
  </div>
</template>

<script>
import axios from "axios";
// The below is a basic framework for searching for patient data

//
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
      flag:false
    };
  },
  computed: {
  filteredPatients: function(){
    let filtered= this.allPatients.filter(value=>{
      return value.name.match(new RegExp(this.search,"i"));//?case insensative, happen anywhere
    });
    return filtered.sort((a,b)=>{
     return a.name-b.name;
      });
  }


  },

  mounted() {
    axios
      .get("http://localhost:8081/api/patients")
      .then(response => {
        this.info = response.data;
        this.allPatients = this.info;
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  },
  
    patientSearch() {
      axios
        .get("http://localhost:8081/api/patients")
        .then(
          response => (
            console.log("response: ", response), (this.info = response.data)
          )
        );
      const searchData = this.info;
      console.log("atx:", searchData);
      const results = searchData.filter(patient => {
        return patient.name.toLowerCase() === this.search.toLowerCase();
      });
      this.patients = results;
      this.flag=true;
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
  list-style-type: none;
}

td,
th {
  padding-left: 15px;
}
</style>