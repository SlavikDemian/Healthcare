function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu(){
        menu.toggleClass('burger-menu_active');

        if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
        } else {
            $('body').css('overlow', 'visible');
        }
    }
}

burgerMenu('.burger-menu');








// var menuBtn = document.querySelector('.menu-btn');
// var nav = document.querySelector('nav');
// var lineOne = document.querySelector('nav .menu-btn .line--1');
// var lineTwo = document.querySelector('nav .menu-btn .line--2');
// var lineThree = document.querySelector('nav .menu-btn .line--3');
// var link = document.querySelector('nav .nav-links');
// menuBtn.addEventListener('click', () => {
//     nav.classList.toggle('nav-open');
//     lineOne.classList.toggle('line-cross');
//     lineTwo.classList.toggle('line-fade-out');
//     lineThree.classList.toggle('line-cross');
//     link.classList.toggle('fade-in');
// })