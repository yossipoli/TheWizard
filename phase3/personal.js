
async function getHobbies() {
    const hobbies = await fetch("hobbies.json").then(res=>res.json())
    createHobbies(hobbies)
}
getHobbies()

const data = JSON.parse(localStorage.getItem("wizardUser"));
data.img = data.img || ""
data.hobbies = data.hobbies || []
console.log(data)

function createHobbies(hobbies){
    const hobbiesPlace = document.getElementById("hobbies")
    for(const hobbie of hobbies){
        const hobbieElement = document.createElement("input")
        const hobbieLabel = document.createElement("label")
        hobbieElement.type = "checkbox"
        hobbieElement.onclick = ()=> addHobbies(hobbie)
        hobbieElement.value = hobbie
        hobbieElement.classList.add("hobbie")
        hobbieLabel.textContent = hobbie
        hobbiesPlace.append(hobbieElement, hobbieLabel)
    }
}
function addHobbies(hobbie){
    data["hobbies"].push(hobbie)
}



function addPhoto(){
    const data = JSON.parse(localStorage.getItem("wizardUser"));
    const photoPlace = document.getElementById("userPhoto")
    data.img = photoPlace.value
    const photoPart = document.getElementById("photo")
    photoPart.src = photoPlace.value
    console.log(data.img)
    localStorage.setItem("wizardUser", JSON.stringify(data))

}

const prev = document.querySelector("#prevBtn")
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../phase2/phase2.html";
})  

function next(){
    const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))
    pageCounter.phase3 = true
    console.log(pageCounter)
    localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
    localStorage.setItem("wizardUser", JSON.stringify(data))
    console.log(pageCounter)
    window.location.href = "/../summary/summary.html";
}


const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))