const submit = document.getElementById("submit")
const firstNameX = document.getElementById("firstNameAsterisk")
const emailX = document.getElementById("emailAsterisk")
const birthDateX = document.getElementById("birthDateAsterisk")

loadPage("approve","/../approve/index.html")

const prev = document.querySelector("#prevBtn")
prev.addEventListener("click", (e)=>{
    e.preventDefault()
    window.location.href = "/../approve/index.html";
})  

document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault()
})

firstNameX.style.display = "none";
emailX.style.display = "none";
birthDateX.style.display = "none";

let firstName = document.getElementById("firstName")
let email = document.getElementById("email")
let birthDate = document.getElementById("birthDate")
firstName.value = user.name || ""
email.value = user.email || ""
birthDate.value = user.birthDate || ""


submit.addEventListener("click", function () {
    firstName = firstName.value
    email = email.value
    birthDate = birthDate.value
    const nameFormat = /\w\w+\s\w\w+/g;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const today = new Date();
    //const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    let check = true;

    if (!firstName.match(nameFormat)) {
        firstNameX.style.display = "block";
        check = false;
    }

    else if (firstName.match(nameFormat)){
        firstNameX.style.display = "none";
    }

    if (!email.match(mailFormat)) {
        emailX.style.display = "block";
        check = false;
    }

    else if (email.match(mailFormat)){
        emailX.style.display = "none";
    }

    if (!underAgeValidate(birthDate)) {
        birthDateX.style.display = "block";
        check = false;
    }

    else if (underAgeValidate(birthDate)){
        birthDateX.style.display = "none";
    }

    if (check){
        pageCounter.phase1 = true
        user.name = firstName
        user.email = email
        user.birthDate = birthDate
        localStorage.setItem("wizardUser", JSON.stringify(user))
        localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
        window.location.href = "/../phase2/index.html";
    }
})


function underAgeValidate(birthday) {
    const optimizedBirthday = birthday.replace(/-/g, "/");
    const myBirthday = new Date(optimizedBirthday);
    const currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
    const myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

    if (myAge < 18) {
        return false;
    } else {
        return true;
    }

}