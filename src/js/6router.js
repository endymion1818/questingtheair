// Router
var PostRouter = Backbone.Router.extend({

    routes: {
        ""            : "displayPosts",
        "/slug"       : "postRoute"
    },

	displayPosts: function() {

	   var postCollection = new PostCollection();

	   var postListView = new PostListView({model:postCollection});
	   postCollection.fetch({
	       success: function () {
	           $('#hasscript').html(postListView.render().el);
	       }
	   });
	},
  postRoute: function( slug ) {

				var postItemView = new PostItemView();

				/**
				 * Set the post ID, trigginering a fetch.
				 */
				this.todoList.focusOnTodoItem(slug);
	}
});

var postRouter = new PostRouter();
Backbone.history.start({ pushState: true });
