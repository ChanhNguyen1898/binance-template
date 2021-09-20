
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

        $myTabs.find('.css-gnqbje').hide().first().show();
        $myTabs.find('.css-1ajvsun:first').addClass('active').show();
        $myTabs.find('.css-1ajvsun').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.css-gnqbje').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
        
        $myTabs.find('.css-im6ko3').hide().first().show();
        $myTabs.find('.css-ov54vn:first').addClass('active').show();
        $myTabs.find('.css-ov54vn').click(function() {
            var $this = $(this);
            $this.addClass('active').siblings().removeClass('active');
            $myTabs.find('.css-im6ko3').hide();
            var tabLink = $(this).attr('rel');
            $(tabLink).show();
            return false;
        });
    });
    //FAQ Toggle
    $('.slideToggle').each(function() {
        $('.btnToggle').click(function() {
            $(this).toggleClass('active');
            var tabRel = $(this).attr('rel');
            $(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).slideToggle();
            $(".css-1qu0gon:visible").not(tabRel).prev().toggleClass('active');
        });
    });
});
