$(document).ready(function() {
  $('#imageUpload')
  .submit(function(event) {
    event.preventDefault();
    var imageFile = $('#image-file')[0].files[0]
    getImageData(imageFile);
  });
});
