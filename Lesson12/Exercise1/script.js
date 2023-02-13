let stringArray = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Rem aspernatur nisi a optio!",
  "Beatae consequuntur mollitia amet dolorum rerum ipsa consequatur, molestias deserunt aspernatur, ea id, ipsam ad!",
  "Itaque, facilis.",
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  "Quia deserunt velit minima tempora consequuntur magni earum voluptate.",
  "Voluptate dolores sit accusantium perferendis nihil facilis dolorem veritatis asperiores, provident in facere!"];

for (let i = 0; i < stringArray.length; i++) {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p" + i);
  document.body.append(paragraph);
  document.querySelector(".p" + i).innerText = stringArray[i];
}

for (let i = 0; i < document.querySelectorAll("p").length; i++) {
  let paragraphCounter = document.querySelector(".p" + i);
  function Stars() {
    let starString = "";
    for (let i = 0; i < paragraphCounter.innerText.length; i++) {
      starString += "*";
    }
    paragraphCounter.innerText = starString;
  }
  paragraphCounter.addEventListener("click", Stars);
}