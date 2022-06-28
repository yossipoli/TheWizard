const main = document.querySelector("main");
const allP = document.querySelectorAll("p");
const button = document.querySelector("button");

const pageCounter = JSON.parse(localStorage.getItem("pageCounter"));
if (!pageCounter.phase3) {
  window.location.replace("/../phase3/personal.html");
}

const data = JSON.parse(localStorage.getItem("wizardUser"));
// const data = {
//   fullName: "mike",
//   email: "sfs@gmail.com",
//   birthDate: new Date(),
//   city: "New york",
//   street: "10 nisan",
//   number: "12",
//   img: "https://img.freepik.com/free-vector/cute-rabbit-with-duck-working-laptop-cartoon-illustration_56104-471.jpg?t=st=1656328434~exp=1656329034~hmac=7030d97f81339754d80bf4f5ede503978c5d63f973b897636095c0541aa43e26&w=740",
//   hobbies: ["paint", "play video games"],
// };

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
  window.location.replace("/../approve/approve.html");
});


