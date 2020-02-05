const BACKEND_URL = "http://localhost:3000";
const cardArea = document.getElementById("card-area")


class Movie{
  constructor(movie){
    this.title = movie.title
    this.description = movie.description
    this.rt_score = movie.rt_score
    this.image = movie.image
    this.release_year = movie.release_year
    this.director = new Director(movie.director)
    this.characters = movie.characters.map(c=>new Character(c))
  }

   addMovietoPage(){
    let divCard = document.createElement('div')
    divCard.setAttribute("id", this.title)
    divCard.setAttribute("class","movie-card")

    
    let h2 =  document.createElement('h2')
    h2.innerText = this.title


    let divForImg = document.createElement("div")
    divForImg.setAttribute("class","images")
    let img = document.createElement('img')
    img.setAttribute("src", `./src/images/movies/${this.image}`)
    divForImg.append(img)
    


    let infoCollect = document.createElement('div')
    infoCollect.setAttribute("class","movie-info")
    
    let p = document.createElement('p')
    p.innerHTML = 
    `<strong>Rotten Tomato Score</strong>:  ${this.rt_score}<br>
    <strong>Release year</strong>:  ${this.release_year}<br>
    <strong>Description</strong>:  ${this.description}<br>`

    this.addDirectorTotheBlock(infoCollect)

    infoCollect.append(p)


    divCard.append(h2,divForImg,infoCollect)
    cardArea.append(divCard)


  }

  addDirectorTotheBlock(infoCollect){

    let divForDirector = document.createElement('div')
    divForDirector.setAttribute('class',"director-block")
    divForDirector.innerHTML = `<strong>Director</strong>:  ${this.director.name}<br>`
    divForDirector.style.textDecoration = "underline dotted"
  
    
    let divForTooltip = document.createElement('div')
    divForTooltip.setAttribute('class',"tooltip")

    let pForDirector = document.createElement('p')
    pForDirector.setAttribute("class", "tooltiptext")
    pForDirector.innerText = this.director.introduction

    let imgForDirector = document.createElement('img')
    imgForDirector.setAttribute("class", "tooltiptext")
    imgForDirector.setAttribute('src', `./src/images/directors/${this.director.image}`)

 
    divForTooltip.append(imgForDirector,pForDirector)

    divForDirector.append(divForTooltip)

    infoCollect.append(divForDirector)
  }


}


class Director{
  constructor(director){
    this.name = director.name
    this.introduction = director.introduction
    this.image = director.image
  }
}

class Character{
  constructor(character){
    this.name = character.name
    this.image = character.image
    this.introduction = character.introduction
  }
}


document.addEventListener("DOMContentLoaded", ()=>{
  fetchMovies()
});

  function fetchMovies(){
    fetch(`${BACKEND_URL}/movies`)
    .then(response => response.json())
    .then(json => {
      for (movie of json){
        let mObject = new Movie(movie);
        mObject.addMovietoPage()
      } 
    }   
      );
  }

 

  

