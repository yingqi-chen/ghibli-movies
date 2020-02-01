const BACKEND_URL = "http://localhost:3000";
const cardArea = document.getElementById("card-area")


document.addEventListener("DOMContentLoaded", ()=>{
  fetchMovies()
  let img = document.createElement("img")
  img.setAttribute("src", "./src/images/kiki.jpeg")
  document.body.append(img)
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
    let div = document.createElement('div')
    div.setAttribute("id", movie.title)
    div.setAttribute("class","movie-card")

    let p = document.createElement('p')
    p.innerHTML = `
    <h2>Title: ${movie.title}</h2>
    <p>Rotten Tomato Score: ${movie.rt_score}<p>
    <p>Release year: ${movie.release_year}<p>
    <p>Director: ${movie.director.name}<p>
    
    <em>Description: ${movie.description}</br>
    <div class = "imgs"><img src="./src/images/${movie.image}"/></div>`
    
    div.append(p)
    cardArea.append(div)
  }

