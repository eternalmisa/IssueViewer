/**
 * Created by Pan on 4/11/16.
 */
angular.module('issueViewerApp')
    .factory('IssueList', function ($resource) {
        return $resource("https://api.github.com/repos/npm/npm/issues", {
            'callback': 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });
    });