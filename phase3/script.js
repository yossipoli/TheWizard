loadPage("phase3", "phase2" ,"/../phase2/index.html")


async function getHobbies() {
    const hobbies = await fetch("/../jsons/hobbies.json").then(res=>res.json())
    createHobbies(hobbies)
}
getHobbies()

// const user = JSON.parse(localStorage.getItem("wizardUser"));
const photoPart = document.getElementById("photo")
user.img = user.img || ""
user.hobbies = user.hobbies || []
photoPart.src = user.img

function createHobbies(hobbies){
    const hobbiesPlace = document.getElementById("hobbies")
    for(const hobby of hobbies){
        const hobbyElement = document.createElement("input")
        const hobbyLabel = document.createElement("label")
        hobbyElement.type = "checkbox"
        hobbyElement.onclick = ()=> addHobbies(hobby)
        hobbyElement.value = hobby
        hobbyLabel.textContent = hobby
        for(const userHobby of user.hobbies){
            if(userHobby == hobby){
                hobbyElement.checked = true
            }
        }
        hobbiesPlace.append(hobbyElement, hobbyLabel)
    }
}
function addHobbies(hobby){
    user["hobbies"].push(hobby)
}



function addPhoto(){
    const photoPlace = document.getElementById("userPhoto")
    user.img = photoPlace.value
    photoPart.src = photoPlace.value
}

const prev = document.querySelector("#prevBtn")
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../phase2/index.html";
})  

function submit(){
    pageCounter.phase3 = true
    next(user, pageCounter, "/../summary/index.html")
    // localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
    // localStorage.setItem("wizardUser", JSON.stringify(user))
    // window.location.href = "/../summary/index.html";
}


