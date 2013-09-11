(function( $ ) {
 
    $.fn.shopifyRandom = function(options) {
      widget = options.widgets[[Math.floor(Math.random() * options.widgets.length)]];
      target = options.target;
      $(target).html(widget);
    };
 
}( jQuery ));