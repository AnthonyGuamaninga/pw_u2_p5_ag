<template>
    <div>
        <h2>{{ titulo }}</h2>
        <p>{{counter}} <sup>2</sup> = {{obtenerCuadradoComputado}}</p>
        <button @:click= "modificar('+')">+1</button>
        <button @:click= "modificar('-')">-1</button>
    </div>
  
</template>

<script>
export default {
    props:{
        titulo:String,
        valor:{
            type: Number,
            required: false,
            default: 100,
            validator(value){
                if(value>0){
                    console.log('Error!!');
                }
                return value>0
            },
        },
    },
    data(){
        return{
            counter: this.valor,
        };
    },
    methods:{
        obtenerCuadrado(){
            console.log("Se calcula el cuadrado")
            return this.counter * this.counter;
        },
        modificar(operation){
            if(operation==='+'){
                this.counter +=1
            }else{
                this.counter -=1
            }
        }
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Se ejecuta al cuadrado computado")
            return this.counter * this.counter;
        },
        

    },
};
</script>

<style scoped>
    button{
        background-color: #93e2b5;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0px 5px;
        padding: 5px 15px;
        
    }

    button:hover{
        background-color: rgb(102, 207, 93);
    }

    h2{
        font-weight: bold;
        text-transform: uppercase;
    }

    p{
        font-style: italic;
    }
</style>
