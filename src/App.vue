<template>
  <div class="h-screen w-full bg-black relative">
    <!-- Fixed navigation bar -->
    <div class="fixed top-0 left-0 w-full flex justify-between flex-row items-center bg-black py-5 px-20 z-10">
      <div class="animate-slidein" >
        <h1 class="text-2xl text-white font-bold cursor-pointer hover:text-3xl">Sami Chaudhary</h1>
      </div>
      <div class=" justify-center flex gap-14">
        <router-link
          v-for="(route, index) in routes"
          :key="index"
          :to="route.path"
          class="font-bold text-lg relative"
          :class="{
            'text-[#FFBD39]': isActive(route.path),
            'text-white': !isActive(route.path),
            'hover:text-[#FFBD39] hover:text-xl': !isActive(route.path),
          }"
        >
          {{ route.text }}
          <span
            v-if="isActive(route.path)"
            class="absolute -bottom-[2px] left-0 w-full h-[2px] bg-[#FFBD39]"
          ></span>
        </router-link>
      </div>
    </div>

    <!-- Content area -->
    <div class="overflow-y-auto scrollbar-hide pt-20" style="height: 100vh;"> <!-- Adjust top margin to accommodate fixed navigation bar -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const routes = [
      { path: "/", text: "Home" },
      { path: "/About", text: "About" },
      { path: "/Skills", text: "Skills" },
      { path: "/Projects", text: "Projects" },
      { path: "/Contact", text: "Contact" },
    ];

    const route = useRoute();

    const isActive = (path) => {
      return route.path === path;
    };

    return { routes, isActive };
  },
};
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.underline-custom {
  position: relative;
}

.underline-custom::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;

  background-color: rgb(234 179 8);
}
@keyframes slidein {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animate-slidein {
  animation: slidein 0.8s ease-out;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
