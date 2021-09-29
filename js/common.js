
$(document).ready(function() {
    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = './../../layout/' + $(this).data('include') + '.html'
            $(this).load(file)
        })
    });
    //multi Tabs
    $('.myTabs').each(function() {
        var $myTabs = $(this);

        $myTabs.find('.detailTab').hide().first().show();
        $myTabs.find('.btnTab:first').addClass('active').show();
        $myTabs.find('.btnTab').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.detailTab').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
    });
    //slideToggle
    $('.slideToggle').each(function() {
        $('.btnToggle').click(function() {
            $(this).toggleClass('active');
            var tabRel = $(this).attr('rel');
            $(tabRel).slideToggle();
            $(".detailToggle:visible").not(tabRel).slideToggle();
            $(".detailToggle:visible").not(tabRel).prev().toggleClass('active');
        });
    });
    //ToolTip
    $('.myTooltip').each(function () {
        $('.tooltip-btn').hover(function () {
                $(this).next('.tooltip-detail').fadeIn(300);
            }, function () {
                $(this).next('.tooltip-detail').fadeOut(300);
            }
        );
    });
    
});
