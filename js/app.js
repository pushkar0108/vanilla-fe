'use strict';

import Route from '../routes/route.js';
import Router from './router/router.js';

(() => {
  const init = () => {
    new Router([
      new Route('home', 'home.html', false, true),            
      new Route('about', 'about.html', 'custom.js')
    ]);
  };

  init();
})();