// changeNavigation
const nav = document.querySelector('.navbar')

const handleNav = () => {
    nav.classList.toggle('bluemini', window.scrollY > 300)
    nav.classList.toggle('greenmini', window.scrollY > 1800)
}


window.addEventListener('scroll', handleNav)

/* Settings */
const writeCooldown = 2000;
const eraseCooldown = 1000;

const typedText = $(".typed-text");
const cursor = $(".cursor");

const textArray = ["Jerzy", "Oskar"];

let textArrayIndex = 0;
let charIndex = 0;

const erase = () => {
    if (charIndex > 0) {
        cursor.removeClass('blink');
        //cursor.classList.remove('blink');
        typedText.text(textArray[textArrayIndex].slice(0, charIndex - 1));
        charIndex--;
        setTimeout(erase, 80);
    } else {
        cursor.addClass('blink');
        //cursor.classList.add('blink');
        textArrayIndex++;
        if (textArrayIndex > textArray.length - 1) {
            textArrayIndex = 0;
        }
        setTimeout(type, eraseCooldown);
    }
}

const type = () => {
    if (charIndex <= textArray[textArrayIndex].length - 1) {
        cursor.removeClass('blink');
        typedText.text(typedText.text() + textArray[textArrayIndex].charAt(charIndex));
        charIndex++;
        setTimeout(type, 120);
    } else {
        cursor.addClass('blink');
        setTimeout(erase, writeCooldown);
    }
}

$(function (){
    type();
}) 