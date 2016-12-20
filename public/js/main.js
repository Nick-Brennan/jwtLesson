$(function(){
  console.log("page loaded");

  var rand = function() {
      return Math.random().toString(36).substr(2); 
  };

  var token = function() {
      return rand() + rand();
  }();

  var myJWT = btoa(JSON.stringify({myToken : token}));

  console.log("generated token: ", myJWT);

  $('#token').val(myJWT);

  $('#myForm').submit(function(e){
    e.preventDefault();

    var myHeaders = $.ajax({
      type: 'POST',
      url:'/subscribe',
      data: {token: myJWT, subUrl: $('#subscriberUrl').val()},
      success: function(data, textStatus, request){
        console.log('success');
        console.log(request);
        console.log(this);
        console.log(myHeaders.getAllResponseHeaders());
        var returnedHeaders = myHeaders.getAllResponseHeaders();
        console.log(myHeaders.getResponseHeader('bearerToken'));
        // location = "http://youtube.com";
        // console.log("Bearer Token: ", returnedToken);
      },
      error: function (request, textStatus, errorThrown) {
        console.log("fucked");
      }
    });
  });
});