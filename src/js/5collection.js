var PostCollection = Backbone.Collection.extend({
    model: PostModel,
    url: "../wp-json/wp/v2/posts"
});
