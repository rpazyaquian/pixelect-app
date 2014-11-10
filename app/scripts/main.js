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

<<<<<<< HEAD
<<<<<<< HEAD
    show_album: function(){
      console.log($('.jumbotron > h1').text())

    }


=======
<<<<<<< HEAD
=======
>>>>>>> 6b39cbf555bca93c39d69a51bda18bf3c90bb0da
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
<<<<<<< HEAD
=======
>>>>>>> 54923f4b3e9c16d1e970cd5d34bdebd34f3fc706
});




  var router = new Router();
  Backbone.history.start();
>>>>>>> 2e68b8044d4839b08e4c1b86c2653bc753642139
=======
>>>>>>> 6b39cbf555bca93c39d69a51bda18bf3c90bb0da
