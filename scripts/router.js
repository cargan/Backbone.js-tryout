var AppRouter = Backbone.Router.extend({
    routes: {
        "first-url": "firstRoute",
        "second-url": "secondRoute",
        "third-url": "thirdRoute",
        "home": "defaultRoute",
        // "*actions": "defaultRoute",
    },
    defaultRoute: function( actions ){
        var DW = new DefaultView();
        DW.render();
    },
    firstRoute: function( ){
        var FW = new FirstView();
        FW.render();
    },
    secondRoute: function( actions ){
        var SW = new SecondView();
        SW.render();
    },
    thirdRoute: function(){
        var TW = new ThirdView();
        TW.render();
    }
});

var app_router = new AppRouter;
Backbone.history.start();
