export const pets = (state) => {
    return state.pets;
  };
export const countPets = (state) => {
    return state.pets.length;
  };
export const countCats = (state) => {
    let nbCats = 0;

  state.pets.forEach((item) => {
    if(item.species == "Cat"){
      nbCats++
    }
  })
    return nbCats;
  };
  
  export const countDogs = (state) => {
    let nbDogs = 0;

  state.pets.forEach((item) => {
    if(item.species == "Dog"){
      nbDogs++
    }
  })
    return nbDogs;
  };
