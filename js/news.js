$(document).ready(function() {
  $(".backgd").hide();
   $(".news_flex").hide();
   $(".news_window").hide();
  $(".news_block").click(function(){
    $(".backgd ").fadeIn(300);
    $(".news_flex").fadeIn(100);
    $(".news_window").fadeIn(100);
    $("body").css("overflow", "hidden");
    // $(".news_window").css("overflow", "inherit");
return false;
});
$(".backgd, .window_close").click(function(){
	$(".news_flex").hide();
  $(".news_window").hide();
  $(".backgd").fadeOut(300);
  $("body").css("overflow", "auto");
});

});
