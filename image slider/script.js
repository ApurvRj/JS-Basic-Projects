const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const imageEl = document.querySelector(".image-container");
const imgEl = document.querySelectorAll("img");

let currentImg = 1;
let timeout;

nextEl.addEventListener("click",()=>{
    currentImg++;
    clearTimeout(timeout);
    updateImage();
})

prevEl.addEventListener("click",()=>{
    currentImg--;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage(){
    if(currentImg > imgEl.length){
        currentImg=1;
    }else if(currentImg < 1){
        currentImg=imgEl.length;
    }
    imageEl.style.transform=`translateX(-${(currentImg-1)*500}px)`;
    timeout=setTimeout(()=>{
        currentImg++;
        updateImage();
    },3000)
}