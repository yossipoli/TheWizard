const submit = document.getElementById("submit")
const firstNameX = document.getElementById("firstNameAsterisk")
const emailX = document.getElementById("emailAsterisk")
const birthDateX = document.getElementById("birthDateAsterisk")


document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault()
})

firstNameX.style.display = "none";
emailX.style.display = "none";
birthDateX.style.display = "none";


submit.addEventListener("click", function () {
    const firstName = document.getElementById("firstName").value
    const email = document.getElementById("email").value
    const birthDate = document.getElementById("birthDate").value
    const nameFormat = /^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}$/;
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    let check = true;

    if (firstName.length < 2 && !nameFormat) {
        firstNameX.style.display = "block";
        check = false;
    }

    if (!email.match(mailFormat)) {
        emailX.style.display = "block";
        check = false;
    }

    if (!underAgeValidate(birthDate)) {
        birthDateX.style.display = "block";
    }
})

if (check = true){
    window.location.href = "/../phase2/personal.html";
}

function underAgeValidate(birthday) {
    var optimizedBirthday = birthday.replace(/-/g, "/");
    var myBirthday = new Date(optimizedBirthday);
    var currentDate = new Date().toJSON().slice(0, 10) + ' 01:00:00';
    var myAge = ~~((Date.now(currentDate) - myBirthday) / (31557600000));

    if (myAge < 18) {
        return false;
    } else {
        return true;
    }

}