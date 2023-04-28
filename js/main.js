$(".header__switch").on("click", function () {
    if ($('.header__menu').is(".header__menu--show")) {
        $('.header__menu').removeClass("header__menu--show");
    } else {
        $('.header__menu').addClass("header__menu--show");
    }
});

$(window).scroll(function () {
    if ($('.header__menu').is(".header__menu--show")) {
        $('.header__menu').removeClass("header__menu--show");
    }
});

$('.tab-section__right').on("click", ".tab-section__item", function () {
    $('.tab-section__item').removeClass('tab-section__item--active');
    $(this).addClass('tab-section__item--active');
});

$('.dropdown').on("click", ".header__menu-link", function () {
    $('.dropdown').removeAttr('style');
    var veri = $(this).parent().find(".dropdown__menu").is(".active");
    $('.dropdown__menu').removeClass("active");
    if (veri) {
        $(this).parent().find(".dropdown__menu").removeClass("active");
        $(this).parent().css({ 'min-height': '0' });
    } else {
        $(this).parent().find(".dropdown__menu").addClass("active");
        $(this).parent().css({ 'min-height': '400px' });
    }

});