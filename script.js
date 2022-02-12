$(function(){

  let stoper = document.querySelector("img.clock");
  let areaA = document.querySelector(".areaA");
  let areaB = document.querySelector(".areaB");
  let areaC = document.querySelector(".areaC");
  let areaD = document.querySelector(".areaD");
  let areaE = document.querySelector(".areaE");
  let closeLogoEC = document.querySelector(".cleseingLogoEC");
  let closeLogoEW = document.querySelector(".cleseingLogoEW");
  let closeLogoEG = document.querySelector(".cleseingLogoEG");
  let closeLogoES = document.querySelector(".cleseingLogoES");
  let spcesol = document.querySelector('.sesx')
  // let i = 899;

  let menu = $(".menu");
  let hamburger = $(".hamburger");
  let line = $(".line");
  let menuOpen;

  // section right menu

  let lmec = document.querySelector(".menu-item-ec");
  let lmew = document.querySelector(".menu-item-ew");
  let lmeg = document.querySelector(".menu-item-eg");
  let lmes = document.querySelector(".menu-item-es");
  let lmek = document.querySelector(".menu-item-k");

// testing API
// import {seslang} from "./getlang"
// console.log(seslang);

// jj. carousels get different images for mobile and hardtop
// eCurcuma pictures
let ecHardtop = [
  '<img class="hardTop carousel__element" src="./assets/slsec1.png"/>',
  '<img class="hardTop carousel__element" src="./assets/slsec2.png"/>'
]
let ecMobileImgs = [
  '<img class="mobile" src="./assets/SpiceSscreens_eC4-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC5-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC6-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC7-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC8-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC3-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC2-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eC1-01.png"/>'
]

// eWasabi pictures
let ewHardtop = [
  '<img class="hardTop carousel__element" src="./assets/slsew1.png"/>',
  '<img class="hardTop carousel__element" src="./assets/slsew2.png"/>'
]
let ewMobileImgs = [
  '<img class="mobile" src="./assets/SpiceSscreens_eW3-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW4-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW5-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW6-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW7-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW2-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eW1-01.png">'
]

// eGinger pictures
let egHardtop = [
  '<img class="hardTop carousel__element" src="./assets/slseg1.png"/>',
  '<img class="hardTop carousel__element" src="./assets/slseg2.png"/>'
]
let egMobileImgs = [
  '<img class="mobile" src="./assets/SpiceSscreens_eG5-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG6-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG7-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG8-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG4-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG3-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG2-01.png">',
  '<img class="mobile" src="./assets/SpiceSscreens_eG1-01.png">'
]

// eSaffton pictures
let esHardtop = [
  '<img class="hardTop carousel__element" src="./assets/slses1.png"/>',
  '<img class="hardTop carousel__element" src="./assets/slses2.png"/>'
]
let esMobileImgs = [
  '<img class="mobile" src="./assets/SpiceSscreens_eS8-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS4-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS5-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS6-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS7-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS3-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS2-01.png"/>',
  '<img class="mobile" src="./assets/SpiceSscreens_eS1-01.png"/>'
]

if($( window ).width() < 600){
  console.log($( window ).width());

  for (let i = 0; i < esMobileImgs.length; i++) {
    console.log(esMobileImgs[i]);
    $('.carouselc').append(ecMobileImgs[i])
    $('.carouselw').append(ewMobileImgs[i])
    $('.carouselg').append(egMobileImgs[i])
    $('.carousels').append(esMobileImgs[i])
  }
}else{
    for (let j = 0; j < esMobileImgs.length; j++) {
      console.log(esMobileImgs[j]);
      $('.carouselc').append(ecHardtop[j])
      $('.carouselw').append(ewHardtop[j])
      $('.carouselg').append(egHardtop[j])
      $('.carousels').append(esHardtop[j])
    }
}

  // for ( let i = 0; esMobileImgs.length < i ; i++ ){
  //  console.log(esMobileImgs);
  
  // $('.carousels').prepend(esMobileImgs.[i])
// $('.carousels').prepend( esMobileImgs[i] )
// test end =======================================

  // this is click on stopr center section

  areaE.addEventListener('mouseover', function(){
    document.querySelector(".clockArrow").src = "./assets/arrowboldgreen.png";
  })

  areaE.addEventListener('click', function(){
    document.querySelector(".intro").classList.remove("hide");
    document.querySelector(".intro").classList.add("about");
  })

  areaE.addEventListener('mouseleave', function(){
    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
  })

  spcesol.addEventListener('click', function(){
    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
    document.querySelector(".intro").classList.remove("about");
    console.log('zamknij ec');
    document.querySelector(".intro").classList.add("aboutt");
    setTimeout(function() { 
      document.querySelector(".intro").classList.remove("aboutt");
      document.querySelector(".intro").classList.add("hide");
    }, 1001);
  })

  // this is click on one of four buttons section \\
  areaA.addEventListener('click', function(){
    document.querySelector(".productEC").classList.remove("hide");
    document.querySelector(".productEC").classList.add("about");
    $('.carouselc').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>', 
    });
  })
    
  areaB.addEventListener('click', function(){
    document.querySelector(".productEW").classList.remove("hide");
    document.querySelector(".productEW").classList.add("about");
    $('.carouselw').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
  })

  areaC.addEventListener('click', function(){
    // alert("sekcja eGinger jest jeszcze w budowie");
    document.querySelector(".productEG").classList.remove("hide");
    document.querySelector(".productEG").classList.add("about");
    $('.carouselg').slick({
      speed: 1000,
      slidesToShow:1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
  })

  areaD.addEventListener('click', function(){
    // alert("sekcja eSaffon jest jeszcze w budowie");
    document.querySelector(".productES").classList.remove("hide");
    document.querySelector(".productES").classList.add("about");
    $('.carousels').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
    });
  })

  // right nav section and it's repeted uper section
  lmec.addEventListener('click', function(){
    console.log('zamknij ew');
    document.querySelector(".productEW").classList.add("hide");
    document.querySelector(".productEW").classList.remove("about");

    console.log('zamknij eg');
    document.querySelector(".productEG").classList.add("hide");
    document.querySelector(".productEG").classList.remove("about");
    
    console.log('zamknij es');
    document.querySelector(".productES").classList.add("hide");
    document.querySelector(".productES").classList.remove("about");

    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
    document.querySelector(".intro").classList.add("hide");
    document.querySelector(".intro").classList.remove("about");
    
    document.querySelector(".productEC").classList.remove("hide");
    document.querySelector(".productEC").classList.add("about");
    
    $('.carouselc').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  })

  lmew.addEventListener('click', function(){
    console.log('zamknij ec');
    document.querySelector(".productEC").classList.add("hide");
    document.querySelector(".productEC").classList.remove("about");

    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";

    document.querySelector(".intro").classList.add("hide");
    document.querySelector(".intro").classList.remove("about");

    console.log('zamknij eg');
    document.querySelector(".productEG").classList.add("hide");
    document.querySelector(".productEG").classList.remove("about");

    console.log('zamknij es');
    document.querySelector(".productES").classList.add("hide");
    document.querySelector(".productES").classList.remove("about");

  //  alert("sekcja eWasabi jest jeszcze w budowie");
    document.querySelector(".productEW").classList.remove("hide");
    document.querySelector(".productEW").classList.add("about");
    $('.carouselw').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  })

  lmeg.addEventListener('click', function(){
    console.log('zamknij ec');
    document.querySelector(".productEC").classList.add("hide");

    console.log('zamknij ew');
    document.querySelector(".productEW").classList.add("hide");
    document.querySelector(".productEW").classList.remove("about");

    document.querySelector(".productEC").classList.remove("about");
    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";

    console.log('zamknij es');
    document.querySelector(".productES").classList.add("hide");
    document.querySelector(".productES").classList.remove("about");

    document.querySelector(".intro").classList.add("hide");
    document.querySelector(".intro").classList.remove("about");

    document.querySelector(".productEG").classList.remove("hide");
    document.querySelector(".productEG").classList.add("about");
    $('.carouselg').slick({
      speed: 1000,
      slidesToShow:1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  })

  lmes.addEventListener('click', function(){

    console.log('zamknij ec');
    document.querySelector(".productEC").classList.add("hide");

    console.log('zamknij ew');
    document.querySelector(".productEW").classList.add("hide");
    document.querySelector(".productEW").classList.remove("about");

    console.log('zamknij eg');
    document.querySelector(".productEG").classList.add("hide");
    document.querySelector(".productEG").classList.remove("about");

    document.querySelector(".productEC").classList.remove("about");
    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
    document.querySelector(".intro").classList.add("hide");
    document.querySelector(".intro").classList.remove("about");
    // alert("sekcja eSaffon jest jeszcze w budowie");
    document.querySelector(".productES").classList.remove("hide");
    document.querySelector(".productES").classList.add("about");
    $('.carousels').slick({
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  })

  lmek.addEventListener('mouseover', function(){
    document.querySelector(".clockArrow").src = "./assets/arrowboldgreen.png";
  })

  lmek.addEventListener('click', function(){

    console.log('zamknij ec');
    document.querySelector(".productEC").classList.add("hide");

    console.log('zamknij ew');
    document.querySelector(".productEW").classList.add("hide");
    document.querySelector(".productEW").classList.remove("about");

    console.log('zamknij eg');
    document.querySelector(".productEG").classList.add("hide");
    document.querySelector(".productEG").classList.remove("about");

    console.log('zamknij es');
    document.querySelector(".productES").classList.add("hide");
    document.querySelector(".productES").classList.remove("about");

    document.querySelector(".productEC").classList.remove("about");
    document.querySelector(".intro").classList.remove("hide");
    document.querySelector(".intro").classList.add("about");
  })

  lmek.addEventListener('mouseleave', function(){
    document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
  })

  closeLogoEC.addEventListener('click', function(){
    console.log('zamknij ec');
    document.querySelector(".productEC").classList.add("aboutt");
    setTimeout(function() { 
      document.querySelector(".productEC").classList.remove("aboutt");
      document.querySelector(".productEC").classList.add("hide")
    }, 1001);
    document.querySelector(".productEC").classList.remove("about");
  })

  closeLogoEW.addEventListener('click', function(){
    console.log('zamknij ew');
    document.querySelector(".productEW").classList.add("aboutt");
    setTimeout(function() { 
      document.querySelector(".productEW").classList.remove("aboutt");
      document.querySelector(".productEW").classList.add("hide")
    }, 1001);
    document.querySelector(".productEW").classList.remove("about");
  })

  closeLogoEG.addEventListener('click', function(){
    console.log('zamknij eg');
    document.querySelector(".productEG").classList.add("aboutt");
    setTimeout(function() { 
      document.querySelector(".productEG").classList.remove("aboutt");
      document.querySelector(".productEG").classList.add("hide")
    }, 1001);
    document.querySelector(".productEG").classList.remove("about");
  })

  closeLogoES.addEventListener('click', function(){
    console.log('zamknij es');
    document.querySelector(".productES").classList.add("aboutt");
    setTimeout(function() { 
      document.querySelector(".productES").classList.remove("aboutt");
      document.querySelector(".productES").classList.add("hide")
    }, 1001);
    document.querySelector(".productES").classList.remove("about");
  })

  //this is clock buttons service
  areaA.addEventListener("mouseover", funca);
  areaA.addEventListener("mouseleave", funcno);

  areaB.addEventListener("mouseover", funcb);
  areaB.addEventListener("mouseleave", funcno);

  areaC.addEventListener("mouseover", funcc);
  areaC.addEventListener("mouseleave", funcno);

  areaD.addEventListener("mouseover", funcd);
  areaD.addEventListener("mouseleave", funcno);

  function funcno(){  
    console.log('testno');
    stoper.src = "./assets/stoper-01.png";
  }

  function funca(){
    // console.log('testA');
    stoper.src = "./assets/stoper-01-ec.png";
  }
  function funcb(){
    // console.log('testB');
    stoper.src = "./assets/stoper-01-ew.png";
  }
  function funcc(){ 
    // console.log('testC');
    stoper.src = "./assets/stoper-01-eg.png";
  }
  function funcd(){ 
    // console.log('testD');
    stoper.src = "./assets/stoper-01-es.png";
  }

  // this is menu section

  function openMenu(){
    menu.css("right", "0px");
    line.css("background", "#FFF");
    menuOpen = true;
  }

  function closeMenu(){
    menu.css("right", "-320px");
    line.css("background", "#BCAD90");
    menuOpen = false;
  }

  function toggleMenu(){
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  hamburger.on({
    mouseenter: function(){
      openMenu();
    }
  });

  menu.on({
    mouseleave: function(){
      closeMenu();
    }
    
  });

  hamburger.on({
    click: function(){
      toggleMenu();
    }
  })

  // this is ratatin arrow section ------->
  let img = $(".clockArrow");
  let offset = img.offset();
  console.log(offset);

  // $(window).resize(function() {
  //   console.log('wymieram strzałkę na nowo'); 
  //   img = $(".clockArrow");
  //   offset = img.offset();
  //   console.log(offset);
  // })

 //$(window).resize(function() { img = $(".clockArrow"); offset = img.offset();})
  if(img.length > 0){
  setTimeout(function (){$(window).resize(function() { img = $(".clockArrow"); offset = img.offset();})},10)
  function mouse(evt){
    let hideOrNo =[$("#eC").hasClass("hide"), $("#eW").hasClass("hide"), $("#eG").hasClass("hide"), $("#eS").hasClass("hide"), $("#Ses").hasClass("hide")]
    if(hideOrNo.includes(false)){
    }else{
    var center_x = (offset.left) + (img.width()/2);
    var center_y = (offset.top) + (img.height()/2);
    var mouse_x = evt.pageX; 
    var mouse_y = evt.pageY;
    var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
    var degree = (radians * (180 / Math.PI) * -1) + 180; 
    img.css('-moz-transform', 'rotate('+degree+'deg)');
    img.css('-webkit-transform', 'rotate('+degree+'deg)');
    img.css('-o-transform', 'rotate('+degree+'deg)');
    img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
  }
  }
  $(document).mousemove(mouse);


//   var img = $('.clockArrow');
// console.log(img.offset())
// if(img.length > 0){
//     var offset = img.offset();
//     function mouse(evt){
//         var center_x = (offset.left) + (img.width()/2);
//         var center_y = (offset.top) + (img.height()/2);
//         var mouse_x = evt.pageX; var mouse_y = evt.pageY;
//         var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
//         var degree = (radians * (180 / Math.PI) * -1) + 180; 
//         img.css('-moz-transform', 'rotate('+degree+'deg)');
//         img.css('-webkit-transform', 'rotate('+degree+'deg)');
//         img.css('-o-transform', 'rotate('+degree+'deg)');
//         img.css('-ms-transform', 'rotate('+degree+'deg)');
//     }
//     $(document).mousemove(mouse);
// }

  /*! Image Map Resizer (imageMapResizer.min.js ) - v1.0.10 - 2019-04-10
  *  Desc: Resize HTML imageMap to scaled image.
  *  Copyright: (c) 2019 David J. Bradshaw - dave@bradshaw.net
  *  License: MIT
  */
  !function () {
    "use strict";
    function r() {
      function e() {
        var r = { width: u.width / u.naturalWidth, height: u.height / u.naturalHeight },
        a = {
          width: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-left"), 10),
          height: parseInt(window.getComputedStyle(u, null).getPropertyValue("padding-top"), 10)
        };
        i.forEach(function (e, t) {
          var n = 0;
          o[t].coords = e.split(",").map(function (e) {
              var t = 1 == (n = 1 - n) ? "width" : "height";
              return a[t] + Math.floor(Number(e) * r[t])
          }).join(",")
        })
      }
      function t(e) {
          return e.coords.replace(/ *, */g, ",").replace(/ +/g, ",")
      }
      function n() {
          clearTimeout(d), d = setTimeout(e, 250)
      }
      function r(e) {
        return document.querySelector('img[usemap="' + e + '"]')
      }
      var a = this,
      o = null,
      i = null,
      u = null,
      d = null;
      "function" != typeof a._resize ? (o = a.getElementsByTagName("area"),
      i = Array.prototype.map.call(o, t),
      u = r("#" + a.name) || r(a.name),
      a._resize = e,
      u.addEventListener("load", e, !1),
      window.addEventListener("focus", e, !1),
      window.addEventListener("resize", n, !1),
      window.addEventListener("readystatechange", e, !1),
      document.addEventListener("fullscreenchange", e, !1),
      u.width === u.naturalWidth && u.height === u.naturalHeight || e()) : a._resize()
      }

      function e() {
        function t(e) {
          e && (!function (e) {
            if (!e.tagName) throw new TypeError("Object is not a valid DOM element");
            if ("MAP" !== e.tagName.toUpperCase()) throw new TypeError("Expected <MAP> tag, found <" + e.tagName + ">.")
          }(e), r.call(e), n.push(e))
        }
        var n;
        return function (e) {
          switch (n = [], typeof e) {
            case "undefined": case "string": Array.prototype.forEach.call(document.querySelectorAll(e || "map"), t);
              break; case "object": t(e);
              break;
            default: throw new TypeError("Unexpected data type (" + typeof e + ").")
          }return n
        }
      }
      "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : window.imageMapResize = e(), "jQuery" in window && (window.jQuery.fn.imageMapResize = function () {
          return this.filter("map").each(r).end()
      })
  }();
  //# sourceMappingURL=imageMapResizer.map
  $('map').imageMapResize();
  }
)