(function($){

    var o = {
        baseline: 11,
        maxWidth: false,
        parent: {},
        heightOffset: 0,
        cropper: {}
    },
    
    m = {
        init: function( options ) {
            
            var settings = $.extend({}, o, options);
    
            this.each(function() {
                var $this = $(this);
                $this.data(settings);
                var op = $this.data();
                
                if ( m.isLoaded.apply( this ) )
                    m.adjust.apply( this );
                else
                    $this.load( $.proxy( m.adjust, this ) );
    
            });
            
        },
        isLoaded: function( cb ) {
            
            var $this = $(this);            
            if(this.complete && this.width !== 0)
                return true;
            else 
                return false;
            
        },
        adjust: function() {
            
            var $this = $(this),
                op = $this.data();
            
            if(op.maxWidth) {
                var parent = $.isEmptyObject( op.parent ) ? $this.parent() : $this.closest(op.parent),
                    parentWidth = parent.width();
                $this.width( parentWidth );
            }
            
            var h = $this.height(),
                newH = Math.floor( h / op.baseline ) * op.baseline;
            
            if( $.isEmptyObject( op.cropper ) ) {
                $this.height( newH + op.heightOffset );
                $this.width('auto');
            } else {
                $this.closest(op.cropper).height( newH + op.heightOffset ).css({
                    overflow: 'hidden'
                });
            }
            
        }
    };

    $.fn.imageBaseline = function( method ) {
        m.init.apply( this, arguments );
    }

})(jQuery);