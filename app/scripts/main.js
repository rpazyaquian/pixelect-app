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

// ###################################################
// UPLOAD

upload: function(){
  alert('jsworking');
  $('#container').empty();
  console.log('it is working!');
},


// ######################################################
});


// end of backbone
// #####################################################

var router = new Router();
Backbone.history.start();
