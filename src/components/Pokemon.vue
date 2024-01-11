<template>
  <div class="container">
    <label for="">Id:</label>
    <input v-on:keypress.enter="consumirAPI" v-model="obtenerId" type="text" />
    <hr />
    <div class="informacion">
      <h1>Información del pokemon</h1>
      <label for="">Name:</label>
      <p for=""> {{ name }} </p>
      <label for="">Weight:</label>
      <p for=""> {{ weight }} </p>
      <label for="">Base Experience:</label>
      <p for=""> {{ base_experience }} </p>
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
      respuesta: null,
    };
  },
  watch: {
    obtenerId(value, oldValue) {
      console.log(value);
      console.log(oldValue);

      // Consumo del API
      this.consumirAPI();
    },
  },
  methods: {
    async consumirAPI() {
      const { name, weight, base_experience } = await fetch(
        this.construirUrlAPI(this.obtenerId)
      ).then((respuesta) => respuesta.json());
      console.log(name);
      console.log(weight);

      this.name = name;
      this.weight = weight;
      this.base_experience = base_experience;
    },
    construirUrlAPI(id) {
      return `https://pokeapi.co/api/v2/pokemon/${id}`;
    },
  },
};
</script>

<style>
.container {
  display: grid;
  align-items: center;
  justify-content: center;
}
.informacion{
    display: grid;
    background: gray;
    width: fit-content;
    justify-content: center;
    align-items: center;
    padding-left: 20px;

}

p{
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