<template>
  <div class="container">
    <h2>Add a Customer</h2>
    <form>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="First Name">
        <input type="text" class="form-control" placeholder="Last Name">
        <input type="email" class="form-control" placeholder="Email">
        <input type="number" class="form-control" placeholder="Mobile Phone">
        <input type="text" class="form-control" placeholder="Job Title">
        <textarea class="form-control" placeholder="Address"></textarea>
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
      <router-link to="/">
        <button class="btn btn-secondary">Back</button>
      </router-link>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddCustomerPage'
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