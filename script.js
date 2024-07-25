const container = document.querySelector(".container")
const containers = document.createElement("div")

number = prompt("number")

function createDiv() {
  const div = document.createElement("div")
  div.setAttribute("class", "sqaure")
  containers.appendChild(div)
}

function createContainers() {
  const containers = document.createElement("div")
  containers.setAttribute("class", "containers")
  container.appendChild(containers)

}

while (number > 0) {
  createContainers()
  number--
}

 let containersList = document.querySelectorAll(".containers")

 console.log(containersList)
let i = 12
while (i > 0) {
  containersList.forEach((item) => {
    const div = document.createElement("div")
    div.setAttribute("class", "sqaure")
    item.appendChild(div)
  })
  i--
}
