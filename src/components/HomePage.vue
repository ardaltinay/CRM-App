<template>
  <div class="home">
    <h1>CRM-App</h1>
    <form>
      <input type="text">
      <button>Search</button>
    </form>
    <a>
      <button>Add Customer</button>
    </a>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        
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
</style>
