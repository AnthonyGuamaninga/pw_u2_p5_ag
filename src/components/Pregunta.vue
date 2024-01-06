<template>
  <img
    src="https://yesno.wtf/assets/no/1-c7d128c95c1740ec76e120146c870f0b.gif"
    alt="No se puede visualizar"
  />
  <div class="dark"></div>
  <div class="container">
    <input v-model="pregunta" type="text" />
    <p>Recuerda que debes terminar con el signo de interrogación (?)</p>

    <h2>{{ pregunta }}</h2>
    <h1>SI, NO....</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "Voy a comer?",
    };
  },
  watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (!value.includes("?")) return;
      // Consumo del API
      this.consumirAPI();
    },
  },
  methods: {
    async consumirAPI() {
      const {answer, image} = await fetch("https://yesno.wtf/api").then((respuesta) =>
        respuesta.json()
      );
      console.log(answer);
      console.log(image);
    },
  },
};
</script>

<style scoped>
.dark,
img {
  height: 100vh;
  width: 100vw;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
}

.dark {
  background-color: rgb(0, 0, 0, 0.3);
}

input {
  width: 250px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
}

.container {
  position: relative;
  color: antiquewhite;
}

input:focus {
  outline: none;
}

p {
  color: white;
  font-size: 20px;
  margin-top: 10px;
}

h1,
h2 {
  color: antiquewhite;
}

h2 {
  margin-top: 80px;
}
</style>