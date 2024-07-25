const container = document.querySelector(".container")

number = prompt("number")
numberForSecondLoop = number

function createContainers() {
  const containers = document.createElement("div")
  containers.setAttribute("class", "containers")
  container.appendChild(containers)
}

function createSqauresInContainers() {
  while (number > 0) {
    createContainers()
    number--
  }
  const containersList = document.querySelectorAll(".containers")
  while (numberForSecondLoop > 0) {
    containersList.forEach((item) => {
      const div = document.createElement("div")
      div.setAttribute("class", "sqaure")
      item.appendChild(div)
    })
    numberForSecondLoop--
  }
}


createSqauresInContainers()