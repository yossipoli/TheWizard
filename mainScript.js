
let pageCounter, user
function loadPage(phase ,link){
    pageCounter = JSON.parse(localStorage.getItem("pageCounter"))
    user = JSON.parse(localStorage.getItem("wizardUser"))

    pageValidation(phase ,link)
}
    
function pageValidation(current, phase ,link){
    if (!pageCounter[phase]) window.location.replace(link)
    for (const page in pageCounter){
        if (page === current) document.querySelector(`#${page}`).classList.add("current_page")
        if (pageCounter[page]){
            document.querySelector(`#${page}`).classList.add("progress_background")
        }
        else {
            document.querySelector(`#${page}`).classList.add("progress_background")
            break
        }
    }
}

function next(user, pageCounter, link) {
    localStorage.setItem("wizardUser", JSON.stringify(user))
    localStorage.setItem("pageCounter", JSON.stringify(pageCounter))
    window.location.href = link
  }

