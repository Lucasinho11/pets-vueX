<template>
  <div class="about">
    <h1>🐱Chats🐱:</h1>

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

    <tr v-for="cat in pets" :key="cat.index" >

      <th scope="row" v-if="cat.species == 'Cat'">{{cat.id}}</th>
      <td v-if="cat.species == 'Cat'"><router-link :to="{ path: '/cats/'+ cat.id}">{{cat.name}}</router-link></td>
      <td v-if="cat.species == 'Cat'">{{cat.birthYear}}</td>
      <td v-if="cat.species == 'Cat'">{{cat.species}}</td>

    </tr>

  </tbody>
</table>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Cats',
  computed: {
        ...mapGetters({
            pets: "pets",
        }),
        },
  components:{}
}
</script>
