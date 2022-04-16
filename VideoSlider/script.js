// console.log('+++');

let menuImg1 = document.querySelector('.menuItem1');
let menuImg2 = document.querySelector('.menuItem2');
let menuImg3 = document.querySelector('.menuItem3');
let menuImg4 = document.querySelector('.menuItem4');

menuImg1.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/cloud.mp4';
});

menuImg2.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/islands.mp4';
});

menuImg3.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/moon.mp4';
});

menuImg4.addEventListener('click', function(){
    let varVideo = document.querySelector('#videoSlider');
    varVideo.src = '/video/star.mp4';
});

// title focus tabs
let timer;
let titleOld = document.querySelector('head title').innerHTML;

// console.log(titleOld);

function changeTitle(icon, text){
    document.querySelector('head title').innerHTML = text;
    document.querySelector('link[rel="icon"]').setAttribute('href', icon);
}

window.onblur = () => {
    timer = setTimeout (() => {
        changeTitle('./favicon2.ico', 'Возврощайся мы скучаем');
    }, 3000)
}

window.onfocus = () => {
    clearTimeout(timer);
    changeTitle('./favicon.ico', titleOld);
}