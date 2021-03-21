<template>
  <div class="about">
    <h1>🐶Chiens🐶:</h1>

    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nom</th>
      <th scope="col">Date d'anniversaire</th>
      <th scope="col">Espèce</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="dog in pets" :key="dog.index" >

      <th scope="row" v-if="dog.species == 'Dog'">{{dog.id}}</th>
      <td v-if="dog.species == 'Dog'"><router-link :to="{ path: '/dogs/'+ dog.id}">{{dog.name}} </router-link></td>
      <td v-if="dog.species == 'Dog'">{{dog.birthYear}}</td>
      <td v-if="dog.species == 'Dog'">{{dog.species}}</td>

    </tr>

  </tbody>
</table>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Dogs',
  computed: {
        ...mapGetters({
            pets: "pets",
        }),
        },
  components:{}
}
</script>
