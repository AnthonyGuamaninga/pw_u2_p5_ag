<template>
  <div class="container" v-if="mostrarJuego">
    <!-- <PokemonPages/> -->
    <h1>Casino Pokemon</h1>
    <div class="score">
      <h2>Puntaje: {{ puntaje }}</h2>
      <h2>Intento: {{ intento }}</h2>
    </div>
    <div class="recursos">
      <Imagen :texto="texto1" :urlImg="url1" />
      <Imagen :texto="texto2" :urlImg="url2" />
      <Imagen :texto="texto3" :urlImg="url3" />
    </div>
    <div class="boton">
      <button v-on:click="jugar">JUGAR</button>
    </div>
  </div>

  <div class="winner" v-if="mostrarGanador">
    <h1>Puntaje: {{ puntaje }}</h1>
    <h1>Felicitaciones has ganado un premio de $10.000,00</h1>
    <button v-on:click="reiniciar">Nuevo juego</button>
  </div>
  <div class="loser" v-if="mostrarPerdedor">
    <h1>Has utilizado tus 5 intentos</h1>
    <h1>El juego ha terminado, inténtalo nuevamente</h1>
    <button v-on:click="reiniciar">Nuevo juego</button>
  </div>
</template>

<script>
/*import PokemonPages from './pages/PokemonPage.vue'*/
import Imagen from "./components/Imagen.vue";

export default {
  name: "App",
  components: {
    //PokemonPages,
    Imagen,
  },
  data() {
    return {
      puntaje: 0,
      intento: 0,
      url1: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
      url2: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
      url3: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
      texto1: "XXXXXXXXXX",
      texto2: "XXXXXXXXXX",
      texto3: "XXXXXXXXXX",
      mostrarGanador: false,
      mostrarPerdedor: false,
      mostrarJuego: true,
    };
  },
  methods: {
    async jugar() {
      //instancia 1
      const data1 = await this.consumirAPI();
      this.texto1 = data1.answer;
      this.url1 = data1.image;
      //instancia 2
      const data2 = await this.consumirAPI();
      this.texto2 = data2.answer;
      this.url2 = data2.image;
      //instancia 3
      const data3 = await this.consumirAPI();
      this.texto3 = data3.answer;
      this.url3 = data3.image;

      this.evaluarResultado();
    },
    async consumirAPI() {
      return await fetch(`https://yesno.wtf/api`).then((r) => r.json());
    },
    evaluarResultado() {
      this.intento++;
      if (
        this.texto1 === "yes" &&
        this.texto2 === "yes" &&
        this.texto3 === "yes"
      ) {
        this.puntaje += 5;
      } else if (
        (this.texto1 === "yes" && this.texto2 === "yes") ||
        (this.texto1 === "yes" && this.texto3 === "yes") ||
        (this.texto3 === "yes" && this.texto2 === "yes")
      ) {
        this.puntaje += 2;
      } else if (
        this.texto1 === "yes" ||
        this.texto2 === "yes" ||
        this.texto3 === "yes"
      ) {
        this.puntaje += 1;
      } else {
        this.puntaje += 0;
      }

      if (this.puntaje >= 10) {
        this.mostrarGanador = true;
        this.mostrarJuego = false;
      } else if (this.intento === 5) {
        this.mostrarPerdedor = true;
        this.mostrarJuego = false;
      }
    },
    reiniciar() {
      this.puntaje = 0;
      this.intento = 0;
      this.url1 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
      this.url2 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg";
      this.url3 =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg";
      this.texto1 = "XXXXXXXXXX";
      this.texto2 = "XXXXXXXXXX";
      this.texto3 = "XXXXXXXXXX";
      this.mostrarGanador = false;
      this.mostrarPerdedor = false;
      this.mostrarJuego = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 0px 40px;
}

h1 {
  grid-column: span 3;
}

.score {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 3;
}

h2 {
  padding: 0px 100px;
}

.recursos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.boton {
  grid-column: span 3;
  margin: 20px;
}

button {
  width: 200px;
  padding: 20px;
  border: solid;
  font-weight: bold;
}

button:hover{
  background-color: burlywood;
}

.winner{
  color: blue;
}

.loser{
  color: red;
}
</style>
