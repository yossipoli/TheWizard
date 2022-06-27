const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  if (input.checked) {
    window.location.replace("/../phase1/details.html");
  }
});
