import * as pages from './pages'

export interface RouteData {
  page: () => JSX.Element
}

export const routeMap = new Map<string, RouteData>()
  .set('/page1', {
    page: pages.Page1
  })
  .set('/page2', {
    page: pages.Page2
  })
  .set('/page31', {
    page: pages.Page31
  })
  .set('/page32', {
    page: pages.Page32
  })
  .set('/page33', {
    page: pages.Page33
  })
  .set('/page4', {
    page: pages.Page4
  })
  .set('/page5', {
    page: pages.Page5
  })
  .set('/', {
    page: pages.Page1
  });

export const routeArray = Array.from(routeMap).map(([path, r]) => ({ ...r, path }))