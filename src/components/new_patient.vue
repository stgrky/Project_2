<template>
  <!-- Adding New Patient -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md=8">
        <div class="card">
          <div class="card-header">Add a Patient - {{ addPatient.name }}</div>

          <div class="card-body">
            <form @submit="addPatient">
              <input id="bubbles-three" type="text" v-model="name" placeholder="Patient Name" />
              <input
                id="bubbles-three"
                type="text"
                v-model="phone_number"
                placeholder="Phone Number"
              />
              <input type="text" class="form-control" v-model="city" placeholder="City" />
              <input type="text" class="form-control" v-model="symptoms" placeholder="Symptoms" />
              <div class="form-questions">
                <label for="admittedQuestion">Infected?</label>
                <input
                  type="radio"
                  class="form-control"
                  id="yes"
                  value="Yes"
                  v-model="infectedQuestion"
                /> Yes
                <input
                  type="radio"
                  class="form-control"
                  id="no"
                  value="No"
                  v-model="infectedQuestion"
                /> No
              </div>
              <input id="bubbles-three" type="text" v-model="treatment" placeholder="Treatment" />
              <div class="form-questions">
                <label for="admittedQuestion">Admitted?</label>
                <input
                  type="radio"
                  class="form-control"
                  id="yes"
                  value="Yes"
                  v-model="admittedQuestion"
                /> Yes
                <input
                  type="radio"
                  class="form-control"
                  id="no"
                  value="No"
                  v-model="admittedQuestion"
                /> No
              </div>
              <input
                type="text"
                class="form-control"
                id="bubbles-three"
                v-model="doctor"
                placeholder="Doctor Name"
              />
              <button class="btn bubbles-four">Add</button>
            </form>
            <strong>Preview:</strong>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    addPatient(e) {
      e.preventDefault();
      let currentObj = this;
      this.axios
        .post("http://localhost:8081/api/patients", {
          name: this.name,
          phone_number: this.phone_number,
          city: this.city,
          symptoms: this.symptoms,
          infectedQuestion: this.infectedQuestion,
          treatment: this.treatment,
          admittedQuestion: this.admittedQuestion,
          doctor: this.doctor
        })
        .then(function(response) {
          currentObj.output = response.data;
        })
        .catch(function(error) {
          currentObj.output = error;
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
  list-style-type: none;
}

td,
th {
  padding-left: 15px;
}
</style>
