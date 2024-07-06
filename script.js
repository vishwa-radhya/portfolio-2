const iconContainer = document.getElementById('icon-container');
const burger = document.getElementById('burger');

let isIconsOpen = false;

burger.addEventListener('click',()=>{
    isIconsOpen =!isIconsOpen;
    if(window.innerWidth>600){
    iconContainer.style.width = isIconsOpen ? '20%' : '0%';
    }else if(window.innerWidth<600 && window.innerWidth>400){
        iconContainer.style.width = isIconsOpen ? '30%' : '0%';
    }else if(window.innerWidth<380){
        iconContainer.style.width = isIconsOpen ? '40%' : '0%';
    }
})
document.getElementById('gh-btn').addEventListener('click',()=>{
    window.location.href='https://github.com/vishwa-radhya/';
})

