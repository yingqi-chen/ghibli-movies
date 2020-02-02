const BACKEND_URL = "http://localhost:3000";
const cardArea = document.getElementById("card-area")


document.addEventListener("DOMContentLoaded", ()=>{
  fetchMovies()
});

  function fetchMovies(){
    fetch(`${BACKEND_URL}/movies`)
    .then(response => response.json())
    .then(json => {
      for (movie of json){
        addMovietoPage(movie)
      } 
    }   
      );
  }

  function addMovietoPage(movie){
    let divCard = document.createElement('div')
    divCard.setAttribute("id", movie.title)
    divCard.setAttribute("class","movie-card")

    
    let h2 =  document.createElement('h2')
    h2.innerText = `Title: ${movie.title}`

    let divCollect = document.createElement("div")

    let divForImg = document.createElement("div")
    divForImg.setAttribute("class","images")
    let img = document.createElement('img')
    img.setAttribute("src", `./src/images/${movie.image}`)
    divForImg.append(img)

    let p = document.createElement('p')
    p.setAttribute("class","movie-info")
    p.innerHTML = 
    `<strong>Rotten Tomato Score</strong>:  ${movie.rt_score}<br>
    <strong>Release year</strong>:  ${movie.release_year}<br>
    <strong>Director</strong>:  ${movie.director.name}<br>
    <strong>Description</strong>:  ${movie.description}<br>`

    divCard.append(h2,divForImg,p)
    cardArea.append(divCard)
  }

