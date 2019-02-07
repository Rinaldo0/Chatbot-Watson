$(document).on("click",".chat-button", function(){
  $(".chat-column").fadeToggle()
  var icon = $(this).children()
  icon.toggleClass("msg")
  icon.toggleClass("close")
});
$(document).on("click",".head",function(){
 $(this).toggleClass("barra");
 $(".hora").toggle();
 $(".medico").toggle();
 if ($(this).hasClass('barra')) {
   $("#chat").css("height","calc(100% - 113px)")
 } else {
   $("#chat").css("height","calc(100% - 133px)")
 }
});
