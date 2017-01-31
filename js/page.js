$(function() {
    $(window).resize(function(){
        var $colLeft = $('.col-left');
        var $footerContainer = $('.footerContainer');

        $footerContainer.css('height', 'auto');

        if($colLeft.height() > $footerContainer.height()) {
            $footerContainer.height($colLeft.height());
        }
    }).resize();
});