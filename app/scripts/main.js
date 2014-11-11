var Router = Backbone.Router.extend({
    routes:{

      '': "home",
      'home': "home",
      'sign_up': "sign_up",
      'sign_in': "sign_in",
      'upload': "upload",
      'about': "about",
      'show_album' :"show_album"
    },



    show_album: function(){
      console.log($('.jumbotron > h1').text())

    },




// ###################################################
// UPLOAD

upload: function(){
  var template = Handlebars.compile($().html());
    $('.container').html(template({

    }));

}


// ######################################################
});


// end of backbone
// #####################################################






  var router = new Router();
  Backbone.history.start();
