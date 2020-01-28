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

  // function addMovietoPage(movie){
  //   let div = document.createElement('div')
  //   let p = document.createElement('p')
  //   p.innerText = movie.description
  //   div.append(p)
  //   cardArea.append(div)
  // }

