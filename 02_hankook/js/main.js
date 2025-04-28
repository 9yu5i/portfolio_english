$(document).ready(function(){
  // AOS 초기화
  AOS.init();

  // 로딩 화면 페이드아웃
  window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.opacity = '0';
    loadingScreen.addEventListener('transitionend', function() {
      loadingScreen.style.display = 'none';
    });
  });

  // 비디오 확대 기능 설정
  const baseWidth = 440;       // 초기 너비(px)
  const scrollFactor = 2.0;    // 스크롤당 확대 속도 조절
  const leftOffset = 112;       // CSS 상 left: 98px
  const rightMargin = 87;      // 오른쪽 여백 87px 유지

  // 스크롤 시 비디오 너비 조정
  $(window).on('scroll', function() {
    const scrollY = window.scrollY;
    const maxWidth = window.innerWidth - leftOffset - rightMargin;
    let newWidth = baseWidth + scrollY * scrollFactor;
    newWidth = Math.min(Math.max(newWidth, baseWidth), maxWidth);
    $('.video').css('width', newWidth + 'px');

    // 배경 위치 이동 (옵션)
    $('.background').css('transform', 'translateY(' + (scrollY * 0.5) + 'px)');
  });

  // 화면 크기 변경 시 비디오 너비 재조정
  $(window).on('resize', function() {
    const maxWidth = window.innerWidth - leftOffset - rightMargin;
    const $video = $('.video');
    const currentWidth = parseFloat($video.css('width'));
    if (currentWidth > maxWidth) {
      $video.css('width', maxWidth + 'px');
    }
  });

  // GSAP ScrollTrigger 설정
  gsap.utils.toArray(".item").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%",
      end: "bottom 50%",
      markers: true,
      onEnter: () => gsap.to("body", { backgroundColor: color, duration: 1.4 }),
      onEnterBack: () => gsap.to("body", { backgroundColor: color, duration: 1.4 })
    });
  });
});
