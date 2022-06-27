const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))

const progress = document.querySelectorAll(".progress")
for (let i=0; i< pageCounter;i++){
    progress[i].classList.add("progress_background")
}