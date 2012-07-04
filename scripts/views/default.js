DefaultView = Backbone.View.extend({
    el: $("#page"),
    template: _.template($('#template-third').html()),
    render: function(){
      this.$el.html(this.template({'info': 'default content'}));
    }
});