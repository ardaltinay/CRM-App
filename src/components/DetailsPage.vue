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
            <h5 class="card-title">{{customer.first_name}} {{customer.last_name}}</h5>
            <p class="card-text">{{customer.email}}</p>
            <p class="card-text"><small class="text-muted">{{customer.mobile_phone}}</small></p>
          </div>
        </div>
      </div>
    </div>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name" name="name">
        <input type="text" class="form-control" placeholder="Last Name" name="surname">
        <input type="email" class="form-control" placeholder="Email" name="email">
        <input type="number" class="form-control" placeholder="Mobile Phone" name="phone">
        <input type="text" class="form-control" placeholder="Job Title" name="job">
        <textarea class="form-control" placeholder="Address" name="address"></textarea>
      </div>
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
        customer: {}
      }
    },
    methods: {
      getCustomer() {
        this.customer = {};
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