loadPage("phase3","/../phase3/index.html")

const main = document.querySelector("main");
const allP = document.querySelectorAll("p");
const button = document.querySelector("button");

const data = JSON.parse(localStorage.getItem("wizardUser"));

function updateData() {
  let i = 1;
  for (const key in data) {
    if (key == "img") {
      const img = document.createElement("img");
      console.log("this is data img",data.img)
      img.src = data[key];
      allP[i].appendChild(img);
    } else {
      allP[i].textContent = allP[i].textContent + ` ${data[key]}`;
    }
    i++;
  }
}

updateData();
button.addEventListener("click", function () {
  localStorage.clear();
  window.location.replace("/../approve/index.html");
});


