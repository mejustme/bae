var _               = require('lodash'),
    template        = require('./template'),
    config          = require('../config'),
    api             = require('../api'),
    recent_posts;

recent_posts = function (options) {
    var recentPostsOptions = (options || {}).hash || {}, limit;
    if(_.has(recentPostsOptions, 'limit')){
        limit = parseInt(recentPostsOptions.limit, 10);
    } else {
        limit = 3;
    }

    recentPostsOptions = {
        limit: limit
    };

    return api.posts.browse(recentPostsOptions).then(function(posts){
        return template.execute('recent_posts',  {posts: posts.posts});
    });
};

module.exports = recent_posts;