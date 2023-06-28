(function () {
    'use strict';

    function startSnow() {
      window.snow = true;
      Lampa.Listener.follow('app', function (e) {
        if (e.type == 'ready') {
          $('.background').snowfall({deviceorientation : true, round : true, minSize: 5, maxSize:8});
        }
      });
    }
    if (!window.snow) startSnow();

})();
