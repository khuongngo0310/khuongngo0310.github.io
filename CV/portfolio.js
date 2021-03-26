$(document).ready(function(){
    $('.inline-items').click(function(){
        const value = $(this).attr('data-filter');
        if (value == '*'){
            $('.block-items').hide();
            $('.block-items').show(1000);
        }
        else{
            $('.block-items').hide();
            $('.block-items').filter('.'+value).show(500);
        }
    });
    $('.portfolio-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'li', function() {
            $buttonGroup.find('.current').removeClass('current');
            $( this ).addClass('current');
    });
    });
});