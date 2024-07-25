const container = document.querySelector(".container")
const changeGrid = document.querySelector(".changeGrid")
const reset = document.querySelector(".reset")

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
createSqauresInContainers(16)
draw()

function draw() {
const sqaureNodeList = document.querySelectorAll(".sqaure")
sqaureNodeList.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.className = "red";
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
  } else {
    alert("You must pick a number between 2-100")
  }
})

reset.addEventListener("click", () => {
const sqaureNodeList = document.querySelectorAll(".red")
sqaureNodeList.forEach((element) => {
    element.className = "sqaure";
  })
})
