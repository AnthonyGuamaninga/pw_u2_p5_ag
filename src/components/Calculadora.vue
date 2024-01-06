<template>
  <div class="container">
    <div class="calculadora">
      <div class="display">
        <label id="idResultado" for="">{{ resultadoFinal }} </label>
      </div>
      <button id="idRestaurar" @:click="obtenerCantidad('R')" class="btn_c">
        C
      </button>
      <button id="idRestaurar" @:click="obtenerCantidad('<-')">&#10229;</button>
      <button id="idDivision" @:click="obtenerCantidad('/')">&#247;</button>
      <button id="num7" @:click="obtenerCantidad(7)">7</button>
      <button id="num8" @:click="obtenerCantidad(8)">8</button>
      <button id="num9" @:click="obtenerCantidad(9)">9</button>
      <button id="idMultiplicacion" @:click="obtenerCantidad('*')">X</button>
      <button id="num4" @:click="obtenerCantidad(4)">4</button>
      <button id="num5" @:click="obtenerCantidad(5)">5</button>
      <button id="num6" @:click="obtenerCantidad(6)">6</button>
      <button id="idResta" @:click="obtenerCantidad('-')">&#8722;</button>
      <button id="num1" @:click="obtenerCantidad(1)">1</button>
      <button id="num2" @:click="obtenerCantidad(2)">2</button>
      <button id="num3" @:click="obtenerCantidad(3)">3</button>
      <button id="idSuma" @:click="obtenerCantidad('+')">&#43;</button>
      <button id="num0" @:click="obtenerCantidad(0)" class="btn_0">0</button>
      <button id="idPunto" @:click="obtenerCantidad('.')">&#46;</button>
      <button id="idRespuesta" @:click="obtenerCantidad('=')">&#61;</button>
    </div>
  </div>
</template>

<script>
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FUNCIONALIDAD <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
export default {
  data() {
    return {
      numX: [],
      operador: "",
      numY: [],
      resultadoFinal: 0,
    };
  },
  methods: {
    obtenerCantidad(tmp) {
      if (tmp === "R") {
        this.resetearVariables();
      } else if (tmp === "<-") {
        if (
          this.operador != "" &&
          this.resultadoFinal.includes(this.operador)
        ) {
          if (this.numY != "") {
            this.numY.pop();
          } else {
            this.operador = "";
          }
          this.resultadoFinal = this.resultadoFinal.toString().slice(0, -1);
        } else if (this.operador == "") {
          this.numX.pop();

          this.resultadoFinal = Number(
            this.resultadoFinal.toString().slice(0, -1)
          );
        }
      } else {
        if (this.operador === "") {
          if (Number.isInteger(tmp) || tmp.includes(".")) {
            this.numX.push(tmp);
            this.resultadoFinal = this.numX.join("");
          } else if (typeof tmp === "string") {
            this.operador = tmp;
            this.resultadoFinal += tmp;
          }
        } else {
          if (tmp === "R" || this.resultadoFinal.includes("=")) {
            this.resetearVariables();
          } else {
            if (Number.isInteger(tmp) || tmp === ".") {
              this.numY.push(tmp);
              this.resultadoFinal += tmp;
            } else if (tmp === "=") {
              let x = parseFloat(this.numX.join(""));
              let y = parseFloat(this.numY.join(""));
              let resultado = 0;
              switch (this.operador) {
                case "+":
                  resultado = x + y;
                  break;
                case "-":
                  resultado = x - y;
                  break;
                case "*":
                  resultado = x * y;
                  break;
                case "/":
                  resultado = x / y;
                  break;
              }
              if (Number.isInteger(resultado)) {
                this.resultadoFinal += " = " + resultado;
              } else {
                this.resultadoFinal += " = " + resultado.toFixed(2);
              }
            }
          }
        }
      }
    },
    resetearVariables() {
      this.numX = [];
      this.numY = [];
      this.operador = "";
      this.resultado = 0;
      this.x = 0;
      this.y = 0;
      this.resultadoFinal = "";
    },
  },
};
</script>

<style>
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ESTILOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  /*grid-template-columns: 75px 75px 75px 75px;*/
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: 150px repeat(5, 75px);
  background-color: #00916e;
  padding: 15px;
  border-radius: 32px;
  box-shadow: 15px 10px 5px 5px #00000033;
}

.display {
  grid-column: span 4;
  padding: 35px 5px 0px 0px;
  margin: 10px 10px 20px;
  background-color: rgba(114, 225, 245, 0.808);
  border-radius: 32px;
  text-align: right;
  box-shadow: 0px 0px 0px 10px #00000033;
  font-size: 40px;
}

button {
  cursor: pointer;
  margin: 5px;
  padding: 0;
  border-radius: 22px;
  border: none;
  background-color: rgb(135, 194, 179);
  box-shadow: 5px 5px 10px 2px #00000040;
  font-size: 25px;
}

button:active {
  background-color: #006f54;
}

.btn_c {
  grid-column: span 2;
}

.btn_0 {
  grid-column: span 2;
}

body {
  background: #224870;
}

* {
  color: white;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
</style>