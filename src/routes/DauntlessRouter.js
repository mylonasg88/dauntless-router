// interface RouteInterface {
//  
// }

import routes from './routes';

/**
 * Using singleton approach.
 * This can use module approach as described here: https://stackoverflow.com/questions/1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
 */
class DauntlessRouter {

  instance = null;

  // all slags extracted from routes
  slags = {};

  arraySlags = null;

  number = 0;

  constructor() {
    if (this.instance !== null) return this.instance;

    this.number = Math.random();

    console.log(routes);
    this.generateSlags(routes);

    this.instance = this;
  }

  getNumber() {
    return this.number;
  }

  generateSlags(routes, path = '') {
    // loop recursively over routes and create
    // slags object
    routes.forEach(route => {
      route.route = path + route.path;
      this.slags[route.slag] = route;

      if (route.routes !== undefined && route.routes.length > 0) {
        this.generateSlags(route.routes, `${path}${route.path}`);
      }
    });
  }

  getRouteSlags() {
    if (this.arraySlags !== null) return this.arraySlags;

    this.arraySlags = Object.values(this.slags);

    return this.arraySlags;
  }

  getSlags() {
    return this.slags;
  }

  generate(slag, params) {
    if (this.slags[slag] !== undefined) {
      if(params !== undefined) {
        let loop = 0;
        // replace all ids in the route
        return this.slags[slag].route.replace(/:[a-zA-Z_]+/gi, (replaceId, offset, path) => {
          return params[loop++];
        })
      }
      
      return this.slags[slag]?.route;
    }
    else return '';
  }
}

export default new DauntlessRouter();
