const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  if (input.checked) {
    const user = {}
    localStorage.setItem("wizardUser", JSON.stringify(user))
    localStorage.setItem("pageCounter", 1)
    window.location.href ="/../phase1/details.html"
  }
});
