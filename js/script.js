// Preloader
var hellopreloader = document.getElementById("hellopreloader_preload");
function fadeOutnojquery(el){el.style.opacity = 1;
	var interhellopreloader = setInterval(function(){
		el.style.opacity = el.style.opacity - 0.05;
		if (el.style.opacity <=0.05){
		 clearInterval(interhellopreloader);
		 hellopreloader.style.display = "none";
		}},16);
}
window.onload = function(){
	setTimeout(function(){
		fadeOutnojquery(hellopreloader);
	},1000);};

// Scroll top arrow
$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх" class="wow zoomIn"><i class="fa fa-arrow-circle-up wow zoomIn" aria-hidden="true"></i></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
    var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
     else $(scrollDiv).fadeIn("slow")
   });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
 })
}
});

$(function() {
 $("#go-top").scrollToTop();
});

// scrolling

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
$('body,html').animate({scrollTop: top-300}, "slow");
});
});