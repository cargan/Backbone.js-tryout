ThirdView = Backbone.View.extend({
    el: $("#page"),
    template: _.template($('#template-default').html()),
    render: function(){
      this.$el.html(this.template({'info': 'some third info'}));
    }
});
