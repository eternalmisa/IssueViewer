/**
 * Created by Pan on 4/11/16.
 */
var app = angular.module('issueViewerApp',[
    'ngResource',
    'ngRoute',
    'ui.bootstrap',
    'ngSanitize'
]);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/default.html',
            controller: 'DefaultCtrl'
        })
        .when('/detail/:number', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});