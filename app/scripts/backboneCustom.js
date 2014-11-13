var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'sign_up': 'sign_up',
      'sign_in': 'sign_in',
      'upload': 'upload',
      'about': 'about',
      'show_album/:id' :'show_album'
    },

    sign_in: function(){
      "use strict";
      var template = Handlebars.compile($("#sign_inTemplate").html());
        $('#handlebarsContainer').html(template({

        }));

    },

  upload: function(){
    $('#handlebarsContainer').empty();
    "use strict";
    var template = Handlebars.compile($('#uploadTemplate').html());
      $('#handlebarsContainer').html(template({

      }));

      // console.log($('input[name="uploadedImage"]').val())
      console.log($('#upImg1').val())
      $('#submitupImg').on('click', function(){
          var image_set_id = 0;

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
            console.log($('#upImg1')[0])

            image_set_id = result.id
            var imageOne = $('#upImg1')[0].files[0]
            console.log($('#upImg1')[0])
            var imageTwo = $('#upImg2')[0].files[0]
            var imageThree = $('#upImg3')[0].files[0]
            var arrayOfImages = [imageOne,imageTwo,imageThree]
            // var question = $('#question').val()
            // console.log(arrayOfImages, question)

          for(var i=0; i<arrayOfImages.length; i++){
            var file = getImageData(arrayOfImages[i],image_set_id)
            console.log(file);
          }
          window.location.replace("#/show_album/"+image_set_id);

          });


      });

      // $.ajax({
      //     url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
      //     type: 'POST',
      //     data:data
      //   })
      //   alert("upload worked")




  },

  home: function(){

      $.ajax({
        url: 'https://polar-chamber-4218.herokuapp.com/image_sets'

      }).done(function(response){
        console.log(response)
        var template = Handlebars.compile($('#homeTemplate').html());
      $('#handlebarsContainer').html(template({
        image_sets: response.image_sets

      }));

        $('#homeButton').on('click', function(){
          console.log(this.html())
        });


      });


  },


  show_album: function(id){
    $('#handlebarsContainer').empty();
      $.ajax({
      url: 'https://polar-chamber-4218.herokuapp.com/image_sets/'+id,
      type: 'GET'
    }).done(function(response) {



      console.table(response)
       var template = Handlebars.compile($('#show_albumTemplate').html());
      $('#handlebarsContainer').html(template({
          response: response


      }));
        });




  }


});


var router = new Router();
Backbone.history = Backbone.history || new Backbone.History({});
Backbone.history.start();

