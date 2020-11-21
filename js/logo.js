var textWrapper = document.querySelector('#logo2 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '#logo2 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 100 * i
  }).add({
    targets: '#logo2',
    opacity: 0,
    duration: 1500,
    easing: "easeOutExpo",
    delay: 1000
  });

 