
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
    
        $(".container2 .a").css({
          transform: `rotate(${progress * 20}deg)`,
          top: `${progress * -15}px`,
          left: `${progress * -15}px`,
        });
    
        $(".container2 .b").css({
          transform: `rotate(${progress * -10}deg)`,
          top: `${progress * 25}px`,
          left: `${progress * -10}px`,
        });
        
        $(".container2 .o").css({
          transform: `rotate(${progress * 10}deg)`,
          top: `${progress * -20}px`,
        });

        $(".container2 .u").css({
          transform: `rotate(${progress * -5}deg)`,
          top: `${progress * 20}px`,
        });
    
        $(".container2 .t").css({
          transform: `rotate(${progress * 15}deg)`,
          top: `${progress * -20}px`,
          left: `${progress * 15}px`,
        });
      });
    
    
  
      var topButton = document.getElementById("toTop");

      // 사용자가 스크롤할 때 실행되는 함수
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              topButton.style.opacity = "1"; // 스크롤 위치가 20px 이상일 때 버튼 표시
          } else {
              topButton.style.opacity = "0"; // 그 외에는 버튼 숨김
          }
      }
      
      // 버튼 클릭 시 페이지 맨 위로 스무스하게 이동하는 함수
      topButton.onclick = function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
});