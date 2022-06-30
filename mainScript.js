const inputs = document.querySelectorAll("input");

let pageCounter, user;
function loadPage(current, phase, link) {
  pageCounter = JSON.parse(localStorage.getItem("pageCounter"));
  user = JSON.parse(localStorage.getItem("wizardUser"));

  pageValidation(current, phase, link);
}

// fillPage()
// function fillPage(){
//     for (const input of inputs){
//         if (input.type === "text"){
//             input.value = user[input] || ""
//         }
//     }
// }

function createLink() {
  const a = document.createElement("a");
  const div = document.createElement("div");
  a.href = "../premium/index.html";
  div.id = "premium";
  div.textContent = "Premium";
  a.appendChild(div);

  return a;
}

function createPremium() {
  const approveDiv = document.querySelector("#approve");
  const a = createLink();
  approveDiv.parentNode.insertBefore(a, approveDiv.nextSibling);
}

if (user.premium) createPremium();

function pageValidation(current, phase, link) {
  if (!pageCounter[phase]) window.location.replace(link);
  for (const page in pageCounter) {
    if (page === current)
      document.querySelector(`#${page}`).classList.add("current_page");
    if (pageCounter[page]) {
      document.querySelector(`#${page}`).classList.add("progress_background");
    } else {
      document.querySelector(`#${page}`).classList.add("progress_background");
      break;
    }
  }
}

function next(user, pageCounter, link) {
  localStorage.setItem("wizardUser", JSON.stringify(user));
  localStorage.setItem("pageCounter", JSON.stringify(pageCounter));
  window.location.href = link;
}
