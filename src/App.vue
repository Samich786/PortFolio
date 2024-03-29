<template>
  <div class="flex flex-row items-center bg-black py-5">
  <div class="basis-class1">
    <h1 class="text-xl text-red-500">Portfolio</h1>
  </div>
  <div class="basis-class2 justify-center flex space-x-4">
    <router-link to="/" class="text-white">Home</router-link>
    <router-link to="/About" class="text-white">About</router-link>
    <router-link to="/Contact" class="text-white">Contact</router-link>
  </div>
</div>

  <router-view></router-view>
</template>


<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.basis-class1{
  flex-basis: 20%;
}
.basis-class2{
  flex-basis: 80%;
}
</style>
