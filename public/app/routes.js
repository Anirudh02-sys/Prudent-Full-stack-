var routes = angular.module('appRoutes',['ngRoute'])

routes.config(['$routeProvider',function($routeProvider){
    console.group("routes")
    $routeProvider
        .when('/',{
            templateUrl: 'app/views/pages/home.html',
        })
        .when('/about',{
            templateUrl: 'app/views/pages/about.html',
        })
        .when('/register',{
            templateUrl: 'app/views/pages/users/register.html',
            controller: 'regCtrl',
            controllerAs: 'register'
        })
        .otherwise({
            redirectTo:'/'
        });

}])