const BACKEND_URL = "http://localhost:3000";
const cardArea = document.getElementById("card-area")
const form = document.querySelector("form")
const select = form.querySelector('select')
let character_counter = 0
const directors_names = []
let addMovie = false


class Movie{
  constructor(movie){
    this.id = movie.id
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
    
    var h2 =  document.createElement('h2')
    h2.innerText = this.title

    let divForImg = document.createElement("div")
    divForImg.setAttribute("class","images")
    let img = document.createElement('img')
    img.setAttribute("alt", "movie picture")
    if(this.image){
      img.setAttribute("src", this.image)
    }else{
      img.setAttribute("src", "./src/images/unknown.jpg")
    }
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
    if (!this.characters.length == 0){
      Character.addCharactersTotheBlock(infoCollect,this.characters)
     }
    this.addDeleteButton(infoCollect)
    }

   addDeleteButton(infoCollect){
    let movie = this
    let button = document.createElement("button")
    button.innerText = "Delete this movie"
    button.setAttribute("class", "delete-movie")
    button.onclick = Movie.deleteMovie.bind(movie)
    infoCollect.append(button)
   }

  
   static createMovie(inputArray,textareas){
       let characters_attributes = {};
       let inputs = inputArray[0]
       let inputsForNames = inputArray[1]
       let inputsForImages = inputArray[2]

       for (let i = 0; i< character_counter +1; i++){
        
           let name,image,introduction
           name = inputsForNames[i].value
           image = inputsForImages[i].value
           introduction = textareas[i+1].value

           console.log(name)

          if (!name==""){
          let object = {
            name: name,
            image: image,
            introduction: introduction 
          }
          characters_attributes[i] = object
          }
      }
      
      let formData = {
        title: inputs[0].value,
        director_id: select.value,
        description: textareas[0].value,
        image: inputs[1].value,
        rt_score: inputs[2].value,
        release_year: inputs[3].value,
        characters_attributes: characters_attributes
      }

      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };

      fetch(`${BACKEND_URL}/movies`, configObj)
      .then(resp=>resp.json())
      .then(json=>{
        let mObject = new Movie(json);
        mObject.addMovietoPage();
        alert("Congrats! Movie created! Scroll down to see your new movie!")
       }
      )
      .then(()=>clearAllInputs(inputs,textareas))
      .catch(error=>{
        alert("Error! Can't create a movie...");
        console.log(error.message);
      }
      )
   }

   static deleteMovie(){
    let result = confirm("Do you want to delete this movie?")
    if (result){
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        id: this.id
      })
    };

     fetch(`${BACKEND_URL}/movies/${this.id}`, configObj)
     .then(resp=>resp.text())
     .then(resp=>alert(resp))
     .then(()=>document.getElementById(this.title).remove())
     .catch(error=>console.log(error))
  }    
  }
}


class Director{
  constructor(director){
    this.name = director.name
    this.introduction = director.introduction
    this.image = director.image
    this.id = director.id
    this.addDirectorTotheForm()
  }

  addDirectorTotheForm(){
     if (!directors_names.includes(this.name)){
        let option = document.createElement("option")
        option.setAttribute("value",this.id)
        option.innerText = this.name
        select.append(option)
        directors_names.push(this.name)
     }
  }

  addDirectorTotheBlock(infoCollect){

    let divForDirector = document.createElement('div')
    divForDirector.setAttribute('class',"target-block")
    divForDirector.innerHTML = `<strong>Director</strong>:  ${this.name}<br>`
    divForDirector.style.textDecoration = "underline dotted"
   
    let divForTooltip = document.createElement('div')
    divForTooltip.setAttribute('class',"tooltip")

    Practical.addImg(this,divForTooltip)
    Practical.addIntro(this,divForTooltip)

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
      pforTargetBlock.innerText += (characters[c].name + " ")
      pforTargetBlock.setAttribute("class","target-block")
      
      let divForTooltip = document.createElement("div")
      divForTooltip.setAttribute("class","tooltip")
      
      Practical.addImg(characters[c],divForTooltip)
      Practical.addIntro(characters[c],divForTooltip)
      
      pforTargetBlock.append(divForTooltip)
      pForNames.append(pforTargetBlock)
    }

    
    divForCharacters.append(pForNames)
    infoCollect.append(divForCharacters)
    
  }

}

class Practical {
  static addImg(obj,div){
    let img = document.createElement("img")
    img.setAttribute("class", "tooltiptext")
    if (obj.image){
    img.setAttribute("src",obj.image)
    }else{
      img.setAttribute("src", "./src/images/unknown.jpg")
    }
    div.append(img)
  }

  static addIntro(obj,div){   
    let intro = document.createElement("p")
    intro.setAttribute("class","tooltiptext")
    intro.innerText = obj.introduction
    div.append(intro)
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

let button = document.querySelector("div#create-movie")
button.addEventListener("click",()=>{
  if(addMovie){
    form.style.display = "none"
  }else{
    form.style.display = "block"
  }
  addMovie = !addMovie
})

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  let inputs = form.querySelectorAll("input")
  let inputsForNames = form.getElementsByClassName("character-names")
  let inputsForImages = form.getElementsByClassName("character-images")
  let inputArray = [inputs,inputsForNames,inputsForImages]
  let textareas = form.querySelectorAll("textarea")


  if(!!inputs[0].value){
    Movie.createMovie(inputArray,textareas)
  }else{
    alert("Error...A movie must at least have a name!")
  }
})

function clearAllInputs(inputs, textareas){
  inputs.forEach((input)=>input.value = "")
  textareas.forEach((text)=>text.value = "")
  document.querySelector("input[type='submit']").value = 'submit'
  document.getElementById("add-characters").value = 'Add more characters'
}



function addMoreCharacter(){
  character_counter +=1
  form.innerHTML += `
  
  <br>
  <label class="character-name">Character name</label>
  <input class="character-names" type="text" name="movie[characters_attributes][${character_counter}][name]" id="movie[characters_attributes][${character_counter}][name]" placeholder="A character can't be saved without a name"></br>
    

  <label>Character image</label>
  <input class = "character-images" type="text" name="movie[characters_attributes][${character_counter}][image]" id="movie[characters_attributes][${character_counter}][image]" placeholder="Write down the URL"></br>

  <label>Character introduction</label>
  <textarea name="movie[characters_attributes][${character_counter}][introduction]" id="movie[characters_attributes][${character_counter}][introduction]"></textarea></br>
  <br>
  `
  document.getElementsByClassName("submit")[0].remove()
  form.innerHTML +='<input class="submit" type="submit" value="submit">'
}




 

  

