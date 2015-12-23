// Router
var PostRouter = Backbone.Router.extend({

    routes: {
        "": "displayPosts"
    },

	displayPosts: function() {

	   var postCollection = new PostCollection();

	   var postListView = new PostListView({model:postCollection});
	   postCollection.fetch({
	       success: function () {
	           $('#hasscript').html(postListView.render().el);
	       }
	   });
	}

});

var postRouter = new PostRouter();
Backbone.history.start();
