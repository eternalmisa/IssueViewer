/**
 * Created by Pan on 4/11/16.
 */
angular.module('issueViewerApp')
    .controller('DefaultCtrl', function($scope, $location, IssueList) {

        $scope.issues = [];
        IssueList.get({}, function(res) {
            for (var i = 0; i < res.data.length; i++) {
                $scope.issues.push(res.data[i]);
            }
            $scope.totalItems = res.data.length;
        });

        $scope.viewby = 10;
        $scope.currentPage = 2;
        $scope.itemsPerPage = $scope.viewby;
        $scope.maxSize = 5;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };
        $scope.pageChanged = function(page) {
            $scope.currentPage = page
            console.log($scope.currentPage);
        };
        $scope.setItemsPerPage = function (num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1;
        };
        $scope.navigate = function(issueNumber) {
            $location.path(['', 'detail', issueNumber, ''].join('/'));
        };
    });