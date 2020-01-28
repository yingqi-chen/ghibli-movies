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
    <img src="https://m.media-amazon.com/images/M/MV5BNTg0NmI1ZGQtZTUxNC00NTgxLThjMDUtZmRlYmEzM2MwOWYwXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_UY268_CR2,0,182,268_AL_.jpg" />
    
    
    
    
    `
    

    div.append(p)
    cardArea.append(div)
  }

