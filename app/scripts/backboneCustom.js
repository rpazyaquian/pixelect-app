var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'sign_up': 'sign_up',
      'sign_in': 'sign_in',
      'upload': 'upload',
      'about': 'about',
      'show_album' :'show_album'
    },
// ############### SIGN IN TEMPLATE ############//

  sign_in: function(){
    $('#handlebarsContainer').empty();
    var template = Handlebars.compile($("#sign_inTemplate").html());
      $('#handlebarsContainer').html(template({

      }));

  },
// ############### SIGN UP TEMPLATE ############//
  sign_up: function(){
    $('#handlebarsContainer').empty();
    var template = Handlebars.compile($("#sign_upTemplate").html());
      $('#handlebarsContainer').html(template({

      }));

  },
// ############### UPLOAD TEMPLATE ############//
  upload: function(){
    "use strict";
    $('#handlebarsContainer').empty();
    var template = Handlebars.compile($('#uploadTemplate').html());
      $('#handlebarsContainer').html(template({


      }));
      // console.log($('input[name="uploadedImage"]').val())
      console.log($('#upImg1').val())
      $('#submitupImg').on('click', function(){


          $.ajax({
            url: "https://polar-chamber-4218.herokuapp.com/image_sets",
            type: "POST",
            data: {
             image_set: {
                question: $('#question').val()
            }
        }
          })
          .done(function(result){
            console.log(result.id)
          });



          var imageOne = $('#upImg1').val()
          var imageTwo = $('#upImg2').val()
          var imageThree = $('#upImg3').val()
          var arrayOfImages = [imageOne,imageTwo,imageThree]
          // var question = $('#question').val()
          // console.log(arrayOfImages, question)

        for(var i=0; i<arrayOfImages.length; i++){
          var file = getImageData(arrayOfImages[i])
          console.log(file);
        }



        $.ajax


          window.location.replace("#/show_album");

      });

      // $.ajax({
      //     url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      //     type: 'POST',
      //     data:data
      //   })
      //   alert("upload worked")




  },

// ############### ABOUT TEMPLATE ############//
  about: function(){
    $('#handlebarsContainer').empty();
    var template = Handlebars.compile($('#aboutTemplate').html());
      $('#handlebarsContainer').html(template({
      }));

  },
// ###############SHOW_ALBUM TEMPLATE ############//
  show_album: function(){
    $('#handlebarsContainer').empty();
    var template = Handlebars.compile($('#show_albumTemplate').html());
      $('#handlebarsContainer').html(template({
      }));

    $.ajax({
      url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      type: 'GET'
    }).done(function(response) {

        });

  }
// // ############### END OF BACKBONE ############//

});


var router = new Router();
Backbone.history = Backbone.history || new Backbone.History({});
Backbone.history.start();

