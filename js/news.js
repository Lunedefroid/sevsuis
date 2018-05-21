$(document).ready(function() {
  $(".backgd").hide();
  $(".news_window").hide();
  $(".news_block").click(function(){
$(".backgd").fadeIn(300);
$(".news_window").fadeIn(200);
return false;
});
$(".left_close, .window_coverbox").click(function(){
  $(".news_window").hide();
  $(".backgd").fadeOut(300);
});
});
