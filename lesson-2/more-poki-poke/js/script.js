const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

// Select the Pokémon class container

const pokemonsContainer = document.querySelector(".pokemons");

const previousBTN = document.querySelector("#btn-previous");
const nextBTN = document.querySelector("#btn-next");

let API_URL_NEXT = "";
let API_URL_PREVIOUS = "";


async function getPokemonNames(pagination) {
    try {
        console.log(pagination);
        let API_URL_TO_USE;
        if (pagination === "next") {
            API_URL_TO_USE = API_URL_NEXT; // next END POINT
        } else if (pagination === "previous") {
            API_URL_TO_USE = API_URL_PREVIOUS; // previous END POINT
        } else {
            API_URL_TO_USE = API_URL; // origin one
        }
        const response = await fetch(API_URL_TO_USE);
        const responseJSON = await response.json();
        // console.log("responseJSON: ", responseJSON);
        API_URL_NEXT = responseJSON.next;
        API_URL_PREVIOUS = responseJSON.previous;
        const pokemonData = responseJSON.results;
        // console.log("pokemonData: ", pokemonData);
        pokemonsContainer.innerHTML = "";
        for (let i = 0; i < pokemonData.length; i++) {
            // console.log(pokemonData[i]);
            // console.log(pokemonData[i].name);
            // console.log(pokemonData[i].url);
            pokemonsContainer.innerHTML += `<li>${pokemonData[i].name}</li>`
        }
    } catch (err) {
        console.log(err);
    }
}

getPokemonNames();

// previous
let handleClickPrevious = function () {
    console.log("you clicked previous");
    getPokemonNames("previous");
}
previousBTN.addEventListener("click", handleClickPrevious);

// next
let handleClickNext = function () {
    console.log("you clicked next");
    getPokemonNames("next");
}
nextBTN.addEventListener("click", handleClickNext);