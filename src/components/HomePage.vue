<template>
  <div class="container">
    <h1>CRM-App</h1>
    <form>
      <div class="row form-group">
        <div class="col-4">
          <router-link to="/addcustomer">
            <button class="btn btn-primary">Add Customer</button>
          </router-link>
        </div>
        <div class="col-7">
          <input type="text" class="form-control" placeholder="Search Customer" v-model="search">
        </div>        
      </div>
    </form>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td scope="row">{{customer.first_name}}</td>
          <td>{{customer.last_name}}</td>
          <td>
            <div>
              <span>{{customer.email}}</span>
              <div>
                <router-link to="/details">
                  <button class="btn btn-secondary" @click="getIdData(customer.id)">details</button>
                </router-link>
                <button class="btn btn-danger" @click="deleteCustomer(customer.id)">delete</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    name: 'HomePage',
    data() {
      return {
        customers: [],
        search: ""
      }
    },
    methods: {
      getCustomers() {
        const url = "http://localhost:3000/api/customers";
        axios.get(url)
          .then(response => this.customers = response.data)
          .catch(e => console.log(e));
      },
      deleteCustomer(id) {
        let isConfirm = confirm(`Are you sure you want to delete?`);
        if(isConfirm){
          axios.delete(`http://localhost:3000/api/customers/${id}`)
            .then(response => {
            if(response.statusText == 'OK') {
              window.location.reload();
            } else {
              alert(`Opps..something went wrong!`);
            }
          });
        } else {
          return;
        } 
      },
      getIdData(id) {
        this.$store.state.idData = id;
      }
    },
    created() {
      this.getCustomers();
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container h1 {
    margin: 50px 0;
    font-weight: bold;
  }
  .container table {
    margin: 30px 0;
  }
  .container table td div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container table button:nth-child(1) {
    margin-right: 10px;
  }
  .container .form-inline {
    justify-content: center;
  }
</style>
