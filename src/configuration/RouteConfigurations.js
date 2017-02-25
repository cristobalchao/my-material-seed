class Routes {

  static configure($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main/tmpl/main.html',
        controller: 'MainController',
        controllerAs: 'main',
        reloadOnSearch: false
      })
      .otherwise({redirectTo: '/'});
  }
}

export default Routes;
