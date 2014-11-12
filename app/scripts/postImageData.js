var postImageData = function(formData, key) {
  // post the form data
  $.ajax({
    url: 'http://pixelectapp.s3.amazonaws.com/',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function(result){
    var imageUrl = 'http://pixelectapp.s3.amazonaws.com/'+key;
    var imageElement = $('<img>').attr('src', imageUrl);
    $('#images').append(imageElement);
  });
};