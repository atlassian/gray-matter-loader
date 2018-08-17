import sample from "./sample.md";

function component() {
  let element = document.createElement("pre");
  element.innerHTML = JSON.stringify(sample, null, 2);

  return element;
}

document.body.appendChild(component());
