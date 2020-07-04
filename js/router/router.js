'use strict';

import HTTP from '../http/http.js';

class Router {
  constructor(routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('app');
    this.init();
  }

  init() {
    window.addEventListener('hashchange', () => {
      this.hasChanged();
    });

    this.hasChanged();
  }

  hasChanged() {
    const routes = this.routes;
    if (window.location.hash.length > 0) {
      for (let i=0; i < routes.length; i++) {
        const route = routes[i];
        if (route.isActiveRoute()) {
          this.goToRoute(route);
        }
      }
    } else {
      for (let i=0; i < routes.length; i++) {
        const route = routes[i];
        if (route.default) {
          this.goToRoute(route);
        }
      }
    }
  }

  goToRoute({htmlName, jsName}) {
    const url = 'views/' + htmlName;
    HTTP.get(url, responseText => {
      this.rootElem.innerHTML = responseText;
    });

    if (jsName) {
      const newScript = document.createElement("script");
      newScript.src = 'js/' + jsName;
      document.head.appendChild(newScript);
    }
  }
}

export default Router;