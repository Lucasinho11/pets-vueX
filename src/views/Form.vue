<template>
  <div class="home">
    
    <h2>🙈Ajout d'animaux🐠:</h2>
    <p v-if="msg.error" style="color:red">{{msg.error}}</p>
    <p v-if="msg.success" style="color:green">{{msg.success}}</p>

    <form>
  <div class="form-group">
    <label for="name">Nom:</label>
    <input type="text" name="name" class="form-control" id="exampleFormControlInput1" placeholder="Lucario" v-model="name">
  </div>
  <div class="form-group">
    <label for="species">Espèce:</label>
    <select class="form-control" id="exampleFormControlSelect1" v-model="species">
      <option>Dog</option>
      <option>Cat</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="birthday">Année de naissance:</label>
    <input type="number" name="birthday" class="form-control" id="exampleFormControlInput1" placeholder="2012" v-model="birthYear">
  </div>
  <button type="type" class="btn btn-primary" @click.prevent="addPet">✅Enregistrer✅</button>
</form>


  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Formulaire',
  data(){
      return{
          name: '',
          species: '',
          birthYear: '',
          msg: {
              error: '',
              success: '',
          },
      }
  },
  computed: {
        ...mapGetters({
            pets: "pets",
        }),
        
        },
  methods: {
      ...mapActions({
            pushPets: "pushPets"
        }),
      addPet(){
          if(this.name.length > 0 && this.species.length >0 && this.birthYear.length>0){
            if(this.birthYear>0 && this.birthYear <= 2021){
              this.pushPets({name:this.name,species:this.species,birthYear:this.birthYear})
               //this.pets.push({"name":this.name,"species":this.species,"birthYear":this.birthYear});
                console.log("validate")
                this.msg.error = ""
                this.msg.success = "Animal ajouté"
                this.name=''
                this.species=''
                this.birthYear=''
                console.log(this.pets)
            }
            else{
              this.msg.error = "Rentrez une date valide"
              this.msg.success = ""
            }
              
          }
          else{
              this.msg.error = "Veuillez remplir le formulaire"
              this.msg.success = ""
              console.log('non')
          }
         
      }
  }

}
</script>
