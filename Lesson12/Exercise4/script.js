let dogsArray = [
  '<img src="pictures/Beagle.jpg">',
  '<img src="pictures/Bernhund.jpg">',
  '<img src="pictures/Border Collie.jpg">',
  '<img src="pictures/Dachshund.jpg">',
  '<img src="pictures/Doberman.jpg">',
  '<img src="pictures/German Shepherd.jpg">',
  '<img src="pictures/Golden retriever.jpg">',
  '<img src="pictures/Jack Russell Terrier.jpg">',
  '<img src="pictures/Shiba Inu.jpg">',
  '<img src="pictures/Siberian Husky.jpg">',
  '<img src="pictures/Staffordshire.jpg">',
  '<img src="pictures/Yorkshire.jpg">'];

for (let i = 0; i < dogsArray.length; i++) {
  let dog = document.createElement("div");
  dog.classList.add("dog" + i);
  dog.innerHTML = dogsArray[i];
  document.body.append(dog);
}

document.body.append(document.createElement("div"));
let picturesArray = document.querySelectorAll("div");
picturesArray[picturesArray.length - 1].className = "central";

for (let i = 0; i < dogsArray.length; i++) {
  function Magnifier() {
    picturesArray[picturesArray.length - 1].innerHTML = dogsArray[i];
  }
  document.querySelector(".dog" + i).addEventListener("click", Magnifier);
}