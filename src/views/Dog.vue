<template>
  <div class="about">
    <div v-for="dog in pets" :key="dog.id">
        <div v-if="dog.species == 'Dog' && dog.id == $route.params.id">
            <h1>{{dog.name}}</h1>
            <p>Année de naissance: {{dog.birthYear}}</p>
            <p>Espèce: {{dog.species}}</p>
        </div>
    </div>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Dog',
  computed: {
        ...mapGetters({
            pets: "pets",
        }),
        },
  components:{}
}
</script>
