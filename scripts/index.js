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

    const sectionInfo = $('.section_info');
    const sectionPrices = $('.section_prices');
    const navbar = $('.navbar');
    const firstPage = $('body,html');
    const blueSectionColor = 'blue-section-main-color';
    const greenSectionColor = 'green-section-main-color';

    $(window).on('scroll', function() {
        const scrollPosition = $(window).scrollTop();
        const sectionInfoOffset = sectionInfo.offset().top;
        const sectionInfoHeight = sectionInfo.outerHeight();
        const sectionInfoCenter = sectionInfoOffset + sectionInfoHeight / 2;
        const sectionPricesOffset = sectionPrices.offset().top
        const firstPageHeight = firstPage.height();
        const upperHalf = firstPageHeight / 2;

        if (scrollPosition < upperHalf) {
            navbar.removeClass(blueSectionColor).removeClass(greenSectionColor);
        } else if (scrollPosition > sectionInfoCenter && scrollPosition < sectionPricesOffset) {
            navbar.removeClass(blueSectionColor).addClass(greenSectionColor);
        } else {
            navbar.removeClass(greenSectionColor).addClass(blueSectionColor);
        }
    });
})