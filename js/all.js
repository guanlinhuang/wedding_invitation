// 字體滑入
anime.timeline({ loop: true })
  .add({
    targets: '.cover p',
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: '.cover',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// 下滑動態
const toBottom1 = document.querySelector('.to-bottom1');
const toBottom2 = document.querySelector('.to-bottom2');
const toBottom3 = document.querySelector('.to-bottom3');
const toTop = document.querySelector('.to-top');

toBottom1.addEventListener('click', function () {
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  });
})
toBottom2.addEventListener('click', function () {
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  });
})
toBottom3.addEventListener('click', function () {
  window.scrollTo({
    top: 2000,
    behavior: 'smooth'
  });
})