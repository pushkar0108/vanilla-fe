'use strict';

import Route from './route.js';
import Router from './router.js';

(() => {
  const init = () => {
    new Router([
      new Route({
        name: 'home', 
        html: 'src/routes/home/home.html',
        js: 'src/routes/home/home.js',
        css: 'src/routes/home/home.css',
        isDefault: true
      }),
      new Route({
        name: 'about', 
        html: 'src/routes/about/about.html',
        js: 'src/routes/about/about.js',
        css: 'src/routes/about/about.css',
        isDefault: false
      })
    ]);
  };

  init();
})();