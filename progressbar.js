// const pageCounter = JSON.parse(localStorage.getItem("pageCounter"))

for (const page in pageCounter){
    if (pageCounter[page]){
        document.querySelector(`#${page}`).classList.add("progress_background")
    }
}