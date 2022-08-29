const navbarEl=document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");
window.addEventListener("scroll",()=>{
    if(window.scrollY>bottomContainer.offsetTop  - navbarEl.offsetHeight - 50){
        navbarEl.classList.add("active")
    }else{
        navbarEl.classList.remove("active")
    }
});