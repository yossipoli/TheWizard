const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))
// const progress = document.querySelectorAll(".progress")

console.log(progress)
for (const page in pageCounter){
    if (pageCounter[page]){
        document.querySelector(`#${page}`).classList.add("progress_background")
    }
}