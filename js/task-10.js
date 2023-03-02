function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divBoxes = document.querySelector('#boxes')
const input = document.querySelector('input')

const createBoxes = (amount) => {
  amount = input.value

  let initialSize = 30

  for (let i = 0; i < amount; i++) {

    let size = initialSize += 10
    const newBox = document.createElement('div')
    newBox.style.height = `${size}px`
    newBox.style.width = `${size}px`
    newBox.style.backgroundColor = getRandomHexColor() 

    divBoxes.appendChild (newBox).setAttribute ('class', 'newBox')
  }
} 

const destroyBoxes = () => {
  const Boxes = document.querySelectorAll('.newBox')
  Boxes.forEach(box => {
    document.querySelector('.newBox').remove()
  })
}

const button = document.querySelectorAll('button')
const createBox = button[0]
const deleteBox = button[1]

createBox.addEventListener('click', createBoxes)
deleteBox.addEventListener('click', destroyBoxes)

