// Your code goes here

const navBar = document.querySelector('nav');
// 1. 'mouseover' changes the font color of the nav-bar links when the icon goes over it
navBar.addEventListener('mouseover', ev => {
    ev.target.style.color = '#FF7F50';

    setTimeout(function() {
        ev.target.style.color = '';
    }, 500);
}, false);

// 2. 'click' changes the font color when a nav-bar link is clicked
navBar.addEventListener('click', ev => {
    ev.target.style.color = '#00FFFF';

    setTimeout(function() {
        ev.target.style.color = '';
    }, 1250);
}, false);

const busImg = document.querySelector('.intro img');
// 3. 'mouseenter' changes the size of the bus image when the mouse enters the area of the image
busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = "scale(1.5)";
    busImg.style.transition = "all 0.4s";
});

// 4. 'mouseleave' changes the size of the bus image when the mouse leaves the area of the image
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = "scale(1)";
});

const otherImgs = document.querySelectorAll('img');
// 5. 'dblclick' creates a confirm box when the user double clicks on any image on the page
otherImgs.forEach(imgs => {
    imgs.addEventListener('dblclick', () => {
        alert('The picture links to nothing.');
    });
});

// 6. 'load' creates an alert box when the page finishes loading
window.addEventListener('load', () => {
    prompt('Are you planning a trip soon? (Yes, No, Maybe)');
});

// 7. 'resize' creates an alert box whenever the window is resized to give the new and updated window height and width
window.addEventListener('resize', () => {
    alert(`The dimensions of your window have changed to:\nHeight: ${window.innerHeight}px\nWidth: ${window.innerWidth}px`);

});

// 8. 'blur' blurs the buttons at the bottom of the page
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btns => {
    btns.addEventListener('click', () => {
        btns.style.filter = 'blur(3px)';
    });
    btns.addEventListener('mouseleave', () => {
        btns.style.filter = '';
    });
});

const headerTag = document.querySelector('header');
// 9. 'keydown' sets an new font color and background color for the header section when a button is pressed
const downKey = document.addEventListener('keydown', () => {
    headerTag.style.color = '#FF7F50';
    headerTag.style.backgroundColor = '#00FFFF';
});

// 10. 'keyup' sets an new font color and background color for the header section when a button is released
const upKey = document.addEventListener('keyup', () => {
    headerTag.style.color = '';
    headerTag.style.backgroundColor = '';
});

// Stop propagation using to nested elements within the document
const introDiv = document.querySelector('.intro');
introDiv.addEventListener('click', () => {
    introDiv.style.border = '2px solid blue';
});
const imgDiv = document.querySelector('.intro img');
imgDiv.addEventListener('click', (event) => {
    imgDiv.style.border = '3px solid firebrick';
    event.stopPropagation();
    console.log(`Event propagation stopped.`)
});

// Uses preventDefault for stopping the nav-bar links from refreshing the page
const navLinks = document.querySelector('.nav-link');
navLinks.addEventListener('click', () => {
    navLinks.preventDefault();
    console.log(`Nav-bar links are prevented from refreshing the page.`)
});
