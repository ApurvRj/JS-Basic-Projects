const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerEl  = document.querySelector(".trailer-container");
const videoEl = document.querySelector("video");
btnEl.addEventListener("click",()=>{
    trailerEl.classList.remove("active");
});

closeIconEl.addEventListener("click",()=>{
    trailerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})