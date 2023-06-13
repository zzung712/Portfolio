//메뉴 클릭시 밑줄
const home = document.querySelector('a[href="#Index"]');
const about = document.querySelector('a[href="#Introduce"]');
const skill = document.querySelector('a[href="#Skill"]');
const portfolio = document.querySelector('a[href="#Portfolio"]');
const homeBefore = document.querySelector('li:nth-child(1) > a::before');
const aboutBefore = document.querySelector('li:nth-child(2) > a::before');
const skillBefore = document.querySelector('li:nth-child(3) > a::before');
const portfolioBefore = document.querySelector('li:nth-child(4) > a::before');

// home 클릭 시 이벤트 핸들러
home.addEventListener('click', () => {
  homeBefore.style.width = '100%';
  aboutBefore.style.width = '0';
  skillBefore.style.width = '0';
  portfolioBefore.style.width = '0';
});
// about 클릭 시 이벤트 핸들러
about.addEventListener('click', () => {
  homeBefore.style.width = '0';
  aboutBefore.style.width = '100%';
  skillBefore.style.width = '0';
  portfolioBefore.style.width = '0';
});
// skill 클릭 시 이벤트 핸들러
about.addEventListener('click', () => {
  homeBefore.style.width = '0';
  aboutBefore.style.width = '0';
  skillBefore.style.width = '100%';
  portfolioBefore.style.width = '0';
});
// portfolio 클릭 시 이벤트 핸들러
about.addEventListener('click', () => {
  homeBefore.style.width = '0';
  aboutBefore.style.width = '0';
  skillBefore.style.width = '0';
  portfolioBefore.style.width = '100%';
});

//메뉴 클릭시 부드럽게 스크롤
function Scroll(target) {
 const Target = document.querySelector(target);
 window.scrollTo({
   top: Target.offsetTop,
   behavior: 'smooth'
 });
}

const TargetID = document.querySelectorAll('a[href^="#"]');
TargetID.forEach(link => {
 link.addEventListener('click', function(e) {
   e.preventDefault();
   const href = this.getAttribute('href');
   Scroll(href);
 });
});

// 스크롤이 스킬에 오면 차트 실행
$(window).on('scroll', function() {
  const orderWrap = $('.order_wrap').offset().top;
  const windowHeight = $(window).height();
  const windowScroll = $(window).scrollTop();

  if (windowScroll + windowHeight >= orderWrap) {
    graph();
    $(window).off('scroll');
  }
});

function graph() {
  chart(110, '.chart1', '#ffd154');
  chart(90, '.chart2', '#ffd154');
  chart(80, '.chart3', '#ffd154');
}

function chart(max, className, colorName) {
  let i = 1;
  const func1 = setInterval(function() {
    if (i < max) {
      color1(i, className, colorName);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}

function color1(i, className, colorName) {
  $(className).css({
    'background': 'conic-gradient(' + colorName + ' 0% ' + i + '%, #ffffff ' + i + '% 100%)'
  });
}
