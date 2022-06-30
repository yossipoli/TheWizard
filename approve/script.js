const button = document.querySelector("button");
const input = document.querySelector("input");
const agreeValidation = document.getElementById("agreeValidation")
agreeValidation.style.display = "none";

button.addEventListener("click", ()=>{
  if(input.checked){
    // const user = {}
    // const pageCounter = {approve:true, phase1: false, phase2: false, phase3 :false, summery: false}
    // next("/phase1/index.html")
    next({}, {approve:true, phase1: false, phase2: false, phase3 :false, summery: false}, "/phase1/index.html")
  }
  else{
    agreeValidation.style.display = "block";
  }
}) 


