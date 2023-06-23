
const dropDown1= document.querySelector(".dropdown-menu")
const dropDown2= document.querySelector(".dropdown-menu2")
const features= document.getElementById("features")
const company= document.getElementById("company")

features.addEventListener("click", ()=>{
    if(dropDown1.style.display == "none"){
        dropDown1.style.display = "block"
    }else{
        dropDown1.style.display = "none"
    }
    
})
company.addEventListener("click", ()=>{
    if(dropDown2.style.display == "none"){
     dropDown2.style.display = "block"
    }else{
        dropDown2.style.display = "none"
    }
})

function toggleMobileMenu(menu) {
    menu.classList.toggle("open");
   }