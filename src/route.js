'use stict';

class Route {
  constructor({name, html, js, css, isDefault}) {
    this.name = name;
    this.html = html;
    this.js = js;
    this.css = css;
    this.default = isDefault;
  }

  isActiveRoute() {
    const hashedPath = window.location.hash.substr(1);
    return hashedPath.replace('#', '') === this.name; 
  }
}

export default Route;