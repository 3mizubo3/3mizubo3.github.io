///------------------------------------------------------------------------///
///--------------------------------top-------------------------------------///
//アニメーション
$(function() {
  setTimeout('ani1()', 2400);
  setTimeout('ani2()', 3000); //1秒後に実行
});
function ani1() {
  var adScript = document.createElement("script");
  adScript.src = "top/js/top_canvas.js";
  document.getElementById('canvas').appendChild(adScript);//アニメーション用のクラスを追加
}

function ani2() {
  $('.title-container').addClass('title_anime');
    $('#prf-container-top').addClass('title_anime');
      $('.playbutton').addClass('title_anime'); //アニメーション用のクラスを追加
}

///------------------------------------------------------------------------///
///-------------------------------about------------------------------------///
$(function(){

$(".modalOpen").click(function(){
    var navClass = $(this).attr("class"),
    href = $(this).attr("href");

    $(href).fadeIn();
    $(this).addClass("open");
    //cssアニメーションの記述を追加する
    $(href).children(".inner").css("animation","modal 0.5s forwards");
    return false;
});

$(".modalClose").click(function(){
     $(this).parents(".modal").fadeOut();
     //$(".inner").fadeOut();
     $(".modalOpen").removeClass("open");
     //cssアニメーションの記述を追加する
      $(this).parents(".modal").children(".inner").css("animation","modalClose 0.5s forwards");
      return false;
});
});


///------------------------------------------------------------------------///
///-------------------------------works------------------------------------///
// 可変ヘッダー
$(function() {
  var $win = $(window),
      $header = $('header'),
      animationClass = 'active';

  $win.on('load scroll', function() {
    var value = $(this).scrollTop();
    if ( value > 100 ) {
      $header.addClass(animationClass);
    } else {
      $header.removeClass(animationClass);
    }
  });
});

//-----------------------------------------------------
//ビデオのロード処理.spではメディア読み込みせず、pcでのみ読み込み。
$(function() {
//$(window).resize(function(){
    var w = $(window).width();
    var h = $(window).height();
    var x = 800;
    var video = $('video');

    //メディアサイズが縦の方が長い時ファーストビューで2番目まで表示
    if (w <= h) {
    } else {
      $('#second').addClass('fuwat');
    }

    if (w <= x) {
        // スマホ時の処理
    } else {
        getProperty ();
        video[0].play();// ＰＣ時の処理
        $(window).scroll(function () {
          for (  var i = 0;  i < video.length;  i++  ){
            if (isScrolledIntoView(video[i]) == true) {
              video[i].play();
            } else {
              video[i].pause();
            }
          }
        });
    }
});
//scrollでvideoをplay.scrolloutでpause
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top +$(elem).height();
  var elemBottom = elemTop - $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

// pcの時、preloadをautoにする
function getProperty () {
// preloadを取得
//var element = document.getElementById( "videoone" ) ;
//var element = document.getElementsByClassName( "videoone" ) ;
var element = document.getElementsByTagName('video');
for (  var i = 0;  i < element.length;  i++  ){
element[i].preload = "auto" ;
//element[i].play() ;
}
}
//-----------------------------------------------------
//videoスクロールふわっと表示
$(function() {
$(document).ready(function(){
  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
   var windowHeight = $(window).height(),
       topWindow = $(window).scrollTop();
   $('.fuwat').each(function(){
    var objectPosition = $(this).offset().top;
    if(topWindow > objectPosition - windowHeight + 200){
     $(this).addClass("fuwatAnime");}
		 else{
			$(this).removeClass("fuwatAnime");
		 }
   });
  });
});
});


//------------------------------------------------------------------------///
///-------------------------------play------------------------------------///
$('.icon').click(function(){
  $('#sound_modal-container').addClass('out');
//  $('body').removeClass('modal-active');
});

//------------------------------------------------------------------------///
///-------------------------------Fadein&out------------------------------------///
//-------------Fadein-------------
/*$(function(){
$('head').append(
  '<style type="text/css">.fadein{display:none;}</style>'
);
$(window).on("load",function() {
  $('body').fadeIn(800).removeClass("fadein");
});
});*/

//-------------Fadeout-------------
$(function(){
  $('.fadelink').on("click",function() {
    var url = $(this).attr('href');
    if (url != '') {
      $('body').addClass("fadeout");
      $('body').fadeOut(700);
      setTimeout(function(){
        location.href = url;
      }, 500);
    }
    return false;
  });

  $(window).on("pageshow",function() {
    if (event.persisted) {
      window.location.reload();
    }
  });
});
