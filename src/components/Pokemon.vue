<template>
  <div class="container">
    <label class="idClass" for="id">Id:</label>
    <input id="id" v-on:keypress.enter="consumirAPI(obtenerId)" v-model="obtenerId" type="text" />
    <hr />
    <div class="informacion">
      <h1>Información del pokemon</h1>
      <label for="nameId">Name:</label>
      <input id="nameId" type="text" v-model="name">
      
      <label for="weightId">Weight:</label>
      <input id="weightId" type="text" v-model="weight">

      <label for="baseId">Base Experience:</label>
      <input id="baseId" type="text" v-model="base_experience">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obtenerId: null,
      name: null,
      weight: null,
      base_experience: null,
      
    };
  },
  methods: {
    async consumirAPI(id) {
      const { name, weight, base_experience } = await fetch(
        this.construirUrlAPI(id)
      ).then((respuesta) => respuesta.json());

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
    },
    construirUrlAPI(id) {
      return 'https://pokeapi.co/api/v2/pokemon/' + id ;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  align-items: center;
  justify-content: center;
}
.idClass{
    color: aliceblue;
    padding: 20px;
}
.informacion{
    display: grid;
    background: gray;
    width: fit-content;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    border-radius: 10px;
}
h1{
    padding-right: 20px;
}


input{
    margin-bottom: 40px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: fit-content;
    background: rgb(140, 140, 199);
    color: aliceblue;
    
}
label{
    font-weight: bold;
    width: fit-content;
    
}
</style>