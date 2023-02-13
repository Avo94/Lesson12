let divArray = document.querySelectorAll("div");

for (let i = 0; i < divArray.length; i++) {
  function Swaper() {
    divArray[i].classList.toggle("active");
  }
  divArray[i].addEventListener("click", Swaper);
}