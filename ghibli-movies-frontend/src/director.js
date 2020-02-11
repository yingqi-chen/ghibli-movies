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