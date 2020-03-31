<template>
  <!-- Add New Patient Form -->
  <div class="container">
    <div class="row justify-center-content">
      <div class="col-md=8">
        <div class="card">
          <div class="card-header">New Patient<strong> : {{ name }}</strong></div>

          <div class="card-body">
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
                  <b-form-radio class="form-control" v-model="infectedQuestion" name="some-radios" value="Yes">Yes</b-form-radio>
                  <b-form-radio class="form-control" v-model="infectedQuestion" name="some-radios" value="No">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ infectedQuestion }}</strong>
                </div>
              </div>
              <input class="form-control" type="text" v-model="treatment" placeholder="Treatment" />
              <div class="form-questions">
                <b-form-group label="Admitted to Hospital?">
                  <b-form-radio class="form-control" v-model="admittedQuestion" name="admitted-radio" value="Yes">Yes</b-form-radio>
                  <b-form-radio class="form-control" v-model="admittedQuestion" name="admitted-radio" value="No">No</b-form-radio>
                </b-form-group>

                <div class="mt-3">
                  Selected:
                  <strong>{{ admittedQuestion }}</strong>
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
      infectedQuestion: "",
      treatment: "",
      admittedQuestion: "",
      doctor: ""
    };
  },

// Post New Patient Data Back to DB
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
.bubbles-three {
  margin: 10px;
  padding: 5px;
  border-radius: 20px;
  margin: 10px;
  width: 100px;
  outline: none;
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

.btn {
    color: black;
}
</style>
