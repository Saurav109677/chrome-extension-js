const allImages = document.querySelectorAll("img");
const allP = document.querySelectorAll("p");
const images = ["nvcc.jpg","c6d54132282db0b814bed4a28ae613d6.jpg"]

for(let i=0;i<allP.length;i++){
    allP[i].style.background = "yellow";
}

for(let i=0;i<allImages.length;i++){
    let imagesIndex = Math.floor(Math.random()*images.length);
    var imgURL = chrome.runtime.getURL(`images/${images[imagesIndex]}`);
    allImages[i].src = imgURL;
}