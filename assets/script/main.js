const canvas = document.querySelector('canvas')
const context = canvas.getContext("2d")
const canWidth = canvas.width = 1300
const canHeight = canvas.height = 500

function gameScreen() {
  context.fillStyle = 'slateblue'
  context.fillRect(0, 0, canWidth, canHeight)
}

gameScreen()