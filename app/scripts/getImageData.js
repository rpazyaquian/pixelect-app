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
    var imageData = new FormData();
    var imagePayload = {
            image: {
              image_set_id: image_set_id,
              url: 'http://pixelectapp.s3.amazonaws.com/'+results.key
            }
          }
    $.ajax({
      url:"https://polar-chamber-4218.herokuapp.com/image_sets/"+image_set_id+'/images',
      type: 'POST',
      data: imagePayload
    });

    imageData.append("Policy", results.policy);
    imageData.append("Signature", results.signature);
    imageData.append("acl", results.acl);
    imageData.append("success_action_status", results.sas);
    imageData.append("AWSAccessKeyId", results.access_key);
    imageData.append("key", results.key);
    imageData.append("file", imageFile);

    postImageData(imageData, results.key);
  });
};
