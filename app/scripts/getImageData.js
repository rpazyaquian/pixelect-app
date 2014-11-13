var getImageData = function(imageFile,image_set_id) {
  'use strict';
  var image_set_id = image_set_id
  $.ajax({
    url: 'https://polar-chamber-4218.herokuapp.com/amazon/sign_key',
    type: 'GET',
    data: {
      file_name: 'url.jpg'
    },
  })
  .done(function(results){
    var signKeyResults = results;
    var imageData = new FormData();
    var imagePayload = {
            image: {
              image_set_id: image_set_id,
              url: 'http://pixelectapp.s3.amazonaws.com/'+signKeyResults.key
            }
          }
    $.ajax({
      url:"https://polar-chamber-4218.herokuapp.com/image_sets/"+image_set_id+'/images',
      type: 'POST',
      data: imagePayload
    })
    .done(function(results){
      imageData.append("Policy", signKeyResults.policy);
      imageData.append("Signature", signKeyResults.signature);
      imageData.append("acl", signKeyResults.acl);
      imageData.append("success_action_status", signKeyResults.sas);
      imageData.append("AWSAccessKeyId", signKeyResults.access_key);
      imageData.append("key", signKeyResults.key);
      imageData.append("file", imageFile);

      postImageData(imageData, signKeyResults.key);
    });

  });
};
