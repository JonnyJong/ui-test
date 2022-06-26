'use strict'

function UiSpotlight(element){

  let spotlightElementX, spotlightElementY, spotlightElementCurrent

  // 当指针在移动时
  if (element.classList.contains('ui-spotlight-fixed')) {
    element.addEventListener("pointermove" ,function(event){
      if (event.target==element) {
        element.style.setProperty("--x",event.offsetX+"px")
        element.style.setProperty("--y",event.offsetY+"px")
      }else{
        element.style.setProperty("--x",event.offsetX+event.target.offsetLeft+"px")
        element.style.setProperty("--y",event.offsetY+event.target.offsetTop+"px")
      }
    })
  }else{
    element.addEventListener("pointermove" ,function(event){
      spotlightElementX = element.offsetLeft, spotlightElementY = element.offsetTop
      spotlightElementCurrent = element.offsetParent
      while (spotlightElementCurrent !== null){
        spotlightElementX += spotlightElementCurrent.offsetLeft
        spotlightElementY += (spotlightElementCurrent.offsetTop + spotlightElementCurrent.clientTop)
        spotlightElementCurrent = spotlightElementCurrent.offsetParent
      }
      element.style.setProperty("--x", event.pageX - spotlightElementX + "px")
      element.style.setProperty("--y", event.pageY - spotlightElementY + "px")
    })
  }
  // 当点击时
  element.addEventListener("click" ,function(event){
    element.classList.add("ui-spotlight-onclick")
    if (event.target==element) {
      element.style.setProperty("--xC",event.offsetX+"px")
      element.style.setProperty("--yC",event.offsetY+"px")
    }else{
      element.style.setProperty("--xC",event.offsetX+event.target.offsetLeft+"px")
      element.style.setProperty("--yC",event.offsetY+event.target.offsetTop+"px")
    }
    setTimeout(() => {
      element.classList.replace("ui-spotlight-onclick","ui-spotlight-restore")
      setTimeout(() => {
        element.classList.remove("ui-spotlight-restore")
      }, 200)
    }, 700)
  })
  // 当在播放点击动画且鼠标移出时
  element.addEventListener("pointerleave" ,function(event){
    if (element.classList.contains("ui-spotlight-onclick")) {
      element.style.setProperty("--x","-200%")
      element.style.setProperty("--y","-200%")
    }
  })
}

document.addEventListener("DOMContentLoaded", function(){
  document.querySelectorAll('.ui-spotlight').forEach(element => {
    UiSpotlight(element)
  })
})