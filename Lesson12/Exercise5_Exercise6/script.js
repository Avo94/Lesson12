let objectArray = [
  (object0 = { en: "Cat", ru: "Кот" }),
  (object1 = { en: "Dog", ru: "Собака" }),
  (object2 = { en: "Cow", ru: "Корова" }),
  (object3 = { en: "Hare", ru: "Заяц" }),
  (object4 = { en: "Bear", ru: "Медведь" }),
  (object5 = { en: "Fox", ru: "Лиса" }),
  (object6 = { en: "Hedgehog", ru: "Ёж" }),
  (object7 = { en: "Elk", ru: "Лось" }),
  (object8 = { en: "Goat", ru: "Козёл" }),
  (object9 = { en: "Elephant", ru: "Слон" }),
  (object10 = { en: "Duck", ru: "Утка" }),
  (object11 = { en: "Pig", ru: "Свинья" })];

let cards = document.querySelectorAll("div");
for (let i = 0; i < cards.length; i++) {
  cards[i].innerHTML = "<p></p><p></p>";

  cards[i].addEventListener("click", Changer);
  document.querySelector(".right").addEventListener("click", English);
  document.querySelector(".left").addEventListener("click", Russian);

  function Changer() {
    odd[i].classList.toggle("display");
    even[i].classList.toggle("display");
  }
  function English() {
    odd[i].classList.remove("display");
    even[i].classList.add("display");
  }
  function Russian() {
    odd[i].classList.add("display");
    even[i].classList.remove("display");
  }
}

let allAnimals = document.querySelectorAll("p");
for (let i = 1; i < allAnimals.length; i += 2) {
  allAnimals[i].classList.add("display");
  allAnimals[i - 1].classList.add("odd");
}

let odd = document.querySelectorAll(".odd");
let even = document.querySelectorAll(".display");
for (let i = 0; i < odd.length; i++) {
  odd[i].innerHTML = objectArray[i].en;
  even[i].innerHTML = objectArray[i].ru;
}