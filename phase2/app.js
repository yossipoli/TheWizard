
async function getCities(){
    const user = JSON.parse(localStorage.getItem("wizardUser"))
    const cities = await fetch("/../cities.json").then(res=>res.json())
    
    const citySection = document.querySelector("#city")
    const submit = document.querySelector("#submit")

    for (const city of cities){
        const cityName = document.createElement("option")
        citySection.appendChild(cityName)
        cityName.innerText = city
        cityName.value = city
    }

    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const city = document.querySelector("#city").value
        const street = document.querySelector("#street").value
        const number = document.querySelector("#number").value

        validation(city, street, +number)
    })

    function validation(city, street, number){

        const invalidCity = document.querySelector("#invalid_city")
        const invalidStreet = document.querySelector("#invalid_street")
        const invalidNumber = document.querySelector("#invalid_number")

        let isValid = true
        if (city === "Where are you living?"){
            invalidCity.classList.remove("hidden")
            isValid = false
        } else {
            invalidCity.classList.add("hidden")
        }

        const regex = /^[ A-Za-z0-9.-]*$/
        if (!street.match(regex) || street===""){
            invalidStreet.classList.remove("hidden")
            isValid = false
        }else {
            invalidStreet.classList.add("hidden")
        }

        if (!Number.isInteger(number) || number<=0){
            invalidNumber.classList.remove("hidden")
            isValid = false
        } else {
            invalidNumber.classList.add("hidden")
        }

        if (isValid){
            user.city = city
            user.street = street
            user.number = number
            pageCounter++
            localStorage.setItem("wizardUser", JSON.stringify(user))
            localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
            window.location.href = "/../phase3/personal.html"
            // window.location.replace("/../approve/approve.html");

        }
    }
}
const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))

// const progress = document.querySelectorAll(".progress")
// for (let i=0; i< pageCounter;i++){
//     progress[i].classList.add("progress_background")
// }

// if (pageCounter<2){
//    // window.location.href = "approve\\approve.html";
//     window.location.href = "/../approve/approve.html";
// }else{
//     getCities()
// }
getCities()
