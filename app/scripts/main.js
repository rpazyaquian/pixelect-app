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

    // show_album: function(){
    //   "use strict";
    //   console.log($('.jumbotron > h1').text())

    // },




// ###################################################
// UPLOAD

upload: function(){
  "use strict";
  // $('#handlebarsContainer').empty();
  var template = Handlebars.compile($('#uploadTemplate').html());
    $('#handlebarsContainer').html(template({


    }));
    // console.log($('input[name="uploadedImage"]').val())
    console.log($('#upImg').val())
    $('#submitupImg').on('click', function(){
      console.log($('#upImg').val())
        var imageSet = {
              image: {
                file: $('#upImg').val()
              }
        }


    });

    $.ajax({
        url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
        type: 'POST',
        data:data
      })
  // alert("upload worked")



}


// ######################################################
});


// end of backbone
// #####################################################






  var router = new Router();

  Backbone.history.start();

