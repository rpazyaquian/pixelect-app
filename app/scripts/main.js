var Router = Backbone.Router.extend({
    routes:{

      '': "home",
      'sign_up': "sign_up",
      'sign_in': "sign_in",
      'upload': "upload",
      'about': "about",
      'show_album' :"show_album"
    },

    show_album: function(){
      $('#image1')
          .attr("src","http://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Shetland_Pony_on_Belstone_Common,_Dartmoor.jpg/1280px-Shetland_Pony_on_Belstone_Common,_Dartmoor.jpg")
    }

});
