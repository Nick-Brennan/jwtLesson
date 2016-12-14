$(function(){
  console.log("page loaded");

  var rand = function() {
      return Math.random().toString(36).substr(2); 
  };

  var token = function() {
      return rand() + rand();
  };

  $('#token').val(token);
  console.log(token());

  $('#myForm').submit(function(e){
    e.preventDefault();

    var myHeaders = $.ajax({
      type: 'POST',
      url:'/subscribe',
      data: {token: token, subUrl: $('#subscriberUrl').val()},
      success: function(data, textStatus, request){
        console.log('success');
        console.log(request);
        console.log(this);
        console.log(myHeaders.getAllResponseHeaders());
        var returnedHeaders = myHeaders.getAllResponseHeaders();
        console.log(returnedHeaders.match("bearerToken:\s(.*)"));
        // console.log("Bearer Token: ", returnedToken);
      },
      error: function (request, textStatus, errorThrown) {
        console.log("fucked");
      }
    });
  });
});