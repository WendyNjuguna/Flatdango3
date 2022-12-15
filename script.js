fetch("http://localhost:3000/films")
  .then((response) => response.json())
  .then((data) => {
    const animeCharacters = data.find((object) => object.id == 1);

    //console.log(animeCharacters)
    const myPoster = document.getElementById("anime4");
    let animeImage = document.createElement("img");
    animeImage.src = animeCharacters.poster;
    animeImage.alt = "anime poster";
    animeImage.height = "350";
    animeImage.width = "350";
    myPoster.appendChild(animeImage);

    //display title and animeCharacter details of id 1
    const firstAnimeCharacters = document.querySelector("div#anime5");
    let myTitle = document.createElement("p");
    myTitle.textContent = animeCharacters.title;
    firstAnimeCharacters.appendChild(myTitle);
    let runTime = document.createElement("p");
    runTime.textContent = `the show runs for ${animeCharacters.runtime} minutes`;
    firstAnimeCharacters.appendChild(runTime);
    console.log(firstAnimeCharacters);

    let animeCharactersDesc = document.createElement("p");
    firstAnimeCharacters.appendChild(animeCharactersDesc);

    
    let remTickets = document.createElement("span");
    let remainingTickets = animeCharacters.capacity - animeCharacters.tickets_sold;
    remTickets.innerText = `${remainingTickets} remainingTickets`;
    firstAnimeCharacters.appendChild(remTickets);

    let myTickets = document.createElement("button");
    myTickets.innerText = `Buy Tickets`;
    firstAnimeCharacters.appendChild(myTickets);

    let mySpacing = document.createElement("br");
    firstAnimeCharacters.appendChild(mySpacing);

    myTickets.addEventListener("click", () => {
      if (remainingTickets === 1) {
        alert("Tickets sold out");
        remainingTickets.innerText - "Sold Out";
      } else {
        --remainingTickets;
        remTickets.innerText = `${remainingTickets}rem Tickets`;
      }
    });
  });

function display() {
  fetch("http://localhost:3000/films")
    .then((response) => response.json())
    .then(renderName);
}

display();

function renderName(myFilms) {
  myFilms.forEach(animeDetails);
}
function animeDetails(details) {
  const animeTitles = document.getElementById("anime3");
  let myanimeList = document.createElement("li");
  myanimeList.innerText = details.title;
  animeTitles.appendChild(myanimeList);
}
