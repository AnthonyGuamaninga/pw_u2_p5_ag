<template>
  <h1>Adivina el pokemon</h1>
  <PokemonImagen :pokemonId="2" :showPokemon="false" />
  <PokemonOpciones />
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "../components/PokemonOpciones.vue";

import obtenerPokemonsFachada from "../helpers/pokemonHelper.js";

export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se montó el componente PokemonPage");
    this.cargaInicial();
  },
  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
    },
  },
};
</script>


<style>
</style>