for (let i = 0; i <= 255; i++) {
  if (i % 5 == 0) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      "background-color: rgb(128, 128, " + `${i}` + ")"
    );
    document.body.append(div);
  }
}
console.log(document.querySelectorAll("div"));