$(document).ready(function () {
    $('.tab-content').hide().first().show();
    $('.css-1txlisd:first').addClass('active').show();
    $('.css-1txlisd').click(function() {
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active');
        $('.tab-content').hide();
        var tabLink = $(this).attr('rel');
        $(tabLink).show();
        return false;
    });
})
