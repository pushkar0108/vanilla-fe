'use strict';

class HTTP {
  get(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          callback && callback(xhttp.responseText);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
  }
}

export default new HTTP();