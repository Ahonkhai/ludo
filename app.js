heading1 = document.querySelector('#heading1')
heading2 = document.querySelector('#heading2')
heading3 = document.querySelector('#heading3')
downloadbtn = document.querySelector('#downloadbtn')
image = document.querySelector('.image')
console.log(heading1)

const tl = new TimelineMax();

tl.fromTo(heading1, .5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})
.fromTo(heading2, .5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, '-=.4')
.fromTo(heading3, .5, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut}, '-=.4')

.fromTo(image, 1, {x: "100%"}, {x: "0%", ease: Power2.easeInOut}, '-=1')

const burger = document.getElementById('burger');
const all = document.getElementById('all');
const nav = document.getElementById('nav');
const contain = document.getElementById('contain');
let menu = true;
if (window.innerWidth < 800) {
    burger.style.display = 'block';
    all.style.height = '420vh';
    nav.style.display = 'none'
    menu = !menu;
    all.style.display = 'block';
    contain.style.height = '420vh';
    contain.style.overflow = 'scroll';
}

burger.addEventListener('click', () => {  
    console.log('clicked')  
    if (menu) {
        nav.style.display = 'block'
        menu = !menu;
        all.style.display = 'none';
        contain.style.height = '100vh';
        contain.style.overflow = 'hidden';
    }
    else{
        nav.style.display = 'none'
        menu = !menu;
        all.style.display = 'block';
        contain.style.height = '420vh';
        contain.style.overflow = 'scroll';
    }
})


burger.onclick = function () {
    console.log('clicked') 
}

