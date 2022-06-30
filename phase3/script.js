const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))

if (!pageCounter.phase2){
    window.location.replace("/../phase2/index.html")
}

async function getHobbies() {
    const hobbies = await fetch("/../jsons/hobbies.json").then(res=>res.json())
    createHobbies(hobbies)
}
getHobbies()

const data = JSON.parse(localStorage.getItem("wizardUser"));
const photoPart = document.getElementById("photo")
data.img = data.img || ""
data.hobbies = data.hobbies || []
photoPart.src = data.img

function createHobbies(hobbies){
    const hobbiesPlace = document.getElementById("hobbies")
    for(const hobbie of hobbies){
        const hobbieElement = document.createElement("input")
        const hobbieLabel = document.createElement("label")
        hobbieElement.type = "checkbox"
        hobbieElement.onclick = ()=> addHobbies(hobbie)
        hobbieElement.value = hobbie
        hobbieLabel.textContent = hobbie
        for(const userHobby of data.hobbies){
            if(userHobby == hobbie){
                hobbieElement.checked = true
            }
        }
        hobbiesPlace.append(hobbieElement, hobbieLabel)
    }
}
function addHobbies(hobbie){
    data["hobbies"].push(hobbie)
}



function addPhoto(){
    const photoPlace = document.getElementById("userPhoto")
    data.img = photoPlace.value
    photoPart.src = photoPlace.value


}

const prev = document.querySelector("#prevBtn")
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../phase2/index.html";
})  

function next(){
    pageCounter.phase3 = true
    localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
    localStorage.setItem("wizardUser", JSON.stringify(data))
    window.location.href = "/../summary/index.html";
}


