$(document).ready(function() {
    //ToolTip swap pool page
    $('.css-jurv4m').hover(function () {
            $(this).prev('.bn-tooltip-box').fadeIn(300);
        }, function () {
            $(this).prev('.bn-tooltip-box').fadeOut(300);
        }
    );
    //Slide Toggle
    $('.css-q1tzec').click(function (e) { 
        $(this).parent().toggleClass('css-1ds8tsl css-oc7lny');
        $(this).next().slideToggle();
        $(this).children('.css-1r8zk1g').children().toggleClass('css-169v1nj css-1psszaf');
    });
})
