var Router = Backbone.Router.extend({
    routes:{

      '': "home",
      'sign_up': "sign_up",
      'sign_in': "sign_in",
      'upload': "upload",
      'about': "about",
      'show_album' :"show_album"
    },

    show_album: function(){
      console.log($('.jumbotron > h1').text())

    }


});




  var router = new Router();
  Backbone.history.start();
