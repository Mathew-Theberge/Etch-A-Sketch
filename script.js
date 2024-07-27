const container = document.querySelector(".container")
const changeGrid = document.querySelector(".changeGrid")
const reset = document.querySelector(".reset")
const dragover = document.querySelector(".dragover")
const mouseover = document.querySelector(".mouseover")
const colorInput = document.querySelector(".colorInput")
const rgbButton = document.querySelector(".rgbButton")
const border = document.querySelector(".border")
const noborder = document.querySelector(".noBorder")
const hold = document.querySelector(".hold")
const hover = document.querySelector(".hover")
const selectColor = document.querySelector(".selectColor")

var number = 16

function createContainers() {
  const containers = document.createElement("div")
  containers.setAttribute("class", "containers")
  container.appendChild(containers)
}

function createSqauresInContainers(num1) {
  num2 = num1
  while (num1 > 0) {
    createContainers()
    num1--
  }
  const containersList = document.querySelectorAll(".containers")
  while (num2 > 0) {
    containersList.forEach((item) => {
      const div = document.createElement("div")
      div.setAttribute("class", "sqaure")
      item.appendChild(div)
    })
    num2--
  }
  draw()
}

createSqauresInContainers(number)

function draw() {
const sqaureNodeList = document.querySelectorAll(".sqaure")
sqaureNodeList.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if(ismousedown) {
    element.setAttribute("style", `background:${returnColorInput()};`)
  }
  })
})
}

function drawRGB() {
  const sqaureNodeList = document.querySelectorAll(".sqaure")
sqaureNodeList.forEach((element) => {
  element.addEventListener("mouseover", () => {
    if(ismousedown) {
    element.setAttribute("style", `background:${randomRGB()};`)
  }
  })
})
}

changeGrid.addEventListener("click", () => {
  number = Number(prompt("Pick a number between 2-100"))
  if (number < 101 && number > 1) {
    const deleteContainers = document.querySelectorAll(".containers")
    deleteContainers.forEach((element) => {
      container.removeChild(element)
    })
    createSqauresInContainers(number)
    noborder.setAttribute("style", "background: rgb(240, 60, 96);")
    border.setAttribute("style", "background: lightgreen;")
  } else {
    alert("You must pick a number between 2-100")
  }
})

reset.addEventListener("click", () => {
const sqaureNodeList = document.querySelectorAll(".sqaure")
sqaureNodeList.forEach((element) => {
    element.setAttribute("style", "background:white;")
  })
})


function randomRGB() {
  return "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")";
}


function returnColorInput() {
  return colorInput.value
}

colorInput.addEventListener("change", draw)
rgbButton.addEventListener("click", drawRGB)


noborder.addEventListener("click", () => {
  const sqaureNodeList = document.querySelectorAll(".sqaure")
  sqaureNodeList.forEach((element) => {
    element.classList.add("noBorders")
  })
  border.setAttribute("style", "background: rgb(240, 60, 96);")
  noborder.setAttribute("style", "background: lightgreen;")
}) 

border.addEventListener("click", () => {
  const sqaureNodeList = document.querySelectorAll(".sqaure")
  sqaureNodeList.forEach((element) => {
    element.classList.remove("noBorders")
  })
  noborder.setAttribute("style", "background: rgb(240, 60, 96);")
  border.setAttribute("style", "background: lightgreen;")
})

let ismousedown;

hold.addEventListener("click", () => {
  document.addEventListener("mousedown",mouseDown)
  document.addEventListener("mouseup",mouseUp)
  ismousedown = false
  hover.setAttribute("style", "background: rgb(240, 60, 96);")
  hold.setAttribute("style", "background: lightgreen;")
})

function mouseUp() {
  ismousedown = false
}
function mouseDown() {
  ismousedown = true
}

hover.addEventListener("click", () => {
  document.removeEventListener("mouseup", mouseUp)
  document.removeEventListener("mousedown", mouseDown)
  ismousedown = true
  hold.setAttribute("style", "background: rgb(240, 60, 96);")
  hover.setAttribute("style", "background: lightgreen;")
})

document.addEventListener("mousedown",mouseDown)
document.addEventListener("mouseup",mouseUp)
ismousedown = false

colorInput.addEventListener("change", () => {
  selectColor.setAttribute("style", `background: ${colorInput.value}`)
})