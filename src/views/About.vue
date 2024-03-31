<template>
  <div class="flex items-center px-20 mt-5">
    <div class="basis-1/2">
      <img src="../assets/about-img.png" alt="" />
    </div>
    <div class="basis-1/2 text-left">
      <span class="text-white font-extrabold text-[70px] block">
        About Me
      </span>
      <span class="font-xl text-white opacity-75 mt-4 block"
        >A small river named Duden flows by their place and supplies it with the
        necessary regelialia.</span
      >
      <div class="flex items-center mt-5">
        <span class="basis-1/4 text-white font-extrabold"> Name: </span>
        <span class="basis-3/4 text-lg text-white opacity-50">{{
          aboutData.name
        }}</span>
      </div>
      <div class="flex items-center mt-3">
        <span class="basis-1/4 text-white font-extrabold">
          Date of Birth:
        </span>
        <span class="basis-3/4 text-white text-lg opacity-50">{{
          aboutData.birth
        }}</span>
      </div>
      <div class="flex items-center mt-3">
        <span class="basis-1/4 text-white font-extrabold"> Address: </span>
        <span class="basis-3/4 text-lg text-white opacity-50">{{
          aboutData.address
        }}</span>
      </div>
      <div class="flex items-center mt-3">
        <span class="basis-1/4 text-white font-extrabold"> ZipCode: </span>
        <span class="basis-3/4 text-lg text-white opacity-50">{{
          aboutData.zipcode
        }}</span>
      </div>
      <div class="flex items-center mt-3">
        <span class="basis-1/4 text-white font-extrabold"> Email: </span>
        <span class="basis-3/4 text-lg text-white opacity-50">{{
          aboutData.email
        }}</span>
      </div>
      <div class="flex items-center mt-3">
        <span class="basis-1/4 text-white font-extrabold"> Phone: </span>
        <span class="basis-3/4 text-lg text-white opacity-50">{{
          aboutData.phone
        }}</span>
      </div>
    </div>
  </div>
  <div class="text-center mt-10">
    <span class="text-white font-extrabold text-3xl">Education</span>
    <div class="m-auto w-40 h-[2px] bg-[#FFBD39]"></div>
  </div>
  <div class="flex flex-col items-center justify-center mt-5">
    <span class="text-white font-bold text-xl"
      >Bachelor of Science in <br />
      Information Technology</span
    >
    <img src="../assets/uni-logo.png" alt="uni logo" width="200px" />
    <span class="text-white font-bold text-xl -mt-5"
      >University Of Education Lahore</span
    >
  </div>
</template>
<script>
import { useAboutData } from "../store/TaskStore";
import { ref, onMounted } from "vue";
export default {
  name: "AboutPage",
  setup() {
  const getAllData = useAboutData();

  // Define aboutData as a ref with a default value
  const aboutData = ref(getAllData?.aboutData || {});

  // Fetch data when the component is mounted
  onMounted(async () => {
    try {
      await getAllData.getaboutData();
      // Once data is fetched, update aboutData
      aboutData.value = getAllData.aboutData;
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  });

  return { aboutData };
},

};
</script>
