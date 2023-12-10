/* ---------------- [ Typing animation ] ---------------- */
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
/* ---------------- [ Typing animation ] ---------------- */


let activeSection = "homepage";
const setActiveSection = (section) => {
    if (section === activeSection) return;
    if (activeSection) $("#" + activeSection).removeClass(".active");
    activeSection = section;
    $("#" + section).addClass(".active");
}



$(document).ready(async () => {
    /* Scrolls back to homepage */
    $("html, body").animate({
        scrollTop: $('.bg-image').offset().top
    }, 200);
    /* Scrolls back to homepage */

    await type(); // Starts typing animation

    /* Scrolls to home page on about button click */
    $("#homepage").click(() => {
        $("html, body").animate({
            scrollTop: $('.bg-image').offset().top
        }, 200);
    });
    /* Scrolls to home page on about button click */

    /* Scrolls to about on about button click */
    $("#about").click(() => {
        $("html, body").animate({
            scrollTop: $('.about').offset().top
        }, 200);
    });
    /* Scrolls to about on about button click */

    /* Scrolls to projects on about button click */
    $("#projects").click(() => {
        $("html, body").animate({
            scrollTop: $('.projects').offset().top
        }, 200);
    });
    /* Scrolls to projects on about button click */

    /* Highlights buttons on corresponding sections */
    $(window).scroll(() => {
        let scrollPos = $(document).scrollTop();

        if (scrollPos < $('.about').offset().top) {
            setActiveSection("homepage");
        } else if (scrollPos < $('.projects').offset().top) {
            setActiveSection("about");
        } else {
            setActiveSection("contact");
        }
    });
    /* Highlights buttons on corresponding sections */
});