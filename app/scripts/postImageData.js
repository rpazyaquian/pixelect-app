var postImageData = function(imageData, imageFile) {



  $.ajax({
    url: 'http://pixelectapp.s3.amazonaws.com/',
    type: 'POST',
    data: new FormData(this),
    processData: false,
    contentType: false
  })
};