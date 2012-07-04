SecondView = Backbone.View.extend({
    el: $("#page"),
    template: _.template($('#template-default').html()),
    render: function(){
      this.$el.html(this.template({'info': 'some second info'}));
    }
});
