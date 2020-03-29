<template>
  <div id="secure">
    <h1>Patient List - {{ search}} </h1>
    <h2>Search Your Patient Below</h2>

    <div id="bubbles">
      <div id="bubbles">
        <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
          <b-dropdown-item>Search by Doctor Name</b-dropdown-item>
          <b-dropdown-item>Search by Patient Name</b-dropdown-item>
        </b-dropdown>
      </div>

      <input id="bubbles" type="text" v-model="search" placeholder="Patient or Doctor Name" />
      <button id="bubbles-two" type="button" v-on:click="patientSearch()">Search</button>
      
      <!-- <div id="table" v-for="Patients in Patients" :key="Patients.id" class="single-patient">
        <td>{{ Patients.id }}</td>
        <td>{{ Patients.name }}</td>
        <td>{{ Patients.phone_number }}</td>

      </div> -->
    </div>

    <div>
      <b-table striped hover :items="items"></b-table>
      <div id="app">{{ info }}</div>
    </div>
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
      search: "",
      items: null,
      info: null
    };
  },

  mounted () {
      axios.get("http://localhost:8081/api/patients")
      .then(response => {
        this.info = response.data;
      console.log("this: ", this.info);
  });
  },
  
  patientSearch() {
    axios.get("http://localhost:8081/api/patients")
      .then(response => {
        this.info = response.data;
        const searchData = this.info;
        const results = searchData.find(function() {
          return this.search.toLowerCase();
        });
        console.log("results: ",results);
        //     return results;
        //   } 
        // });
        console.log("this: ", this.info);
      });
  },

  created() {
    this.$http.get("http://localhost:8081/api/patients").then(function(data) {
      this.info = data.body.slice(0, 10);
    });
  },
  
  computed: {
    filteredPatients: function() {
      return this.info.filter(Patients => {
        return Patients.name.match(this.app);
      });
    }
  }
};
</script>


<style scoped>
#secure {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>