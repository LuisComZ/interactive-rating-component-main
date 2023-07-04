const firstPage = document.querySelector(".firstPage")
const secondPage = document.querySelector(".secondPage")
const notes = document.querySelector(".scoreButton") 
let actualRating = document.querySelector("#rating") 

function rate(n){
  if (n == 1) {
    actualRating.innerHTML = "1"
  } else if (n == 2) {
    actualRating.innerHTML = "2"
  } else if (n == 3) {
    actualRating.innerHTML = "3"
  } else if (n == 4) {
    actualRating.innerHTML = "4"
  } else if (n == 5) {
    actualRating.innerHTML = "5"
  }
}

function submit(currentPage, nextPage) {
  let displayNone
  let displayBlock

  if (currentPage == 1){
    displayNone = firstPage
  } else if (currentPage == 2){
    displayNone = secondPage
  }
  displayNone.style.display = "none"

  if (nextPage == 1) {
    displayBlock = firstPage
  } else if (nextPage == 2) {
    displayBlock = secondPage
  }
  displayBlock.style.display = "block"

  
}


