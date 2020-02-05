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
    this.addInfoCollect(infoCollect)

    divCard.append(h2,divForImg,infoCollect)
    cardArea.append(divCard)

  }

  addInfoCollect(infoCollect){
  
    let pForInfo = document.createElement('p')
    pForInfo.innerHTML = 
    `<strong>Rotten Tomato Score</strong>:  ${this.rt_score}<br>
    <strong>Release year</strong>:  ${this.release_year}<br>
    <strong>Description</strong>:  ${this.description}<br>`

    this.director.addDirectorTotheBlock(infoCollect)
    infoCollect.append(pForInfo)
    Character.addCharactersTotheBlock(infoCollect,this.characters)
  }
}


class Director{
  constructor(director){
    this.name = director.name
    this.introduction = director.introduction
    this.image = director.image
  }

  addDirectorTotheBlock(infoCollect){

    let divForDirector = document.createElement('div')
    divForDirector.setAttribute('class',"target-block")
    divForDirector.innerHTML = `<strong>Director</strong>:  ${this.name}<br>`
    divForDirector.style.textDecoration = "underline dotted"
  
    
    let divForTooltip = document.createElement('div')
    divForTooltip.setAttribute('class',"tooltip")

    let pForDirector = document.createElement('p')
    pForDirector.setAttribute("class", "tooltiptext")
    pForDirector.innerText = this.introduction

    let imgForDirector = document.createElement('img')
    imgForDirector.setAttribute("class", "tooltiptext")
    imgForDirector.setAttribute('src', `./src/images/directors/${this.image}`)

 
    divForTooltip.append(imgForDirector,pForDirector)

    divForDirector.append(divForTooltip)

    infoCollect.append(divForDirector)
  }
}

class Character{
  constructor(character){
    this.name = character.name
    this.image = character.image
    this.introduction = character.introduction
  }

  static addCharactersTotheBlock(infoCollect,characters){
    
    let divForCharacters = document.createElement("div")
    divForCharacters.innerHTML = "<strong> Characters: </strong>"

    let pForNames = document.createElement("p")
    pForNames.style.textDecoration = "underline dotted"
    


    for (const c in characters){
      let pforTargetBlock = document.createElement("p")
      pforTargetBlock.innerText += characters[c].name
      pforTargetBlock.setAttribute("class","target-block")
      
      let divForTooltip = document.createElement("div")
      divForTooltip.setAttribute("class","tooltip")
      
      let imgForCharacter = document.createElement("img")
      imgForCharacter.setAttribute("class", "tooltiptext")
      imgForCharacter.setAttribute("src",`./src/images/characters/${characters[c].image}`)
      divForTooltip.append(imgForCharacter) 

      let introForCharacter = document.createElement("p")
      introForCharacter.setAttribute("class","tooltiptext")
      introForCharacter.innerText = characters[c].introduction
      divForTooltip.append(introForCharacter)

      pforTargetBlock.append(divForTooltip)


      // characters[c].addImageToBlock(divforTargetBlock)
      // characters[c].addIntroductionToBlock(divforTargetBlock)
      // // let pForCharacters = document.createElement("p")
      // pForCharacters.setAttribute("class","tooltiptext")
      // pForCharacters.innerText = 
      pForNames.append(pforTargetBlock)
    }

    
    divForCharacters.append(pForNames)
    infoCollect.append(divForCharacters)
    
  }

  addImageToBlock(divForCharacters){

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

 

  

