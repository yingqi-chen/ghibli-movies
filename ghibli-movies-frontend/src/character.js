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