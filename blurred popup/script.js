const bgEl = document.getElementById("bg-img");
window.addEventListener("scroll",()=>{
    updateImage();
});
function updateImage(){
    bgEl.style.opacity = 1 -window.pageYOffset/900;
    bgEl.style.backgroundSize = 160 - window.pageYOffset/12  +"%";
}