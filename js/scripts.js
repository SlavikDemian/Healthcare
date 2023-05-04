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


$(document).ready(function(){
    $('.slide-one').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },
            800:{
                items:3
            },

            1000:{
                items:5
            }
        }
    });
    $('.slide-two').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        autoplay: true,
        autoplayTimeout: 1000,
        navText: [ '', '' ],

        responsive:{
            0:{
                items:1
            },
            800:{
                items:3
            },

            1000:{
                items:7
            }
        }
    });

});




