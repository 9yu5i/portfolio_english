$(document).ready(function() {

    // Music play/pause
    $(".play").click(function(){
        $(".pause").show();
        $(".play").hide();
        $(".bar").css("animation-play-state", "paused");
    });

    $(".pause").click(function(){
        $(".play").show();
        $(".pause").hide();
        $(".bar").css("animation-play-state", "running");
    });
  
     // 초기 설정: 첫 번째 탭과 내용만 표시, 나머지는 숨기기
     $(".aboutus-img li").hide();
     $(".aboutus-img li").eq(0).show(); // 첫 번째 내용만 보이게 설정
     $(".aboutus-tap-btn li").eq(0).addClass("active").css("opacity", "1"); // 첫 번째 탭 활성화 및 opacity: 1
     $(".aboutus-tap-btn li").not(":eq(0)").css("opacity", "0.26"); // 나머지 탭은 opacity: 0.26
 
     // 클릭 이벤트 핸들러
     $(".aboutus-tap-btn li").click(function() {
         // 탭 활성화 효과
         $(this).addClass("active").siblings().removeClass("active");
 
         // 탭 버튼 opacity 변경
         $(".aboutus-tap-btn li").css("opacity", "0.26"); // 모든 탭 opacity를 0.26으로 설정
         $(this).css("opacity", "1"); // 클릭된 탭은 opacity를 1로 설정
 
         // 탭에 맞는 내용 표시
         var indexNum = $(this).index(); // 클릭된 탭의 인덱스 가져오기
         $(".aboutus-img li").eq(indexNum).fadeIn().siblings().hide(); // 해당 내용 보이기
     });
    
    // Swiper carousel
    var swiper = new Swiper(".my-carousel__swiper", {
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        centeredSlidesBounds: true,
        navigation: {
            nextEl: ".my-carousel__control--next",
            prevEl: ".my-carousel__control--prev"
        },
        slidesPerView: 3,
        effect: "creative",
        creativeEffect: {
            perspective: true,
            limitProgress: 3,
            prev: {
                translate: ["-90%", "20%", -100],
                rotate: [0, 0, -20],
                origin: "bottom"
            },
            next: {
                translate: ["90%", "20%", -100],
                rotate: [0, 0, 20],
                origin: "bottom"
            }
        }
    });

    // Vertical banner function
    function verticalBanner($wrap, $list) {
        let wrapHeight;
        let listHeight;

        // 배너 리스트 복제 후 추가
        let $clone = $list.clone();
        $wrap.append($clone);

        function animateBanner() {
            // 배너 애니메이션 초기화
            if (wrapHeight != '') {
                $wrap.find('.list').css({ 'animation': 'none' });
                $wrap.find('.list').slice(2).remove();
            }

            // 배너 컨테이너와 리스트 아이템의 현재 높이 가져오기
            wrapHeight = $wrap.innerHeight();
            listHeight = $list.innerHeight();

            // 배너 속도 조절 부분
            const speed = $list.find('li').innerHeight() / 8;

            // 무한 반복을 위한 리스트 복제
            if (listHeight < wrapHeight) {
                const listCount = Math.ceil(wrapHeight * 2 / listHeight);
                for (let i = 2; i < listCount; i++) {
                    $clone = $clone.clone();
                    $wrap.append($clone);
                }
            }

            // 수직 롤링 애니메이션 적용
            $wrap.find('.list').css({
                'animation': `${listHeight / speed}s linear infinite verticalRolling`
            });
        }

        // 초기 배너 설정
        animateBanner();

        // 마우스 이벤트 처리: 배너 롤링 일시 정지 및 재생
        $wrap.on({
            mouseenter: function() {
                $wrap.find('.list').css('animation-play-state', 'paused');
            },
            mouseleave: function() {
                $wrap.find('.list').css('animation-play-state', 'running');
            }
        });

        // 창 크기에 따른 반응형 처리
        $(window).on('resize', function() {
            animateBanner(); // 창 크기 변경 시 배너 롤링 재설정
        });
    }

    // 각 배너에 대해 verticalBanner 함수 적용
    const $wrap1 = $('.vertical_banner');
    const $list1 = $('.vertical_banner .list');
    verticalBanner($wrap1, $list1);

    const $wrap2 = $('.vertical_banner2');
    const $list2 = $('.vertical_banner2 .list');
    verticalBanner($wrap2, $list2);

    const $wrap3 = $('.vertical_banner3');
    const $list3 = $('.vertical_banner3 .list');
    verticalBanner($wrap3, $list3);

    //slogan mouse
    var cursor = document.querySelector('.blob');
var sloganSection = document.getElementById('slogan');

// 처음에는 .blob 요소를 숨깁니다.
cursor.style.display = 'none';

document.addEventListener('mousemove', function(e) {
  var rect = sloganSection.getBoundingClientRect();
  var x = e.clientX;
  var y = e.clientY;

  // 마우스가 #slogan 섹션 안에 있는지 확인
  if (
    x >= rect.left && 
    x <= rect.right && 
    y >= rect.top && 
    y <= rect.bottom
  ) {
    // .blob 요소를 보이게 하고 위치를 설정합니다.
    cursor.style.display = 'flex'; // 또는 'block'을 사용할 수 있습니다.
    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
  } else {
    // #slogan 밖으로 나가면 .blob 요소를 숨깁니다.
    cursor.style.display = 'none';
  }
});

   // Tab functionality
   $(".tab-buttons li").click(function() {
    var index = $(this).index();

    // Remove active class from all buttons and tab contents
    $(".tab-buttons li").removeClass("active");
    $(".tab-item").removeClass("active");

    // Add active class to the clicked button and corresponding tab content
    $(this).addClass("active");
    $(".tab-item").eq(index).addClass("active");
});


/*------------------------------
SupahScroll
------------------------------*/
class SupahScroll {
    constructor(options) {
      this.opt = options || {};
      this.el = this.opt.el ? this.opt.el : ".supah-scroll";
      this.speed = this.opt.speed ? this.opt.speed : 0.1;
      this.init();
    }
  
    init() {
      this.scrollY = 0;
      this.supahScroll = document.querySelectorAll(this.el)[0];
      this.supahScroll.classList.add("supah-scroll");
      this.events();
      this.update();
      this.animate();
    }
  
    update() {
      if (this.supahScroll === null) return;
      document.body.style.height = `${
        this.supahScroll.getBoundingClientRect().height
      }px`;
    }
  
    pause() {
      document.body.style.overflow = "hidden";
      cancelAnimationFrame(this.raf);
    }
  
    play() {
      document.body.style.overflow = "inherit";
      this.raf = requestAnimationFrame(this.animate.bind(this));
    }
  
    destroy() {
      this.supahScroll.classList.remove("supah-scroll");
      this.supahScroll.style.transform = "none";
      document.body.style.overflow = "inherit";
      window.removeEventListener("resize", this.update);
      cancelAnimationFrame(this.raf);
      delete this.supahScroll;
    }
  
    animate() {
      this.scrollY += (window.scrollY - this.scrollY) * this.speed;
      this.supahScroll.style.transform = `translate3d(0,${-this.scrollY}px,0)`;
      this.raf = requestAnimationFrame(this.animate.bind(this));
    }
  
    scrollTo(y) {
      window.scrollTo(0, y);
    }
  
    staticScrollTo(y) {
      cancelAnimationFrame(this.raf);
      this.scrollY = y;
      window.scrollTo(0, y);
      this.supahScroll.style.transform = `translate3d(0,${-y}px,0)`;
      this.play();
    }
  
    events() {
      window.addEventListener("load", this.update.bind(this));
      window.addEventListener("resize", this.update.bind(this));
    }
  }
  
  /*------------------------------
  Initialize
  ------------------------------*/
  const supahscroll = new SupahScroll({
    el: "wrap",
    speed: 0.1
  });

  
  !(function (e, n) {
    "function" == typeof define && define.amd
      ? define(["ScrollMagic", "TweenMax", "TimelineMax"], n)
      : "object" == typeof exports
      ? (require("gsap"), n(require("scrollmagic"), TweenMax, TimelineMax))
      : n(
          e.ScrollMagic || (e.jQuery && e.jQuery.ScrollMagic),
          e.TweenMax || e.TweenLite,
          e.TimelineMax || e.TimelineLite
        );
  })(this, function (e, n, o) {
    "use strict";
    var t = window.console || {},
      r = Function.prototype.bind.call(t.error || t.log || function () {}, t);
    e ||
      r(
        "(animation.gsap) -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs."
      ),
      n ||
        r(
          "(animation.gsap) -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs."
        ),
      e.Scene.addOption("tweenChanges", !1, function (e) {
        return !!e;
      }),
      e.Scene.extend(function () {
        var e,
          t = this,
          r = function () {
            t._log &&
              (Array.prototype.splice.call(
                arguments,
                1,
                0,
                "(animation.gsap)",
                "->"
              ),
              t._log.apply(this, arguments));
          };
        t.on("progress.plugin_gsap", function () {
          i();
        }),
          t.on("destroy.plugin_gsap", function (e) {
            t.removeTween(e.reset);
          });
        var i = function () {
          if (e) {
            var n = t.progress(),
              o = t.state();
            e.repeat && -1 === e.repeat()
              ? "DURING" === o && e.paused()
                ? e.play()
                : "DURING" === o || e.paused() || e.pause()
              : n != e.progress() &&
                (0 === t.duration()
                  ? n > 0
                    ? e.play()
                    : e.reverse()
                  : t.tweenChanges() && e.tweenTo
                  ? e.tweenTo(n * e.duration())
                  : e.progress(n).pause());
          }
        };
        (t.setTween = function (a, s, l) {
          var c;
          arguments.length > 1 &&
            (arguments.length < 3 && ((l = s), (s = 1)), (a = n.to(a, s, l)));
          try {
            (c = o ? new o({ smoothChildTiming: !0 }).add(a) : a).pause();
          } catch (e) {
            return (
              r(
                1,
                "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject"
              ),
              t
            );
          }
          if (
            (e && t.removeTween(),
            (e = c),
            a.repeat && -1 === a.repeat() && (e.repeat(-1), e.yoyo(a.yoyo())),
            t.tweenChanges() &&
              !e.tweenTo &&
              r(
                2,
                "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic."
              ),
            e && t.controller() && t.triggerElement() && t.loglevel() >= 2)
          ) {
            var u = n.getTweensOf(t.triggerElement()),
              p = t.controller().info("vertical");
            u.forEach(function (e, n) {
              var o = e.vars.css || e.vars;
              if (
                p
                  ? void 0 !== o.top || void 0 !== o.bottom
                  : void 0 !== o.left || void 0 !== o.right
              )
                return (
                  r(
                    2,
                    "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!"
                  ),
                  !1
                );
            });
          }
          if (parseFloat(TweenLite.version) >= 1.14)
            for (
              var g,
                d,
                f = e.getChildren ? e.getChildren(!0, !0, !1) : [e],
                w = function () {
                  r(
                    2,
                    "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another"
                  );
                },
                h = 0;
              h < f.length;
              h++
            )
              (g = f[h]),
                d !== w &&
                  ((d = g.vars.onOverwrite),
                  (g.vars.onOverwrite = function () {
                    d && d.apply(this, arguments), w.apply(this, arguments);
                  }));
          return r(3, "added tween"), i(), t;
        }),
          (t.removeTween = function (n) {
            return (
              e &&
                (n && e.progress(0).pause(),
                e.kill(),
                (e = void 0),
                r(3, "removed tween (reset: " + (n ? "true" : "false") + ")")),
              t
            );
          });
      });
  });
  
  var html = document.documentElement;
  var body = document.body;
  
  var scroller = {
    target: document.querySelector(".scroll-container"),
    ease: 0.09, // <= scroll speed
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0
  };
  
  var requestId = null;
  
  TweenLite.set(scroller.target, {
    rotation: 0.01,
    force3D: true
  });
  
  window.addEventListener("load", onLoad);
  
  function onLoad() {
    updateScroller();
    window.focus();
    window.addEventListener("resize", onResize);
    document.addEventListener("scroll", onScroll);
  }
  
  function updateScroller() {
    var resized = scroller.resizeRequest > 0;
  
    if (resized) {
      var height = scroller.target.clientHeight;
      body.style.height = height + "px";
      scroller.resizeRequest = 0;
    }
  
    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;
  
    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;
  
    if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }
  
    TweenLite.set(scroller.target, {
      y: -scroller.y
    });
  
    requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }
  
  function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }
  
  function onResize() {
    scroller.resizeRequest++;
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller);
    }
  }
  
  const controller = new ScrollMagic.Controller();
  
  var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]);
    }
  };
  
  var myNodeList = document.querySelectorAll(".img-loader");
  
  forEach(myNodeList, function (index, value) {
    const tween = TweenMax.to(value, 2, {
      borderTopLeftRadius: "100%",
      borderTopRightRadius: "100%",
      delay: 0.3,
      height: 0,
      ease: Power2.easeOut
    });
  
    const itemScene = new ScrollMagic.Scene({
      triggerElement: value,
      triggerHook: 0.6,
      reverse: false
    })
      .setTween(tween)
      .addTo(controller);
  });
  

});
