
const turtle = document.querySelector('#seeTurtle')
const giraffe = document.querySelector('#seeGiraffe')
const monkey = document.querySelector('#seeMonkey')
const mouse = document.querySelector('#seeMouse')
const panda = document.querySelector('#seePanda')


document.querySelector('#turtle').addEventListener('click', turtleNext)
document.querySelector('#giraffe').addEventListener('click', giraffeNext)
document.querySelector('#monkey').addEventListener('click', monkeyNext)
document.querySelector('#mouse').addEventListener('click', mouseNext)
document.querySelector('#panda').addEventListener('click', pandaNext)

function turtleNext() {
  turtle.classList.toggle('hidden')
  giraffe.classList.add('hidden')
  monkey.classList.add('hidden')
  mouse.classList.add('hidden')
  panda.classList.add('hidden')

} function giraffeNext() {
  turtle.classList.add('hidden')
  giraffe.classList.toggle('hidden')
  monkey.classList.add('hidden')
  mouse.classList.add('hidden')
  panda.classList.add('hidden')

}

function monkeyNext() {
  turtle.classList.add('hidden')
  giraffe.classList.add('hidden')
  monkey.classList.toggle('hidden')
  mouse.classList.add('hidden')
  panda.classList.add('hidden')
}
function mouseNext() {
  turtle.classList.add('hidden')
  giraffe.classList.add('hidden')
  monkey.classList.add('hidden')
  mouse.classList.toggle('hidden')
  panda.classList.add('hidden')
}
function pandaNext() {
  turtle.classList.add('hidden')
  giraffe.classList.add('hidden')
  monkey.classList.add('hidden')
  mouse.classList.add('hidden')
  panda.classList.toggle('hidden')
}

