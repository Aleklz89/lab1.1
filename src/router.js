class Router {
  constructor() {
    this.routes = new Map();
    this.get = this.addHandler.bind(this, 'GET')
    this.post = this.addHandler.bind(this, 'POST')
    this.patch = this.addHandler.bind(this, 'PATCH')
    this.delete = this.addHandler.bind(this, 'DELETE')
    this.options = this.addHandler.bind(this, 'OPTIONS')
  }

  addHandler(method, path, handler) {
    const route = this.#getRoute(path)
    route.set(method, handler)
  }

  #getRoute(path) {
    let route = this.routes.get(path)

    if (!route) {
      route = new Map()
      this.routes.set(path, route)
    }
    return route
  }


  async handle(req, res) {
    await this.reqHandler.handle(req, res)
  }
}

export default Router