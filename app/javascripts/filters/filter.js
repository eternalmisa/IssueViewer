/**
 * Created by Pan on 4/11/16.
 */
angular.module('issueViewerApp')
    .filter('markdown', function() {
        return function(data) {
            if (!data) return data;
            return marked(data);
        }
    })
    .filter('twitter', function() {
        return function(data) {
            if (!data) return data;
            return twttr.txt.autoLink(data);
        }
    })
    .filter('short', function() {
        return function(body) {
            if (!body || body.length <= 140) return body;
            var msg = body.substring(0, 140);
            if (msg.indexOf('<img') > -1) {
                var index = msg.indexOf('<img');

                return msg.substring(0, index) + "<br>(Image...)";
            }
            var index = msg.lastIndexOf(' ');
            return msg.substring(0, index) + "...";
        }
    });