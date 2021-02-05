(function($) {
    'use strict';


    var win = $(window),
        btnMenuNavbar = $('.navbar-toggle'),
        navMenu = $(".main-menu"),
        listMenu = $("ul.main-menu li a")



    btnMenuNavbar.on("click", function(e) {
        e.preventDefault();
        navMenu.slideToggle();
        $(this).toggleClass("navbar-toggle-active");
    });

    listMenu.on("click", function(e) {
        var submenu = this.parentNode.getElementsByTagName("ul").item(0);
        if (submenu !== null) {
            e.preventDefault();
            $(submenu).slideToggle();
        }
    });


}($));



$(function() {
    $('.slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            767: {
                items: 1,
                nav: false,
            },
            1000: {
                items: 1
            }
        }
    })
})