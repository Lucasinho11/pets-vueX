
export const pushPets = ({ commit,state }, {name,species,birthYear}) => {
  let id = state.pets.length
  state.pets.push({"id":id,"name":name,"species":species,"birthYear":birthYear});
  commit("addPet");
};
