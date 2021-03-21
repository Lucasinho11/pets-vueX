<template>
  <div class="home">
    
    <h1>🐱Mes animaux🐶:</h1>

    <HomeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeComponent from '../components/HomeComponent.vue'

export default {
  name: 'Home',
  components:{HomeComponent}
}
</script>
