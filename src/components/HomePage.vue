<template>
  <div class="container">
    <h1>CRM-App</h1>
    <form >
      <div class="row form-group">
        <div class="col-4">
          <a>
            <button class="btn btn-primary">Add Customer</button>
          </a>
        </div>
        <div class="col-7">
          <input type="text" class="form-control" placeholder="Search Customer">
        </div>        
      </div>
    </form>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test</td>
          <td>test</td>
        </tr>
        <tr>
          <td>test</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.container .form-inline {
  justify-content: center;
}
</style>
