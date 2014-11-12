// var Router = Backbone.Router.extend({
//     routes: {
//       '': 'home',
//       'home': 'home',
//       'sign_up': 'sign_up',
//       'sign_in': 'sign_in',
//       'upload': 'upload',
//       'about': 'about',
//       'show_album' :'show_album'
//     },

//     // initialize: function(){


//     //   this.bind("all", this.routes)
//     //   console.log(this)


//     sign_in: function(){
//       "use strict";
//       var template = Handlebars.compile($("#sign_inTemplate").html());
//         $('#handlebarsContainer').html(template({

//         }));

//     },
//     // show_album: function(){
//     //   console.log($('.jumbotron > h1').text())

//     // // },

//     // show_album: function(){
//     //   "use strict";
//     //   console.log($('.jumbotron > h1').text())

//     // },




// // ###################################################
// // UPLOAD

//   upload: function(){
//     "use strict";
//     // $('#handlebarsContainer').empty();
//     var template = Handlebars.compile($('#uploadTemplate').html());
//       $('#handlebarsContainer').html(template({


//       }));
//       // console.log($('input[name="uploadedImage"]').val())
//       console.log($('#upImg1').val())
//       $('#submitupImg').on('click', function(){
//         console.log($('#upImg1').val())
//           var imageSet = {
//                 image: {
//                   file: $('#upImg1').val()
//                 }
//           }
//       });

//       // $.ajax({
//       //     url: 'https://polar-chamber-4218.herokuapp.com/image_sets',
//       //     type: 'POST',
//       //     data:data
//       //   })
//       //   alert("upload worked")



//   }
// });


// // end of backbone
// // #####################################################






//   var router = new Router();

//   Backbone.history.start();



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
    $('#sas').val(result.sas);
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
