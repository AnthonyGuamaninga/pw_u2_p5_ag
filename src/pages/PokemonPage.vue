<template>
  <h1 v-if="!pokemonGanador">Espere porfavor, estamos cargando el juego</h1>
  <div v-else>
    <h1>Adivina el pokemon</h1>
    <PokemonImagen
      :pokemonId="pokemonGanador.id"
      :showPokemon="mostrarPokemon"
    />
    <PokemonOpciones
      :pokemons="pokemonsArr"
      @selecciono="revisarClick($event)"
    />
  </div>
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

  berofeCreate() {
    console.log("Antes de crear el componente");
  },
  created() {
    console.log("Se creo el componente");
  },
  beforeMount() {
    console.log("Antes de que se monte el componente en la página");
  },
  mounted() {
    console.log("Se montó el componente PokemonPage");
    this.cargaInicial();
  },
  beforeUpdate() {
    console.log("Antes de que se actulice el componente");
  },
  updated() {
    console.log("Se actualiza el componente");
  },
  beforeDestroy() {
    console.log("Antes de destruir");
  },
  destroyed() {
    console.log("destruido");
  },

  methods: {
    async cargaInicial() {
      const arregloPokemons = await obtenerPokemonsFachada();
      console.log("desde componente");
      console.log(arregloPokemons);
      this.pokemonsArr = arregloPokemons;
      const indiceGanador = Math.floor(Math.random() * 4);
      this.pokemonGanador = this.pokemonsArr[indiceGanador];
    },
    revisarClick(datoRecibido) {
      console.log("Dio click y reporto desde el padre");
      console.log("dato rec: " + datoRecibido.id);
      console.log("dato rec: " + datoRecibido.nomb);
      this.mostrarPokemon = true;
      if (this.pokemonGanador.id === datoRecibido.id) {
        console.log("Ganó");
      }
    },
  },
  data() {
    return {
      pokemonsArr: [],
      pokemonGanador: null,
      mostrarPokemon: false,
    };
  },
};
</script>


<style>
</style>