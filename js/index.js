// Your code goes here

// Document variable
const doc = document;

const navBar = doc.querySelector('nav');
// 1. 'mouseover' changes the font color of the nav-bar links when the icon goes over it
navBar.addEventListener('mouseover', ev => {
    ev.target.style.color = '#FF7F50';

    setTimeout(function() {
        ev.target.style.color = '';
    }, 500);
}, false);

// 2. 'click' changes the font color when a nav-bar link is clicked X
navBar.addEventListener('click', ev => {
    ev.target.style.color = '#00FFFF';

    setTimeout(function() {
        ev.target.style.color = '';
    }, 1500);
}, false);

const busImg = doc.querySelector('.intro img');
// 3. 'mouseenter' changes the size of the bus image when the mouse enters the area of the image
busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = "scale(1.5)";
    busImg.style.transition = "all 0.4s";
});

// 4. 'mouseleave' changes the size of the bus image when the mouse leaves the area of the image
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = "scale(1)";
});

const otherImgs = doc.querySelectorAll('img');
// 5. 'dblclick' creates a confirm box when the user double clicks on any image on the page
otherImgs.forEach(imgs => {
    imgs.addEventListener('dblclick', () => {
        alert('The picture links to nothing.');
    });
});

// 6. 'load' creates an alert box when the page finishes loading
window.addEventListener('load', () => {
    prompt('Ary you planning a trip soon? (Yes, No, Maybe)');
});
