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
});