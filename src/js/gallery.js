


const track = document.querySelector('.gallery-track');

let autoScroll = setInterval(() => {
  track.scrollBy({
    left: track.offsetWidth,
    behavior: 'smooth',
  });
}, 3000);

// pause on hover
track.addEventListener('mouseenter', () => clearInterval(autoScroll));
track.addEventListener('mouseleave', () => {
  autoScroll = setInterval(() => {
    track.scrollBy({
      left: track.offsetWidth,
      behavior: 'smooth',
    });
  }, 3000);
});

