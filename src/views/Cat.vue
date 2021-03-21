<template>
  <div class="about">
    <div v-for="cat in pets" :key="cat.id">
        <div v-if="cat.species == 'Cat' && cat.id == $route.params.id">
            <h1>{{cat.name}}</h1>
            <p>Année de naissance: {{cat.birthYear}}</p>
            <p>Espèce: {{cat.species}}</p>
        </div>
    </div>


  </div>
</template>

<script>


import { mapGetters } from "vuex";
export default {
  name: 'Cat',
  computed: {
        ...mapGetters({
            pets: "pets",
        }),
        },
  components:{}
}
</script>
