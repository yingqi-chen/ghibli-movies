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