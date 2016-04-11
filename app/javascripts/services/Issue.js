/**
 * Created by Pan on 4/11/16.
 */
angular.module('issueViewerApp')
    .factory('Issue', function ($resource) {
        return $resource("https://api.github.com/repos/npm/npm/issues/:number/:comments", {
            'callback': 'JSON_CALLBACK'
        }, {
            get: {
                method: 'JSONP'
            }
        });
    });