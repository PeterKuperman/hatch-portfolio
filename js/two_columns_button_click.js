$(document).ready(function(){
  function randomColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  };
  
  $("#b1").click(function(){
    $('.left').css('background', randomColor());
  });
  
  $("#b2").click(function(){
    $('.right').css('background', randomColor());
  });
});
