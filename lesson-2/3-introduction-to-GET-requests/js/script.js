
   
// API's API's
// As a Front End Developer you will need to make requests to those
// APIs in order to get data and use it in your web application


// EXAMPLE 1

// https://catfact.ninja/

const URL = "https://catfact.ninja/facts";

const factsContainer = document.querySelector(".my-cats-facts");

fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.data);
        factsContainer.innerHTML = "";
        const myCatFactsArr = data.data;
        for (let i = 0; i < myCatFactsArr.length; i++) {
            console.log(myCatFactsArr[i].fact);
            if (i === 4) {
                break;
            }
            factsContainer.innerHTML += `<li>${myCatFactsArr[i].fact}</li>`
        }

    })
    .catch((error) => {
        console.log(error);
    })
/*getApiRequest = async() => {
    const response = await fetch(url);
    return await response.json();
    console.log(response);
} */
//getApiRequest();

/*

const getGames = async() => {
    const games = await getApiRequest(url);

    gameContainer.innerHTML = "";

    for (game of games.results) {
      if (game === games.results[8]) {
          break;
      }

      console.log(game);
      gameContainer.innerHTML += `
      <div>
      <h2>Name: ${game.name}</h2>
      <h3>Rating: ${game.rating}</h3>
      <h4>Tags: ${game.tags.length}</h4>
      </div>`

    }
    if (gameContainer.innerHTML === "") {
        gameContainer.innerHTML = "Error:(";
     }
}
getGames()*/

