const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function () {
  if (input.checked) {
    const user = {}
    localStorage.setItem("wizardUser", JSON.stringify(user))
    localStorage.setItem("pageCounter", JSON.stringify(
        {approve:true, phase1: false, phase2: false, phase3 :false, summery: false}))
    window.location.href ="/../phase1/index.html"
  }
});
