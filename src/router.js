'use strict';

import HTTP from './services/http.js';

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

  goToRoute({html, js, css}) {
    if(html) {
      HTTP.get(html, responseText => {
        this.rootElem.innerHTML = responseText;
      });
    }

    if(js) {
      const newScript = document.createElement("script");
      newScript.src = js;
      document.head.appendChild(newScript);
    }

    if(css) {
      const link = document.createElement("link");
      link.href = css;
      link.type = "text/css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    }
  }
}

export default Router;