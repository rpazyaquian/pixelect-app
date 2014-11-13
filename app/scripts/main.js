$(document).ready(function() {
  'use strict';
  $('#imageUpload')
  .submit(function(event) {
    event.preventDefault();
    var fileInputs = $('#imageUpload > input[type="file"]')
    for (var i = 0, length = fileInputs.length; i < length; i++) {
      var imageFile = fileInputs[i].files[0];
      getImageData(imageFile);
    }
  });
});
