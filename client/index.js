Template.indexPage.rendered = function() {
  if (!window.allScriptsLoaded) {
    var scripts = [
      // list of JS files to be loaded.
      'js/jquery.themepunch.tools.min.js',
      'js/jquery.themepunch.revolution.min.js',
      'js/jquery.sidr.js',
      'js/fancybox/jquery.fancybox.js?v=2.1.4',
      'js/cleantabs.jquery.js',
      'js/fitvids.min.js',
      'js/jquery.scrollUp.min.js',
      'js/media/mediaelement-and-player.min.js',
      'js/owl-carousel/owl.carousel.js',
      'js/selectivizr-min.js',
      'js/placeholder.js',
      'js/jquery.stellar.min.js',
      'js/mosaic.1.0.1.js',
      'js/jquery.isotope.js',
      'js/toggle.js',
      'js/jquery.tooltipster.js',
      'js/jquery.countdown.js',
      'js/jquery.sticky.js',
      'js/html5media.js',
      'js/slider-1.js',
      'js/main.js'
      ];

      function loadNext() {
        var src = scripts.shift();
        if (typeof src === 'undefined')
          return;

        var s = document.createElement("script");

        s.setAttribute('src', src);
        if (s.addEventListener) {
          s.addEventListener("load", loadNext, false);
        } else if (s.readyState) {
          s.onreadystatechange = loadNext;
        }
        document.body.appendChild(s);
      };

      loadNext();
      window.allScriptsLoaded = true;
    };

  }