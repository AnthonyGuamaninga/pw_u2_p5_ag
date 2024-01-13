const obtenerIdPokemons = () =>{
    const pokemons1= getRandomId(600)
    const pokemons2= getRandomId(600)
    const pokemons3= getRandomId(600)
    const pokemons4= getRandomId(600)
    const pokemonsArr= [pokemons1,pokemons2,pokemons3,pokemons4]
    console.log(pokemonsArr);
}

const obtenerNombrePokemons = (arreglo) => {
    const nombre1 = consumirAPI(arreglo[0]);
    const nombre2 = consumirAPI(arreglo[1]);
    const nombre3 = consumirAPI(arreglo[2]);
    const nombre4 = consumirAPI(arreglo[3]);
}

function consumirAPI(id) {
    return nombre
}

const obtenerIdPokemonsFachada = () => {
    obtenerIdPokemons()
}

function getRandomId(max){
    return Math.floor(Math.random() * max)+1;
}

export default obtenerIdPokemonsFachada