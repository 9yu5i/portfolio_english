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
      const maxScroll = 500; // 최대 스크롤 값을 기준으로 애니메이션 완료
  
      // 스크롤 비율 계산 (0 ~ 1)
      const progress = Math.min(scrollTop / maxScroll, 1);
  
      $(".container2 .p").css({
        transform: `rotate(${progress * -15}deg)`,
        top: `${progress * 10}px`,
        left: `${progress * -10}px`,
      });
  
      $(".container2 .r").css({
        transform: `rotate(${progress * 20}deg)`,
        top: `${progress * 15}px`,
        right: `${progress * -10}px`,
      });
      
      $(".container2 .o").css({
        transform: `rotate(${progress * 10}deg)`,
        top: `${progress * -20}px`,
      });

      $(".container2 .j").css({
        transform: `rotate(${progress * -25}deg)`,
        top: `${progress * 15}px`,
      });
  
      $(".container2 .e").css({
        transform: `rotate(${progress * 20}deg)`,
        top: `${progress * -5}px`,
      });

      $(".container2 .c").css({
        transform: `rotate(${progress * -10}deg)`,
        top: `${progress * 5}px`,
      });

      $(".container2 .t").css({
        transform: `rotate(${progress * 15}deg)`,
        top: `${progress * -20}px`,
        left: `${progress * 15}px`,
      });

      $(".container2 .s").css({
        transform: `rotate(${progress * -5}deg)`,
        top: `${progress * 10}px`,
      });
    });

     // 초기 탭 활성화 (항상 Tab1이 활성화)
  $("#Tab1").addClass("on"); // Tab1 콘텐츠 활성화
  $(".tabs[data-tab='Tab1']").addClass("on"); // Tab1 버튼 활성화

  // 탭 클릭 이벤트 바인딩
  $(".tabs").on("click", function () {
    const tabName = $(this).data("tab");

    // 모든 탭 및 버튼에서 'on' 클래스 제거
    $(".tab, .tabs").removeClass("on");

    // 클릭한 탭과 관련된 콘텐츠에 'on' 클래스 추가
    $("#" + tabName).addClass("on");
    $(this).addClass("on");
  });

});