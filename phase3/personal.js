
async function getHobbies() {
    const response = await fetch('https://github.com/yossipoli/TheWizard/blob/main/hobbies.json', { mode: 'no-cors'});
    const hobbies = await response.json();
    console.log(hobbies);
}
getHobbies()



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
//createHobbies(hobbies)