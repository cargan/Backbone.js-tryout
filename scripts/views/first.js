FirstView = Backbone.View.extend({
    el: $("#page"),
    template: _.template($('#template-first').html()),

    initialize: function() {
        this.collection = PersonsCollection;
        Person1 = new PersonsModel({name: 'Saulius', score: 28})
        Person2 = new PersonsModel({name: 'Loxatron', score: 22})
        Person3 = new PersonsModel({name: 'Jurgis', score: 26})
        this.collection = new PersonsCollection([Person1, Person2, Person3])
    },
    render: function(){
      var data = {
        items: this.collection.models
      }
      this.$el.html(this.template(data));
    }
});
