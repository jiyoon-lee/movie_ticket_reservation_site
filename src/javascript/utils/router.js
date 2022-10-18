class Router {
  constructor(routes) {
    if (!routes) {
      console.error('Can not initialize routes, need routes!')
    }
    this.routes = routes
  }
  init(mainElement) {
    if (!mainElement) {
      console.error('Can not initialize Route, not define mainElement')
      return null
    }
    this.mainElement = mainElement
    this.routing(window.location.pathname)

    window.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        e.preventDefault()
        this.routePush(e.target.closest('a').href)
      }
    })
    window.onpopstate = () => this.routing(window.location.pathname)
  }
  routePush(pathname) {
    window.history.pushState({}, null, pathname);
    this.routing(window.location.pathname);
  }
  routing(pathname) {
    let page = ''
    if (this.routes[pathname]) {
      const component = new this.routes[pathname]()
      page = component.render()
    }
    if (page) {
      this.render(page)
    }
  }
  render(page) {
    console.log(page)
    this.mainElement.innerHTML = ''
    this.mainElement.appendChild(page)
  }
}
export default Router
