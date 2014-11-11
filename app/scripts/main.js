<<<<<<< HEAD
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
  alert('jsworking');
  $('#container').empty();
  console.log('it is working!');
}


// ######################################################
});


// end of backbone
// #####################################################






  var router = new Router();
  Backbone.history.start();
=======
var ImageApp = ImageApp || {}

ImageApp.getAmazonURL = function() {
  $.ajax({
    url: 'http://localhost:3000/amazon/sign_key',
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
>>>>>>> fc1d71e5d29353395b55a97c0168069b3d290ea9
