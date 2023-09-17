const button  = document.querySelector(".hamburger")
const cont  = document.querySelector(".Mobile")
const wrapper = document.querySelector("#wrapper")
const overlay  = document.querySelector(".overlay")
button.addEventListener("click" , ()=>{
    cont.classList.toggle("activeMob")
    overlay.classList.toggle("activeMob")
    if(cont.classList.contains("activeMob")){
        setTimeout(()=>{
            cont.style.cssText = "opacity : 100%"
            document.body.style.cssText="overflow-y: hidden"
        },200)
    }
})

overlay.addEventListener("click" , ()=>{
    cont.classList.toggle("activeMob")
    overlay.classList.toggle("activeMob")
    document.body.style.cssText="overflow-y: auto"

})