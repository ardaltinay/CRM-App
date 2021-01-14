<template>
  <div class="container">
    <h1>Opss... Something went wrong! The page is not found.</h1>
    <router-link to="/">
      <button class="btn btn-secondary">Back Home</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style scoped>
  h1 {
    margin-top: 100px;
  }
  button {
    margin-top: 50px;
  }
</style>