$(document).ready(function() {
    var $tabs = $('.js-tabs'),
        $tabsTitle = $tabs.find('.js-tabs-title'),
        $tabsContent = $tabs.find('.js-tabs-content');
        
    
    $.ajax({
        url: $tabs.data('url')
    }).done(function(data) {
        console.log(data);
    });
});