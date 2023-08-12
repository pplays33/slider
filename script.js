let imgUrls = [
    "img\cardImg.jpg",
    "img\imgCard2.jpg",
    "img\imgCard3.jpg",
];
let base_width = 400;
let offset = 0;
let sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 1;
    if(offset >= imgUrls.length){
        offset = 0;
    }

    sliderLine.style.left = - (offset * base_width) + 'px';

});

document.querySelector('.slider-prev').addEventListener('click', () => {
    offset -= 1;
    if(offset < 0){
        offset = imgUrls.length - 1;
    }

    sliderLine.style.left = -(offset * base_width) + 'px';
});