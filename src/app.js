//Google Login
function onLoadFunction(){
  gapi.client.setApiKey('AIzaSyAVlnJ3OQ7J2CkwhTT9utUCITimy36CYQE');
  gapi.client.load('plus','v1',function(){});

}


window.fbAsyncInit = function() {
    FB.init({
      appId            : '1573272676120944',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.12',
      status           : true
    });

    FB.getLoginStatus(function(response){
      if(response.status==='connected'){

      } else if(response.status==='not_authorized'){

      } else{

      }
    })
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
