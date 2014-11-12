var getImageData = function(imageFile) {
  $.ajax({
    url: 'https://polar-chamber-4218.herokuapp.com/amazon/sign_key',
    type: 'GET',
    data: {
      file_name: 'url.jpg'
    },
  })
  .done(function(results){
    var imageData = new FormData();

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