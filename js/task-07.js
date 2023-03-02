var input = document.querySelector('#font-size-control')
var text = document.querySelector('#text')
const changeFontSize = () => {
   text.style.fontSize = `${input.value}px`
}

input.addEventListener ('input', changeFontSize)

















