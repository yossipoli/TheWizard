getCities()

async function getCities(){

    loadPage("phase2", "phase1","/../phase1/index.html")

    const user = JSON.parse(localStorage.getItem("wizardUser"))
    const cities = await fetch("/../jsons/cities.json").then(res=>res.json())

    const prev = document.querySelector("#prevBtn")
    prev.addEventListener("click", (e)=>{
        e.preventDefault()
        window.location.href = "/../phase1/index.html";
    })    

    
    const citySection = document.querySelector("#city")
    const submit = document.querySelector("#submit")
    
    for (const city of cities){
        const cityName = document.createElement("option")
        citySection.appendChild(cityName)
        cityName.innerText = city
        cityName.value = city
    }
    
    let city = document.querySelector("#city").value = user.city || "Where are you living?"
    let street = document.querySelector("#street").value = user.street || ""
    let number = document.querySelector("#number").value = user.number || 0

    submit.addEventListener("click",(e)=>{
        e.preventDefault()
         city = document.querySelector("#city").value
         street = document.querySelector("#street").value
         number = +document.querySelector("#number").value

        if (validation(city, street, number)){
            user.city = city
            user.street = street
            user.number = number
            pageCounter.phase2 = true
            localStorage.setItem("wizardUser", JSON.stringify(user))
            localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
            window.location.href = "/../phase3/index.html";
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