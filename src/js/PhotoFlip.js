(function($) {
    console.log('PhotoFlip.Js by Xavier Kelly has Properly loaded Enjoy');
    $.fn.cycleImage = function(){
        $(this).css('background-image', images[(imagePosition + 1) >= images.length ? imagePosition = 0 : ++imagePosition]);
    }

    $.fn.PhotoFlip = function( options, images ) {

        // Establish our default settings
        var settings = $.extend({
            interval            : '3000', 
            backgroundSize     :  'cover',
            repeat              : 'no-repeat',
            transitionTime      :   '0.5s'
        }, options);

        container = this;
        imagePosition = 0;

        //Set up the css
        this.css('background-repeat', settings.repeat).css('background-size', settings.backgroundSize).css('background-image', images[0]).css('transition',  settings.transitionTime);

        //Start the interval to change the background
        setInterval(function(){
                container.cycleImage();
        }, settings.interval);

        return this;
    };

}(jQuery));
