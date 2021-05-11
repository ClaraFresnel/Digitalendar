<template>
  <div class="home">
    <img alt="CalendarRé logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your CalendarRé" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>

img {
  width: 200px;
  height: 200px;
}

.home{
  margin-top: 120px;
  text-align: center;
}

</style>