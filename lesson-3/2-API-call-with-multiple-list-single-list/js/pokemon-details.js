console.log(document.location.search);

const queryString = document.location.search;
// to get value
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name")); //will give me pokemon name


const pokemonName = params.get("name");

const APIUrla = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

console.log(APIUrla);

const pokemonDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails(){
    try{
        const response = await fetch(APIUrla);
        const singlePokemonDetails = await response.json();
        console.log(`singlePokemonDetails`, singlePokemonDetails);
        const pokemonWeight = singlePokemonDetails.weight;
        pokemonDetails.innerHTML = `<div>the Pokemon weight is : ${pokemonWeight}</div>`
    }
    catch(error){
        console.log(error);

    }
}

getPokemonDetails();