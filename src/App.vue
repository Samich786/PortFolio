<template>
  <div class="flex flex-row items-center bg-black py-5">
    <div class="basis-class1">
      <h1 class="text-xl text-red-500">Portfolio</h1>
    </div>
    <div class="basis-class2 justify-center flex gap-14">
    <router-link
      v-for="(route, index) in routes"
      :key="index"
      :to="route.path"
      :class="{ 'text-yellow-500 font-bold': isActive(route.path), 'text-white': !isActive(route.path) }"
    >
      {{ route.text }}
    </router-link>
  </div>
  </div>

  <router-view></router-view>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const routes = [
      { path: '/', text: 'Home' },
      { path: '/About', text: 'About' },
      { path: '/Skills', text: 'Skills' },
      { path: '/Projects', text: 'Projects' },
      { path: '/Contact', text: 'Contact' }
    ];

    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return { routes, isActive };
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
.basis-class1 {
  flex-basis: 20%;
}
.basis-class2 {
  flex-basis: 80%;
}
</style>
