loadPage("summery", "phase3","/../phase3/index.html")

const main = document.querySelector("main");
const allP = document.querySelectorAll("p");
const button = document.querySelector("button");

// const user = JSON.parse(localStorage.getItem("wizardUser"));

function updateData() {
  let i = 1;
  for (const key in user) {
    if (key == "img") {
      const img = document.createElement("img");
      console.log("this is data img",user.img)
      img.src = user[key];
      allP[i].appendChild(img);
    } else {
      allP[i].textContent = allP[i].textContent + ` ${user[key]}`;
    }
    i++;
  }
}

updateData();
button.addEventListener("click", function () {
  localStorage.clear();
  window.location.replace("/../approve/index.html");
});


