'use strict';

//################
/*$.event.special.myInvade = {//myInvadeイベントを自分で作成　event.specialはテンプレ
  setup: function(margin){//setup:はテンプレ
    var $e   = $(this);//$thisを$eとする
    var flg  = false;//初期のflgはfalse
    var func = function(){//func
      if(flg){//if flg=false
        return;//処理中止
      }
      var e_top = $e.offset().top;//上位置のオフセット
      var a_btm = Math.ceil($(window).scrollTop()+$(window).height()*(1-margin));//スクロール量
      if(e_top < a_btm){//スクロール量の方が多かったら
        flg = true;//flgをtrueにしてmyinvadeを発火する。falseを引数に渡す
        $e.trigger("myInvade", false);
      }
    };
    $(window).on("scroll.myInvade", func).on("resize.myInvade", func).on("load.myInvade", func);//スクロール、リサイズ、ロードイベントでfuncが実行される
  }
};*/

//################
var Util = function(){ var THIS=this;

	THIS.breakpoint = 800;
		THIS.flg = {
		  scrolling : false
		};
	THIS.narrow = false;
	if($(window).width() <= THIS.breakpoint){//ウィンドうサイズが800より小さかったらTHIS.narrowをtrueにする
	  THIS.narrow = true;
	}
};

///即時関数
(function(){
	this.checkUA = function(name){
	  var THIS=this;
	  var ua = navigator.userAgent.toLowerCase();//ブラウザ情報を小文字にする
	  if(ua.indexOf(name.toLowerCase()) !== -1){//－１ではなかったら
	    return true;//trueを返す
	  }
	  return false;
	};
	/*this.sprintf = function(str, prm){ var THIS=this;
	  for(var i=0,imax=prm.length; i<imax; i++){ var l=prm[i];
	    str = str.replace(new RegExp("{%}"), l);//正規表現
	  }
	  return str;
	};*/
	this.scroll = function($e, dur, mgn, cb){
		var THIS=this;
		if(dur==null)dur=400;
		if(mgn==null)mgn=0;
		if(cb==null)cb=function(){};
	  if(THIS.flg.scrolling){
	    return;
	  }
	  THIS.flg.scrolling = true;//scrollingをfalseからtrueにする

	  var pos = 0;
	  var c   = 0;
	  if($e && $e.length === 1){
	    pos = $e.offset().top-mgn;
	  }
	  $("html,body").animate({scrollTop:pos}, dur, function(){//TOPまでスクロールするアニメーション
	    c++;
	    THIS.flg.scrolling = false;//scrollingをfalseからtrueにする
	    if(c > 1){
	      cb();
	    }
	  });
	};
	this.mediaquery = function(bparr, cb1, cb2){ var THIS=this;//メディアクエリ
	  //object
	  var mm = [];
	  for(var i=0,imax=bparr.length; i<imax; i++){
	    mm.push(window.matchMedia("(max-width:"+bparr[i]+"px)"));//配列mm最後尾にプッシュするスクリーンのサイズをプッシュする
	    //--on breakpoint
	    mm[i].addListener(function(ev){//ブレイクポイントの瞬間に発火
	      cb2(ev.media.match(/[0-9]/g).join("")*1, ev.matches);
	    });
	  }
	  //first status
	  var idx = -1;
	  for(var i=0,imax=mm.length; i<imax; i++){
	    if(mm[i].matches){
	      idx = i;
	      break;
	    }
	  }
	  if(idx === -1){
	    //--over max
	    cb1(-1);
	  }else{
	    //--between
	    cb1(bparr[idx]);
	  }
	};
//$when-->複数の非同期処理が全部終わったら、続く処理を行うAJAXでの処理
this.stepRun = function(fnarr, onfail, onend){ var THIS=this; if(onfail==null)onfail=function(){};if(onend==null)onend=function(){};
  var i = 0;
  var exec = function(){
    if(i >= fnarr.length){
      onend();
      return;
    }
    $.when((function(){//promiseを返すdefferred
      var d = new $.Deferred();
      fnarr[i](d.resolve, d.reject);
      return d.promise();
    })()).then(exec, onfail);
    i++;
  };
  exec();
};

}).call(Util.prototype);



$(function(){

var U = new Util();

//breakpoint
U.mediaquery([800], function(zone){
  //....
}, function(bp, sizedown){
  $("html").hide();
  location.reload();
});

//sns share link
/*var mysiteurl = "https://www.";
var shareurl  = {
  tw:U.sprintf("//twitter.com/share?url={%}", [mysiteurl]),
  fb:U.sprintf("//www.facebook.com/sharer/sharer.php?u={%}", [mysiteurl]),
  gp:U.sprintf("//plus.google.com/share?url={%}", [mysiteurl])
};*/

//[[sp]]
if(U.narrow){
  //always top
  U.scroll(null, 800, 0, function(){
    var $nv = $("nav.capnavi");
    var $mn = $nv.find("menu");

    //sns share link
    /*$nv.find("div.sns a")
      .eq(0).attr({href:shareurl.tw}).end()
      .eq(1).attr({href:shareurl.fb}).end()
      .eq(2).attr({href:shareurl.gp});*/

    //navibar menu
    $(window).on("scroll.capnavi", function(){
        if($(window).scrollTop() < 20){
          $nv.find("div.above").addClass("appear");
        }else{
          $nv.find("div.above").removeClass("appear");
        }
    });
    $nv.find("div.menuopen label").on("click", function(){
      $mn.css({height:$(window).height()}).addClass("appear");
    });
    $mn.find("ul>li label").on("click", function(ev){
      var idx = $mn.find("ul>li label").index(this);
      var mgn = $nv.find("div.below").height()-($(window).width()*5/100*7);
      if(idx === 0){
        mgn = 1024;
      }
      U.scroll($("section").eq(idx), 1000, mgn);
      $mn.removeClass("appear");
    });
    $mn.find("div.edge label").on("click", function(ev){
      $mn.removeClass("appear");
    });

    //finish
    $("html").animate({opacity:1}, 1000*4, "linear");
  });

//[[pc]]
}else{
  //[[iPad]]
  var MINWIDTH_IPAD = 1260;

  var flg_ipad = false;
  if(U.checkUA("ipad")){
    flg_ipad = true;
    $("head meta").each(function(i, e){
      if($(e).attr("name") === "viewport"){
        $(e).remove();
      }
    });
    $("head").append('<meta name="viewport" content="width=1024" />');
    $("#wrap").css({minWidth:MINWIDTH_IPAD});
  }

  //always top
  $(window).on("load", function(){ U.scroll(null, 200, 0, function(){
    var $nv = $("nav.fixnavi");
    var $mn = $nv.find("menu");

    //sns share link
    /*$nv.find("div.bar.newse div.snsbox a")
      .eq(0).attr({href:shareurl.tw}).end()
      .eq(1).attr({href:shareurl.fb}).end()
      .eq(2).attr({href:shareurl.gp});*/

    //phase color
    var currentphase = 0;
    var lastphase    = 0;
    var edgemargin   = 256;

    $(window).on("scroll.fixnavi", function(){
      var scrl      = $(window).scrollTop();
      var phaseedge = [
        $("section.introarea").offset().top - edgemargin,
        $("section.infoarea").offset().top - edgemargin,
        $("section.gallaryarea").offset().top - edgemargin
      ];

      if(scrl < phaseedge[0]){
        currentphase = 0;
        if(scrl > 40){
          $nv.find("div.bar.newss").addClass("edge");
          $nv.find("div.bar.newsw").addClass("edge");
          $nv.find("div.bar.newse").addClass("edge");
          $nv.find("div.bar.newsn").addClass("edge");
        }else{
          $nv.find("div.bar.newss").removeClass("edge");
          $nv.find("div.bar.newsw").removeClass("edge");
          $nv.find("div.bar.newse").removeClass("edge");
          $nv.find("div.bar.newsn").removeClass("edge");
        }
      }else{
        if(scrl < phaseedge[1]){
          currentphase = 1;
        }else{
          if(scrl < phaseedge[2]){
            currentphase = 2;
          }else{
            currentphase = 3;
            /*if((scrl+$(window).height()) < ($(document).height()-40)){
              $nv.find("div.bar.newss").removeClass("edge");
            }else{
              $nv.find("div.bar.newss").addClass("edge");
            }*/
          }
        }
      }

      if(currentphase < lastphase){
        $("#wrap").attr({my_phase:currentphase})
        $nv.find("div.bar.newsw span.current i").removeClass("next").addClass("prev");
      }else if(lastphase < currentphase){
        $("#wrap").attr({my_phase:currentphase})
        $nv.find("div.bar.newsw span.current i").removeClass("prev").addClass("next");
      }
      lastphase = currentphase;
    });

    //navi bar
    $mn.on("click", function(ev){
      ev.stopPropagation();
    });
    $mn.find("label.xbtn").on("click", function(ev){
      $mn.removeClass("appear");
    });
    $(document).on("click", function(){
      $mn.find("label.xbtn").trigger("click");
    });
    $mn.find("ul>li label").on("click", function(ev){
      var idx = $mn.find("ul>li label").index(this);
      var mgn = -100;
      if(idx === 0){
        mgn = 0;
      }
      U.scroll($("section").eq(idx), 1000, mgn);
      $mn.removeClass("appear");
    });
    $nv.find("label.menuopen").on("click", function(ev){
      ev.stopPropagation();

      $mn.find("ul>li label").removeClass("curr")
        .eq(currentphase).addClass("curr");
      $mn.addClass("appear");
    });
    $nv.find("label.dot").on("click", function(){
      var idx = $("nav.fixnavi div.bar.newsw label.dot").index(this);
      $mn.find("ul>li label").eq(idx).trigger("click");
    });

    //scroll effect
    /*$("section.moviearea div.moviebox").on("myInvade", 1/2, function(){
      ytobj1.playVideo();
    });*/

    //keyvisual
    $(window).on("resize.keyvisual", function(){
      /*var ww = (flg_ipad)?(MINWIDTH_IPAD):($(window).width());
      /*var size = [
        ww-$("nav.fixnavi div.bar.newse").width()-$("nav.fixnavi div.bar.newsw").width(),
        $(window).height()-$("nav.fixnavi div.bar.newsn").height()-$("nav.fixnavi div.bar.newss").height()
      ];
      var size = [ww,$(window).height()];
      var h_max = Math.round(size[0]*700/1200);

      if(h_max < size[1]){
        size[1] = h_max;
      }
      $("section.keyvisualarea div.bg").css({width:size[0], height:size[1]});
    });*/
    var winHeight = $(window).height(), winWidth = $(window).width();
		$('section.keyvisualarea div.bg').css({
			"width": winWidth,
			//"height": winHeight
		});

    /*function mainVisual() {*/
  	var winHeight = $(window).height(),
  		winWidth = (flg_ipad)?(MINWIDTH_IPAD):($(window).width()),
  		element = $('section.keyvisualarea div.bg ul li img.pc-only'),
      element2 = $('section.keyvisualarea div.bg'),
  		pictureHeight = 700,
  		pictureWidth = 1200,
  		percentage = winHeight/pictureHeight,
  		widthImg = percentage * pictureWidth,
  		leftImg_temp = 0,
  		leftImg = 0;

  	if(winWidth > 800) {

  		if(widthImg < winWidth) {
  			var oldw = widthImg;
  			widthImg = winWidth;
  			winHeight += ((widthImg-oldw)/oldw)*winHeight;
  		} else {
  			leftImg_temp = (widthImg-winWidth)/2;
  			if(leftImg_temp > 0) {
  				leftImg = leftImg_temp*-1;
  			}
  		}
  		element.css({
  			"width":widthImg,
  			"left": leftImg,
  			"height":winHeight
  		});
      element2.css({
        //"width":widthImg,
        //"left": leftImg,
        "height":winHeight
      });

  	}else {
  		element.removeAttr('style');
  		}
  	});
    $(window).trigger("resize.keyvisual");

  //keyvisual switching
  autoAddClass();
  function autoAddClass(){
    var next = $("section.keyvisualarea div.bg ul li.active").removeClass("active").next();
    if(next.length){
      $(next).addClass('active');
    }
    else {
      $('section.keyvisualarea div.bg ul li:first-child').addClass('active');
    }
    setTimeout(autoAddClass, 8000);
  };

  //when scrolling, contents appeared
  $(window).on("scroll.fadeoff", function(){
    $(".fade_off").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      } else {
        $(this).removeClass("fade_on");
      }
    });
  });

  //finish
    $("html").animate({opacity:1}, 1000*4, "linear");

  });});
}

}); //end of wrap function
