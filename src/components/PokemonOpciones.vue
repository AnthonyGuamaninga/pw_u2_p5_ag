<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id" @click="$emit('selecciono', {id: pokemon.id, nomb: pokemon.nombre} )">
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid gray;
  width: 250px;
  margin-bottom: 10px;
  cursor: pointer;
}
li:hover {
  background-color: bisque;
}
.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>