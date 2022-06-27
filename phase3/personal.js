
/*async function getHobbies() {
    const response = await fetch("hobbies.json",{
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        })
        if (response.ok) {
            const jsonValue = await response.json(); // Get JSON value from the response body
            return Promise.resolve(jsonValue);
          } else {
            return Promise.reject('*** PHP file not found');
          }
        }
    //const hobbies= await res.json()
    // .then(hobbies=>createHobbies(hobbies))
    //createHobbies(hobbies)
 */   

const hobbies = ["cooking",
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
"movies"]

const data = JSON.parse(localStorage.getItem("wizardUser"));

function createHobbies(hobbies){
    const hobbiesPlace = document.getElementById("hobbies")
    console.log(hobbiesPlace)
    for(const hobbie of hobbies){
        const hobbieElement = document.createElement("input")
        const hobbieLabel = document.createElement("label")
        hobbieElement.type = "checkbox"
        hobbieElement.value = hobbie
        hobbieLabel.textContent = hobbie
        console.log(hobbieElement)
        hobbiesPlace.append(hobbieElement, hobbieLabel)
    }
}
createHobbies(hobbies)

const photoPlace = document.getElementById("userPhoto")
photoPlace.addEventListener('input',()=>{
    data.img = photoPlace.value
    const photo = document.createElement("img")
    photo.src = photoPlace.value 
    const photoPart = document.getElementById("photo")
    photoPart.append(photo)

}
)
//createHobbies(hobbies)