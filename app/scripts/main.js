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

    // initialize: function(){

    //   this.bind("all", this.routes)
    //   console.log(this)


    // },

    show_album: function(){
      console.log($('.jumbotron > h1').text())

    },




// ###################################################
// UPLOAD

upload: function(){
  $('#handlebarsContainer').empty();
  var template = Handlebars.compile($('#uploadTemplate').html());
    $('#handlebarsContainer').html(template({


    }));
  alert("upload worked")


}


// ######################################################
});


// end of backbone
// #####################################################






  var router = new Router();

  Backbone.history.start();

