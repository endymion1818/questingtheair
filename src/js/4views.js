// Views

var PostItemView = Backbone.View.extend({

    tagName:"article",

    template:_.template($('#tpl-post-item').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
  		'click a': function(e){
  			e.preventDefault();
  			Backbone.history.navigate(e.target.pathname, {trigger: true});
  		}
  	}
});

var PostListView = Backbone.View.extend({

    tagName: "section",

    render: function(eventName) {
        _.each(this.model.models, function (msg) {
            $(this.el).append(new PostListItemView({model:msg}).render().el);
        }, this);
        return this;
    }

});

var PostListItemView = Backbone.View.extend({

    tagName:"article",

    template:_.template($('#tpl-post-list-item').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});
