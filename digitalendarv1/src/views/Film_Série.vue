<template>
  <div class="actus">
    <h1 class="serie">Film ou Série du Jour</h1>
    <div class="film">
      <img :src="data.Poster" alt="" />

      <h3>{{ data.Title }}</h3>
      <h6>Crée en :{{ data.Year }}</h6>
      <h6>Pays d'origine:{{ data.Country }}</h6>
      <h6>Ecrivains:{{ data.Writer }}</h6>
      <h6>Nombre de saisons:{{ data.totalSeasons }}</h6>
      <h6 class="description">Description:{{ data.Plot }}</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "Helloworld",
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://www.omdbapi.com/?t=Rick And Morty&apikey=6b501b35",
      headers: {},
    };

    axios(config)
      .then((response) => {
        this.data = response.data;
      })
  },
};
</script>

<style scoped>
.film {
  border: 1px solid;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  height: 190px;
  width: 250px;
}
img {
  float: right;
  width: 115px;
  height: 150px;
  margin-top: 0px;
}

.serie {
  text-align: center;
}

.descripton{
    margin-top: 15px;
}
</style>