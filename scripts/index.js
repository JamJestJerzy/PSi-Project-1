const info_section = $('.section_info');
const prices_section = $('.section_prices');
const header = $('.header');
const navbar = $('.navbar');

const scrollTo = (section) => {
    $("html, body").animate({
        scrollTop: $(section).offset().top
    }, 200);
}

// Scrolls to the top on refresh
$(document).ready(() => {
    scrollTo(".header");

    // Scrolls to the info on click of the button
    $(".start_btn").click(() => {
        scrollTo(".section_info");
    })

    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition >= header.offset().top/2 && scrollPosition < info_section.offset().top/2) {
            navbar.removeClass("blue-section-main-color").removeClass("green-section-main-color");
        } else if (scrollPosition >= info_section.offset().top && scrollPosition < prices_section.offset().top) {
            navbar.removeClass("green-section-main-color").addClass("blue-section-main-color");
        } else if (scrollPosition >= prices_section.offset().top) {
            navbar.removeClass("blue-section-main-color").addClass("green-section-main-color");
        } else {
            navbar.removeClass("green-section-main-color").addClass("blue-section-main-color");
        }
    });
})