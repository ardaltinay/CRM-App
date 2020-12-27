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
          <input type="text" class="form-control" placeholder="Search Customer">
        </div>        
      </div>
    </form>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>test</td>
          <td>test</td>
          <td>
            <div>
              <span>test</span>
              <div>
                <button class="btn btn-secondary">details</button>
                <button class="btn btn-danger">delete</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      customers: []
    }
  }
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
