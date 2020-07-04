'use stict';

class Route {
  constructor(name, htmlName, jsName, defaultRoute) {
    this.name = name;
    this.htmlName = htmlName;
    this.jsName = jsName;
    this.default = defaultRoute;
  }

  isActiveRoute() {
    const hashedPath = window.location.hash.substr(1);
    return hashedPath.replace('#', '') === this.name; 
  }
}

export default Route;