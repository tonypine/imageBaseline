(function($){
    
    var o = {
        baseline: 11,
        maxWidth: false
    };
    
    $.fn.imageBaseline = function( options ) {
        
        var settings = $.extend({}, o, options);
        
        this.each(function() {
            
            var $this = $(this);
            $this.data(settings);
            var op = $this.data();
            
            if(op.maxWidth) {
                parent = $this.parent(),
                    parentWidth = parent.width();
                $this.width( parentWidth );
            }
            
            var h = $this.height(),
                newH = Math.floor( h / op.baseline ) * op.baseline;
            
            $this.height( newH );
            $this.width('auto');
            
        });
        
    }
    
})(jQuery);