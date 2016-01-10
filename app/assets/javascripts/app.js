/**
 * Created by Marysia on 17.12.15.
 */
document.addEventListener('DOMContentLoaded', function() {

//------------------------------------STICKY HEADER------------------------------------

    var stickyNavTop = $('.sticky_nav').offset().top;

    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.sticky_nav').addClass('sticky');
        } else {
            $('.sticky_nav').removeClass('sticky');

        }
    };

    stickyNav();

    $(window).scroll(function() {
        stickyNav();
    });

//------------------------------------STICKY MENU------------------------------------

    var menu = $(".menuMobile");
    var cross = $('.x');

    $(menu).hide();
    $(cross).hide();

    function setClick() {
        $('.archive').on('click', function(event) {
            event.stopPropagation();
            $(menu).toggle();
            $(cross).toggle();
            //$('.cross').show();
            //$(this).hide();
        });
        $('.x').on('click', function() {
           $(".menuMobile").hide();
            $('.x').hide();
            //$('.hamburger').show();
            //$(this).hide();


    });
    }

    setClick();


//------------------------------------Scroll------------------------------------

    //
    //$(".project" ).scroll(function() {
    //    var href = $(this).attr("href");
    //    console.log(href);
    //    $('html, body').animate({
    //        scrollTop: $(href).offset().top
    //    }, 2000);
    //});


    //var fastScroll = function() {
    //    var project = $(".project");
    //    console.log(project);
    //$(window).scroll(function(event) {
    //    console.log("dziala");
    //    var href = $(project).next();
    //    console.log(href);
    //    $('html, body').animate({
    //        scrollTop: $(href).offset().top
    //    }, 2000);
    //});
    //};
    //
    //fastScroll();




});
