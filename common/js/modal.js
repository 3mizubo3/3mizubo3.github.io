//スマホでみたときのメニューのhoverをやめる処理
$(function() {
	if($(window).width() <= 800){
				$("span.s-balloon").hide();
		$("#menu-open").on("click",function(){
				//$("nav.menu").find(".menu-item").find("span").css({"display":"inline-block","opacity":"1"});
				$("span.s-balloon").toggle();
		});
	}
});
//----------
$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})

$('#modal-container').click(function(){
  $(this).addClass('close');
  $('body').removeClass('modal-active');
});
