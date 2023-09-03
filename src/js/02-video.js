
import Player from '@vimeo/player';
import throttle from 'throttle';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer);

player.ready().then(() => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(parseFloat(savedTime));
  }
  player.on('play', data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  });
  player.on(
    'timeupdate',
    throttle(data => {
      localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000)
  );
});


