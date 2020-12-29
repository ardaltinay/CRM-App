<template>
  <div class="container">
    <h2>Add a Customer</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name" v-model="name">
        <input type="text" class="form-control" placeholder="Last Name" v-model="surname">
        <input type="email" class="form-control" placeholder="Email" v-model="email">
        <input type="number" class="form-control" placeholder="Mobile Phone" v-model="phone">
        <input type="text" class="form-control" placeholder="Job Title" v-model="job">
        <textarea class="form-control" placeholder="Address" v-model="address"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
      <router-link to="/">
        <button class="btn btn-secondary">Back</button>
      </router-link>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'AddCustomerPage',
    data() {
      return {
        name: "",
        surname: "",
        email: "",
        phone: "",
        job: "",
        address: ""     
      }
    },
    methods: {
      submitForm() {
        axios.post(`http://localhost:3000/api/customers`, {
          name: this.name,
          surname: this.surname,
          email: this.email,
          phone: this.phone,
          job: this.job,
          address: this.address 
        }).then(response => console.log(response))
        .catch(e => console.log(e));       
      }
    }
  }
</script>

<style scoped>
  .container {
    max-width: 450px;
  }
  .container h2 {
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