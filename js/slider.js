$(document).on('ready', function(){
  $(".vertical-center").slick({
         dots: true,
         horizontal: true, //направление листания
         centerMode: false, //части соседних новостей
         autoplay: true,
         autoplaySpeed: 5000,
         focusOnSelect: true,
         infinite: true,
         pauseOnHover: true,
         pauseOnDotsHover: true,
         adapiveHeight: true
       });
});
