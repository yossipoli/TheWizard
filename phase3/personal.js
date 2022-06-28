
async function getHobbies() {
    const hobbies = await fetch("/../hobbiesList.json").then(res=>res.json())
    console.log(hobbies)
    createHobbies(hobbies)
}
    //const hobbies= await res.json()
    // .then(hobbies=>createHobbies(hobbies))
    //
   
/*const hobbies = ["cooking",
"baking",
"singning",
"dancing",
"reading",
"football",
"basketball",
"tennis",
"running",
"baseball",
"driving",
"gaming",
"playing piano",
"camping",
"fishing",
"hunting",
"studying",
"cliff climbing",
"diveing",
"horse riding",
"watch tv",
"movies"]*/
getHobbies()
const data = JSON.parse(localStorage.getItem("wizardUser"));
let page = JSON.parse(localStorage.getItem("pageCounter"));

function createHobbies(hobbies){
    const hobbiesPlace = document.getElementById("hobbies")
    console.log(hobbiesPlace)
    for(const hobbie of hobbies){
        const hobbieElement = document.createElement("input")
        const hobbieLabel = document.createElement("label")
        hobbieElement.type = "checkbox"
        hobbieElement.value = hobbie
        hobbieElement.classList.add("hobbie")
        hobbieLabel.textContent = hobbie
        console.log(hobbieElement)
        hobbiesPlace.append(hobbieElement, hobbieLabel)
    }
}


const photoPlace = document.getElementById("userPhoto")
photoPlace.addEventListener('input',()=>{
    data.img = photoPlace.value
    const photo = document.createElement("img")
    photo.src = photoPlace.value 
    const photoPart = document.getElementById("photo")
    photoPart.append(photo)

})

const prev = document.querySelector("#prevBtn")
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../phase1/details.html";
})  

function next(){
    page.pageCounter ++
    window.location.href = "/../summary/summery.html";
}


//createHobbies(hobbies)