/**
 * Created by Pan on 4/11/16.
 */
angular.module('issueViewerApp')
    .controller('DetailCtrl', function($scope, $location, $routeParams, Issue) {
        $scope.number = $routeParams.number;
        Issue.get({number: $scope.number}, function(res) {
            $scope.issue = res.data;
        });
        Issue.get({number: $scope.number, comments: 'comments'}, function(res) {
            $scope.comments = res.data;
        });
        $scope.backToList = function() {
            $location.path(['', '/', ''].join('/'));
        };
    });