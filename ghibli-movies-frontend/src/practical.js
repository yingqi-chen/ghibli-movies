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