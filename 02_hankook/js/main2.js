$(document).ready(function(){


  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Get the scroll position
    const video = document.querySelector('.video'); // Get the video element
    const maxScroll = 1000; // Maximum scroll value
    
    // Calculate scroll ratio
    const scale = Math.min(scrollY / maxScroll, 1); // Scale factor (max 1)
    const width = 440 + (1750 * scale); // Adjust width based on scroll
    const height = width * (220 / 440); // Maintain aspect ratio
    
  
    // Apply the resized dimensions to the video
    video.style.width = `${width}px`;
    video.style.height = `${height}px`;
  
    // Move the background based on scroll
    const background = document.querySelector('.background');
    background.style.transform = `translateY(${scrollY * 0.5}px)`; // Adjust background movement speed
  });


const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1.2,
  spaceBetween: 0,
  freeMode: true,
  mousewheel: true,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

$(".slide li").hide();
  $(".slide li").first().fadeIn();

  var now = 0;

  setInterval(function(){

    var next = (now + 1) % 3;
    $(".slide li").eq(now).fadeOut();
    $(".slide li").eq(next).fadeIn();
    now = next
  }, 3000);






});