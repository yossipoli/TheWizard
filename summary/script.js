loadPage("summery", "phase3","/../phase3/index.html")

const main = document.querySelector("main");
const allP = document.querySelectorAll("p");
const newUser = document.querySelector("#newUser");
const prev = document.querySelector("#prevBtn");

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
///////////////////////////Galery: 

function flipRight(){
  user.img.push(user.img.shift())
  updateData()
}

function flipLeft(){
  user.img.unshift(user.img.pop())
  updateData()
}

// const night = 
// "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600"

// const tree = 
// "https://images.unsplash.com/photo-1518495973542-4542c06a5843?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600"

// const dog =
// "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600"

// const hen = 
// "https://images.unsplash.com/photo-1559628129-67cf63b72248?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600"

// const chick =
// "https://images.unsplash.com/photo-1500258593672-b080c40f4b02?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGljdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600"

// const photos = [
//   {title: "Tree", src: tree},
//   {title: "Chick", src: chick},
//   {title: "Dog", src: dog},
//   {title: "Night", src: night},
//   {title: "Hen", src: hen},
// ]

// user.img = photos

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

function updateData() {
  let i = 1;
  for (const key in user) {
    if (key == "img") {
      allP[i].textContent = ``;
      const photosArea = document.createElement("div");
      photosArea.classList.add("photos")
      allP[i].appendChild(photosArea);

      const leftArrow = document.createElement('img')
      leftArrow.id = "left"
      leftArrow.src = "left.png"
      leftArrow.alt = "left"
      leftArrow.classList.add("arrows")
      leftArrow.onclick = ()=> flipLeft()
      const rightArrow = document.createElement('img')
      rightArrow.id = "right"
      rightArrow.src = "right.png"
      rightArrow.alt = "right"
      rightArrow.classList.add("arrows")
      rightArrow.onclick = () =>flipRight()

      photosArea.appendChild(leftArrow)

      const photo = document.createElement("div")
      photo.classList.add("photo")
      photosArea.appendChild(photo)
      const img = document.createElement("img")
      img.src = user.img[0].src
      photo.appendChild(img);

    photosArea.appendChild(rightArrow)

    } else {
      allP[i].textContent = ``;
      allP[i].textContent = allP[i].textContent + ` ${user[key]}`;
    }
    i++;
  }
}

prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../phase3/index.html";
})  

updateData();
newUser.addEventListener("click", function () {
  localStorage.clear();
  window.location.replace("/../approve/index.html");
});


