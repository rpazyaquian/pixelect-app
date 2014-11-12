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


    sign_in: function(){
      "use strict";
      var template = Handlebars.compile($("#sign_inTemplate").html());
        $('#handlebarsContainer').html(template({

        }));

    },


  upload: function(){
    "use strict";
    // $('#handlebarsContainer').empty();
    var template = Handlebars.compile($('#uploadTemplate').html());
      $('#handlebarsContainer').html(template({


      }));
      // console.log($('input[name="uploadedImage"]').val())
      console.log($('#upImg1').val())
      $('#submitupImg').on('click', function(){
        // Test Block<<<<<<<<<<<<<<<<
        console.log($('#upImg1').val())
        console.log($('#upImg2').val())
        console.log($('#upImg3').val())
        console.log($('#question').val())
        window.location.replace("#/show_album");
        //Test Block>>>>>>>>>>>>>>>>>>>>
          var imageSet = {
                image: {
                  file: $('#upImg1').val()
                }
          }
      });

      // $.ajax({
      //     url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      //     type: 'POST',
      //     data:data
      //   })
      //   alert("upload worked")



  },


  show_album: function(){
    var template = Handlebars.compile($('#show_albumTemplate').html());
      $('#handlebarsContainer').html(template({
      }));

    $.ajax({
      url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      type: 'GET'
    }).done(function(response) {
          console.log(response)
        });

  }


});


var router = new Router();
Backbone.history = Backbone.history || new Backbone.History({});
Backbone.history.start();



var ImageApp = ImageApp || {}

ImageApp.getAmazonURL = function() {
  $.ajax({
    url: 'https://polar-chamber-4218.herokuapp.com/amazon/sign_key',
    type: 'GET',
    data: {file_name: 'url.jpg'},
  })
  .done(function(result) {
    $('#uploadPolicy').val(result.policy);
    $('#uploadSignature').val(result.signature);
    $('#accessKey').val(result.access_key);
    $('#acl').val(result.acl);
    $('#key').val(result.key);
  })
  .fail(function(error) {
    console.log(error);
    console.log('error');
  })
  .always(function() {
    console.log("complete");
  });
};


$(document).ready(function() {
  ImageApp.getAmazonURL();
});
