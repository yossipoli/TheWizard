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
        const number = +document.querySelector("#number").value

        if (validation(city, street, number)){
            user.city = city
            user.street = street
            user.number = number
            pageCounter.phase2 = true
            localStorage.setItem("wizardUser", JSON.stringify(user))
            localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
            window.location.href = "/../phase3/personal.html";
        }
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

        return isValid ?  true : false  
    }
}

const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))
if (!pageCounter.phase1){
    window.location.replace("/../phase1/details.html")
}
getCities()