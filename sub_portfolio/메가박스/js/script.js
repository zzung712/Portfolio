var swiper = new Swiper(".mySwiper", {
       loop:true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
       on:{slideChangeTransitionStart:function(){
        $(".swiper-slide.swiper-slide-active .slide_1").css({"transform":"translateY(0px)","transition":"all 2s","opacity":"1"});
        $(".swiper-slide.swiper-slide-active .slide_2").css({"transform":"translateX(0px)","transition":"all 2s","opacity":"1"});
       },//slideChangeTransitionStart:function end
           slideChange:function(){
            $(".swiper-slide .slide_1").css({"transform":"translateY(100px)","transition":"all 2s","opacity":"0"});
            $(".swiper-slide .slide_2").css({"transform":"translateX(100px)","transition":"all 2s","opacity":"0"});
           }
          }//on end
      });