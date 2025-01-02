const element_to_hide = ['header', 'footer', 'div.col-12.bottommargin-sm', 'div.sticky.sticky-right', 'div.gotoTop'];
const element_to_font = ['*'];

function bible_cbck_reader_init() {
    element_to_hide.forEach(selector => {
        const els = document.querySelectorAll(selector);
        els.forEach(el => {
            el.style.display = "none";
        });
    });

    element_to_font.forEach(selector => {
        const els = document.querySelectorAll(selector);
        els.forEach(el => {
            el.style.fontSize = "1em";
        });
    });

    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        element.removeAttribute('class');
        element.style.margin = '0';
        element.style.padding = '0';
    });

    document.body.style.margin = "1em";
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bible_cbck_reader_init);
} else {
    bible_cbck_reader_init();
}