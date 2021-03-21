<template>
<ul class="list-group">
    <li class="list-group-item">{{ countPets}} animaux:</li>
    <li class="list-group-item">{{countCats}} 🐱(chats)</li>
    <li class="list-group-item">{{countDogs}} 🐶(chien)</li>
    <li class="list-group-item" style="text-align:center;"><a href="#/form"><button type="button" class="btn btn-primary">🦅Ajouter un animal🐻</button></a></li>
</ul>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'HomeComponent',
   computed: {
        ...mapGetters({
            pets: "pets",
            countPets: "countPets",
            countCats: "countCats",
            countDogs: "countDogs",
        }),
        },
        
    mounted(){
      console.log(this.pets)
      //console.log(this.countPets)


    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
ul{
  text-align: left;
}
</style>
