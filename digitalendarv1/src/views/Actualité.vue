<template>
  <div class="actus">
    <h2 class="descr">Voici tous les pays du monde avec leur nom, leur drapeau et leur nombre d'habitants</h2>
    <div class="pays" :key="index" v-for="(pays, index) in pays">

      <img :src="pays.flag" alt="pays.flag">

      <h1>{{pays.translations.fr}}</h1>

      <p>{{pays.population}} habitants</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default{
  name:'Helloworld',
  data(){
    return{
      pays: null,
    }
  },
  mounted (){
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then((response) => {
      this.pays = response.data;
      console.log(this.pays)
    });
  }
}

</script>

<style scoped>

*{
margin: 0px;
padding: 0px;
}

.pays{
  border: 1px solid;
  padding: 3px;
  margin: 3px;
  border-radius: 5px;
  height: 150px;
  width: 250px;
}
img{
  float: right;
  width: 65px;
  height: 40px;
}

.descr{
  text-align: center;
}
</style>
