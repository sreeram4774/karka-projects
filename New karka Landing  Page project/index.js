                 function initializeSwiper(){
  var swiper1 = new Swiper(".mySwiper1",{
      // slidesPerView: 3, 
      slidesPerView: 'auto', 
      spaceBetween: 10,
      slidesPerGroups: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      autoplay: {
          delay: 1500, 
          disableOnInteraction: false,
      },
      effect: 'slide',
      speed: 1500,
      breakpoints: {
          1024: {
              slidesPerView: 4,
          },
          480:{
              slidesPerView: 3,
          },
          425:{
              slidesPerView: 2,
          },
      }
  });

}


    // var swiper2= new Swiper(".mySwiper2",{
    //     // slidesPerView: 3, 
    //     slidesPerView: 'auto', 
    //     spaceBetween: 10,
    //     slidesPerGroup: 1,
    //     loop: true,
    //     loopFillGroupWithBlank: true,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: ".swiper-button-next",
    //         prevEl: ".swiper-button-prev",
    //     },
    //     autoplay: {
    //         delay: 1500, 
    //         disableOnInteraction: false,
    //     },
    //     effect: 'slide',
    //     speed: 1500,
    //     breakpoints: {
    //         1024: {
    //             slidesPerView: 4,
    //         },
    //         426:{
    //             slidesPerView: 3,
    //         },
    //         425:{
    //             slidesPerView: 2,
    //         },
    //     }
    // });
  
  

  
window.onload=function(){
initializeSwiper();
}
const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-item');
let counter = 0;
const slideWidth = slides[0].clientWidth;

function moveSlide() {
wrapper.style.transform = `translateX(-${slideWidth * counter}px)`;
}

function nextSlide() {
counter++;
if (counter === slides.length) {
  counter = 0;
}
moveSlide();
}

function prevSlide() {
counter--;
if (counter < 0) {
  counter = slides.length - 1;
}
moveSlide();
}

setInterval(nextSlide,4000); 

document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// $(document).ready(function(){
//     var today = new Date();

//     var dayOfWeek = today.getDay();
//     var daysToAdd = 1;
//     if (dayOfWeek >= 0 && dayOfWeek <= 3) {
//         daysToAdd = 8 - dayOfWeek; 
//     } else if (dayOfWeek >= 4 && dayOfWeek <= 6) {
//         daysToAdd = 8 - (dayOfWeek - 7); 
//     }

//     var nextMondayDate = new Date(today);
//     nextMondayDate.setDate(today.getDate() + daysToAdd);

//     var date = nextMondayDate.toLocaleDateString('en-US', { day: '2-digit' });
//     var month = nextMondayDate.toLocaleDateString('en-US', { month: 'long' });

//     $('#date').text(date);
//     $('#month').text(month);
// });