$(document).ready(function(){

  
  AOS.init();

  window.onload = () => {
    document.body.classList.add('loaded'); // 페이지 로드 후 'loaded' 클래스 추가
  };

  
  
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
  
      // 스크롤에 따라 이미지 위치 조정
      $(".aboutimg .mr").css("transform", `translateY(${-scrollTop * 0.2}px)`);
      $(".aboutimg .que").css("transform", `translateY(${-scrollTop * 0.4}px)`);
      $(".aboutimg .cn").css("transform", `translateY(${-scrollTop * 0.3}px)`);
    });
  

    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();
      const maxScroll = 200; // 최대 스크롤 값을 기준으로 애니메이션 완료
  
      // 스크롤 비율 계산 (0 ~ 1)
      const progress = Math.min(scrollTop / maxScroll, 1);
  
      $(".container2 .cc").css({
        transform: `rotate(${progress * -30}deg)`,
        top: `${progress * -10}px`,
      });
  
      $(".container2 .oo").css({
        transform: `rotate(${progress * -10}deg)`,
        top: `${progress * 15}px`,
        left: `${progress * 13}px`,
      });
      
      $(".container2 .nn").css({
        transform: `rotate(${progress * 5}deg)`,
        top: `${progress * -20}px`,
        left: `${progress * 13}px`,

      });

      $(".container2 .tt").css({
        transform: `rotate(${progress * 5}deg)`,
        top: `${progress * 20}px`,
        left: `${progress * 15}px`,
      });
  
      $(".container2 .aa").css({
        transform: `rotate(${progress * -25}deg)`,
        top: `${progress * -20}px`,
        left: `${progress * 13}px`,
      });

      $(".container2 .ccc").css({
        transform: `rotate(${progress * 30}deg)`,
        top: `${progress * 20}px`,
        left: `${progress * 20}px`,
      });

      $(".container2 .ttt").css({
        transform: `rotate(${progress * -10}deg)`,
        top: `${progress * -20}px`,
        left: `${progress * 13}px`,
      });

  
    });

    
    

});