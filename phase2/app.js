// const cities= require('./cities.json'); 
// console.log(cities);


const cities=[
    "Where are you living?",
    "new York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Indianapolis",
    "Charlotte",
    "San Francisco",
    "Seattle",
    "Denver",
    "Washington",
    "Nashville-Davidson",
    "Oklahoma City",
    "El Paso",
    "Boston",
    "Portland",
    "Las Vegas",
    "Detroit",
    "Memphis",
    "Louisville",
    "Baltimore",
]

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

    validation(city, street, number)
})

function validation(city, street, number){
    if (city === "Where are you living?"){
        alert("Please choose a city")
    }

    const regex = /\w+([\s\w+.-])/
}