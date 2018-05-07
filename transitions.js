$(function(){
  'use strict';
  var options = {
    prefetch: true,
    debug: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        //$container.addClass('is-exiting');

        // Restart your animation
        //smoothState.restartCSSAnimations();

        var els = $('.transition-element');
        $.each(els,function(ix,el) {
            var animation = $(el).css('animation-name');
            $(el).addClass('is-exiting');
            $(el).css('animation-name','none');
            $(el).height();
            $(el).css('animation-name',animation);
        });
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        //$container.removeClass('is-exiting');

        // Inject the new content
        $container.html($newContent);
      }
    }
  },
  smoothState = $('#main').smoothState(options).data('smoothState');
});