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

    let p = document.createElement('p')
    p.innerText = 
    `Rotten Tomato Score: ${movie.rt_score}
    Release year: ${movie.release_year}
    Director: ${movie.director.name}
    Description: ${movie.description}`

   
    let divForImg = document.createElement("div")
    divForImg.setAttribute("class","images")
    let img = document.createElement('img')
    img.setAttribute("src", `./src/images/${movie.image}`)
    divForImg.append(img)
    
    
    
    divCard.append(h2,p,divForImg)
    cardArea.append(divCard)
  }

