document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('input').forEach(e =>{
    e.addEventListener('input',()=>{
      switch (e.id) {
        case 'main':
          document.body.style.setProperty('--main', e.value)
          break
        case 'bg':
          document.body.style.setProperty('--bg', e.value)
          break
        case 'size':
          document.body.style.setProperty('--ui-loader-size', e.value + 'px')
          break
        case 'rainbow':
          if (e.checked) {
            document.body.classList.add('ui-loader-rainbow')
          }else{
            document.body.classList.remove('ui-loader-rainbow')
          }
          break
        case 'rainbowBg':
          if (e.checked) {
            document.body.classList.add('rainbow')
          }else{
            document.body.classList.remove('rainbow')
          }
          break
        case 'rainbowSync':
          if (e.checked) {
            document.body.classList.add('rainbow-sync')
          }else{
            document.body.classList.remove('rainbow-sync')
          }
          break
      }
    })
  })
})