FirstView = Backbone.View.extend({
    el: $("#page"),
    template: _.template($('#template-first').html()),
    render: function(){
      this.$el.html(this.template({'items': [{'name': 'Miau', 'score': 12}, {'name': 'Loxatron', 'score': 545}]}));
    }
});
