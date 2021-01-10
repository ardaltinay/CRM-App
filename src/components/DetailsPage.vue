<template>
  <div class="container">
    <h2>Customer Details</h2>
    <div class="card mb-3">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="@/assets/img/avatar.png" class="card-img" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Name: {{customer.first_name.toUpperCase()}} {{customer.last_name.toUpperCase()}}</h5>
            <p class="card-text">Email: {{customer.email}}</p>
            <p class="card-text"><small class="text-muted">Mobile phone: {{customer.mobile_phone}}</small></p>
          </div>
        </div>
      </div>
    </div>
    <form @submit.prevent="updateCustomer">
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Name:</label>
        <input type="text" class="form-control col-sm-10" placeholder="First Name" name="name" v-model="customer.first_name">
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Surname:</label>
        <input type="text" class="form-control col-sm-10" placeholder="Last Name" name="surname" v-model="customer.last_name">
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Email:</label>
        <input type="email" class="form-control col-sm-10" placeholder="Email" name="email" v-model="customer.email">
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Mobile phone:</label>
        <input type="number" class="form-control col-sm-10" placeholder="Mobile Phone" name="phone" v-model="customer.mobile_phone">
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Job:</label>
        <input type="text" class="form-control col-sm-10" placeholder="Job Title" name="job" v-model="customer.job_title">
      </div>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Address:</label>
        <textarea class="form-control col-sm-10" placeholder="Address" name="address" v-model="customer.address"></textarea>
      </div>
      <p v-if="error" class="text-danger">{{error}}</p>
      <button class="btn btn-primary" type="submit">Update</button>
      <router-link to="/">
        <button class="btn btn-secondary">Back</button>
      </router-link>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'DetailsPage',
    data() {
      return {
        customer: {}, 
        error: this.$store.state.error     
      }
    },
    methods: {
      getCustomer() {
        let id = this.$store.state.idData;
        axios.get(`http://localhost:3000/api/customers/${id}`)
          .then(response => {
          if(response.statusText == 'OK') {
            console.log(response.data[0])
            this.customer = response.data[0];
          } else {
            alert(`Opps..something went wrong!`);
          }
        });
      },
      updateCustomer() {
        let id = this.$store.state.idData;
        axios.put(`http://localhost:3000/api/customers/${id}`, {
          name: this.customer.first_name,
          surname: this.customer.last_name,
          email: this.customer.email,
          phone: this.customer.mobile_phone,
          job: this.customer.job_title,
          address: this.customer.address 
        }).then(response => {
          if(response.statusText == 'OK') {
            this.$router.push('/');
            this.$store.commit('successMessage', 'Customer succcessfully updated!');
          } else {
            this.$store.commit('errorMessage', 'Error while updating customer!');
          }
        }).catch(err => {console.log(err)})
      }
    },
    created() {
      this.getCustomer();
    }
  }
</script>

<style scoped>
  .container {
    max-width: 540px;
  }
  .container h2 {
    margin: 50px 0;
  }
  .container .card {
    margin: 50px 0;
  }
  .container form {
    margin: 30px 0 50px;
  }
  .container form input {
    margin-bottom: 20px;
  }
  .container form button {
    margin-right: 10px;
  }
</style>