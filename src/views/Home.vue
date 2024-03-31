<template>
  <div v-if="showFirst" class="flex jutify-center items-center px-28 mt-5 ">
    <div class="text-left animate-slidein" style="flex-basis: 50%">
      <span class="text-[#FFBD39] font-bold text-[14px] block uppercase"
        >Heloo!</span
      >
      <span class="text-[#FFBD39] font-extrabold text-[70px] block">
        <span class="text-white">I'm </span>Sami</span
      >
      <span class="text-[#FFBD39] font-extrabold text-[70px] block -mt-5"
        >Chaudhary</span
      >
      <span class="text-white font-medium opacity-75 text-[30px] block mt-3"
        >A Freelance Frontend Web Developer</span
      >
      <div class="flex gap-5 items-center mt-3">
        <button
          class="bg-[#FFBD39] text-black px-10 py-4 border border-[#FFBD39] rounded-full hover:bg-transparent hover:text-[#FFBD39]"
        >
          Hire Me
        </button>
        <button
          class="bg-trasparent border border-white text-white px-10 py-4 rounded-full hover:text-[#FFBD39] hover:border-[#FFBD39]"
        >
          My Work
        </button>
      </div>
    </div>
    <div class="" style="flex-basis: 50%">
      <img
        src="../assets/home-img1.png"
        alt="home img"
       
      />
    </div>
  </div>
  <div v-else class="flex jutify-center items-center px-28 mt-5 ">
    <div class="text-left animate-slidein" style="flex-basis: 50%">
      <span class="text-[#FFBD39] font-bold text-[14px] block uppercase"
        >Heloo!</span
      >
      <span class="text-[#FFBD39] font-extrabold text-[50px] block">
        <span class="text-white">I'm </span>Frontend</span
      >
      <span class="text-[#FFBD39] font-extrabold text-[50px] block -mt-5"
        >Developer <span class="text-white">Work</span></span
      >
      <span class="text-white  font-extrabold text-[50px] block -mt-5"
        >in Islamabad</span
      >
      <div class="flex gap-5 items-center mt-3">
        <button
          class="bg-[#FFBD39] text-black px-10 py-4 border border-[#FFBD39] rounded-full hover:bg-transparent hover:text-[#FFBD39]"
        >
          Hire Me
        </button>
        <button
          class="bg-trasparent border border-white text-white px-10 py-4 rounded-full hover:text-[#FFBD39] hover:border-[#FFBD39]"
        >
          My Work
        </button>
      </div>
    </div>
    <div class="" style="flex-basis: 50%">
      <img
        src="../assets/home-img.png"
        alt="home img"
        width="2000px"
        height="1000px"
      />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "HomePage",
  setup() {
    const showFirst = ref(true); // Declare as a ref variable

    // Use setInterval to toggle the value
    setInterval(() => {
      showFirst.value = !showFirst.value; // Update the value using .value
    }, 5000);

    return {
      showFirst,
    };
  },
};
</script>
<style scoped>
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
  animation: slidein 1.6s ease-out;
}

</style>