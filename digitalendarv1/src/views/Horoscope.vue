<template>
  <div class="horos">
    <h2>Hoscope</h2>

    <ul id="aztro">
      <li>Date actuelle: {{ data.current_date }}</li>
      <li>Compatible avec: {{ data.compatibility }}</li>
      <li>Nombre chance: {{ data.lucky_number }}</li>
      <li>Heure de chance: {{ data.lucky_time }}</li>
      <li>Couleur: {{ data.color }}</li>
      <li>Humeur: {{ data.mood }}</li>
      <li>Description: {{ data.description }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const URL = "https://aztro.sameerkumar.website/?sign=aquarius&day=today";

export default {
  name: "Helloworld",
  data() {
    return {
      data: {},
    };
  },
  created() {
    axios.post(URL).then((response) => {
      this.data = response.data;
    });
  },
};
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.horos {
  border: 1px solid;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  height: 450px;
  width: 250px;
}

h2 {
  text-align: center;
}

#aztro {
  list-style: none;
  margin-top: 20px;
}

</style>

