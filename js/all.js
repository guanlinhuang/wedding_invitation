anime.timeline({loop: true})
  .add({
    targets: '.cover p',
    scale: [14,1],
    opacity: [0,1],
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