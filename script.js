const iconContainer = document.getElementById('icon-container');
const burger = document.getElementById('burger');

let isIconsOpen = false;

burger.addEventListener('click',()=>{
    isIconsOpen =!isIconsOpen;
    iconContainer.style.width = isIconsOpen ? '100%' : '0%';
})
document.getElementById('gh-btn').addEventListener('click',()=>{
    window.location.href='https://github.com/vishwa-radhya/';
})

