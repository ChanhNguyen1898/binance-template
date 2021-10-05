
$(document).ready(function() {
    $(function () {
        var includes = $('[data-include]')
        $.each(includes, function () {
            var file = './../../../../layout/' + $(this).data('include') + '.html'
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
    //multi Children Tabs
    $('.myChildTabs').each(function() {
        var $myTabs = $(this);

        $myTabs.find('.detailChildTab').hide().first().show();
        $myTabs.find('.btnChildTab:first').addClass('active').show();
        $myTabs.find('.btnChildTab').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.detailChildTab').hide();
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
    //Select
    $('.css-1mxpxp').click(function () { 
        $(this).siblings('.bn-sdd-dropdown').toggleClass('css-1tsr9u1 css-fxluzf');
        $(this).children('.bn-input-suffix').children('.css-13c2b5p').children().toggleClass('css-1nlwvj5 css-1mv284k');
    });
    //ToolTip swap pool page
    $('.btn-tooltip').hover(function () {
            $(this).prev('.bn-tooltip-box').fadeIn(300);
        }, function () {
            $(this).prev('.bn-tooltip-box').fadeOut(300);
        }
    );
    //Modal window
    $('.modal-btn-vayno').click(function () { 
        $('.modal-box').fadeIn();
        $('.modal-send').hide();
        $('.modal-vayno').show();
    });
    $('.modal-btn-send').click(function () { 
        $('.modal-box').fadeIn();
        $('.modal-vayno').hide();
        $('.modal-send').show();
    });
    $('.btn-close').click(function () { 
        $('.modal-box').fadeOut();
        
    });
});
