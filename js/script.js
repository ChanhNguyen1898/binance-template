$(document).ready(function () {
    $('.css-oymnjk').hide();
    $('.css-1wobcdl').click(function () {
        $('.css-oymnjk').fadeIn();
    });
    $('.menu-item').click(function () {
        $(this).toggleClass('css-1pkwjgt css-1nxq18a');
        $(this).next().toggleClass('css-1cuk2y css-17xlfum');
    });
    $('.css-110oij1, .css-1pysja1').click(function () {
        $('.css-oymnjk').fadeOut();
    });
});
