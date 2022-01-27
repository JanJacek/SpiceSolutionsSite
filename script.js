$(function(){
var img = $(".clockArrow");
let stoper = document.querySelector("img.clock");
let areaA = document.querySelector(".areaA");
let areaB = document.querySelector(".areaB");
let areaC = document.querySelector(".areaC");
let areaD = document.querySelector(".areaD");
let areaE = document.querySelector(".areaE");
let closeLogo = document.querySelector(".cleseingLogo");
let spcesol = document.querySelector('h1')
let i = 899;

let menu = $(".menu");
let hamburger = $(".hamburger");
let line = $(".line");
let menuOpen;

// this is what mouseover on center of the clock does section 
areaE.addEventListener('mouseover', function(){
  console.log("zwycięstwo");
  document.querySelector(".clockArrow").src = "./assets/arrowboldgreen.png";
})
areaE.addEventListener('click', function(){
  console.log("zwycięstwo");
  document.querySelector(".intro").classList.remove("hide");
  document.querySelector(".intro").classList.add("about");
})
areaE.addEventListener('mouseleave', function(){
  console.log("zwycięstwo 2");
  document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
})
spcesol.addEventListener('click', function(){
  console.log("zwycięstwo 2");
  document.querySelector(".clockArrow").src = "./assets/stoper-01-arrow.png";
  document.querySelector(".intro").classList.add("hide");
  document.querySelector(".intro").classList.remove("about");
})
// this is click on stoper buton section 
areaA.addEventListener('click', function(){
  console.log("zwycięstwo");
  document.querySelector(".product").classList.remove("hide");
  document.querySelector(".product").classList.add("about");
  $('.carousel').slick({
    speed: 1000,
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
  
})
areaB.addEventListener('click', function(){
  console.log("zwycięstwo");
  document.querySelector(".product").classList.remove("hide");
  document.querySelector(".product").classList.add("about");
})
areaC.addEventListener('click', function(){
  console.log("zwycięstwo");
  document.querySelector(".product").classList.remove("hide");
  document.querySelector(".product").classList.add("about");
})
areaD.addEventListener('click', function(){
  console.log("zwycięstwo");
  document.querySelector(".product").classList.remove("hide");
  document.querySelector(".product").classList.add("about");
})
closeLogo.addEventListener('click', function(){
  console.log("zwycięstwo 2");
  document.querySelector(".product").classList.add("hide");
  document.querySelector(".product").classList.remove("about");
})

// make clock responsive the clock section ------->
window.onload = function(){
  console.log($(window).width());
  console.log( i );
  if($(window).width()-10 < 900){
    i=$(window).width()-10;
  }
  $('#apDiv1').css("width", `${i}px`);
  $('#apDiv2').css("width", `${i}px`);
  $('#apDiv3').css("width", `${i}px`);
}

window.onresize = function(){
  if($(window).width()-10 < 900){
    i=$(window).width()-10;
  }
  console.log($(window).width());
  console.log( i );
  $('#apDiv1').css("width", `${i}px`);
  $('#apDiv2').css("width", `${i}px`);
  $('#apDiv3').css("width", `${i}px`);
}

//this is clock buttons service ------------>
areaA.addEventListener("mouseover", funca);
areaA.addEventListener("mouseleave", funcno);
areaA.addEventListener("click", eCarticle);

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
  console.log('testA');
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
// this is function for provide to product section pobalby to delate again site dont response when delated -------->
function eCarticle(){
  console.log('jest klik na eC');
  $('.stoper').addClass('vanish');
  function addHideClass(){
    $('.stoper').addClass('hide');
    $('.eCurcuma').addClass('appear');
    $('.eCurcuma').removeClass("hide");
  };
  window.setTimeout(addHideClass, 1100);
}

// this is menu section -------->

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

// this is carousele section -------->
// $('.carousel').slick({
//   arrows:true,
//   speed:1000,
//   prevArrow: '<button class="slide-arrow prev-arrow"></button>',
//   nextArrow: '<button class="slide-arrow next-arrow"></button>'
// });


// this is ratatin arrow section ------->
var offset = img.offset();
function mouse(evt){
  var center_x = (offset.left) + (img.width()/2);
  var center_y = (offset.top) + (img.height()/2);
  var mouse_x = evt.pageX; var mouse_y = evt.pageY;
  var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
  var degree = (radians * (180 / Math.PI) * -1) + 180; 
  img.css('-moz-transform', 'rotate('+degree+'deg)');
  img.css('-webkit-transform', 'rotate('+degree+'deg)');
  img.css('-o-transform', 'rotate('+degree+'deg)');
  img.css('-ms-transform', 'rotate('+degree+'deg)');
}
$(document).mousemove(mouse);

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
})