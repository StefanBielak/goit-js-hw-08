
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
    const vimeoPlayer = document.getElementById("vimeo-player");
    const savedTime = localStorage.getItem("vimeoPlaybackTime");
    const savePlaybackTimeThrottled = _.throttle((currentTime) => {
      localStorage.setItem("vimeoPlaybackTime", currentTime.toString());
    }, 1000);
    if (savedTime !== null) {
      vimeoPlayer.addEventListener("load", () => {
        vimeoPlayer.contentWindow.postMessage(
          {
            method: "setCurrentTime",
            value: parseFloat(savedTime),
          },
          "https://player.vimeo.com"
        );
      });
    }
    vimeoPlayer.addEventListener("timeupdate", () => {
      const currentTime = vimeoPlayer.contentWindow.document.querySelector(
        "video"
      ).currentTime;
      localStorage.setItem("vimeoPlaybackTime", currentTime.toString());
    });
    function playFromSavedTime() {
      const savedTime = localStorage.getItem("vimeoPlaybackTime");
      if (savedTime !== null) {
        vimeoPlayer.contentWindow.postMessage(
          {
            method: "setCurrentTime",
            value: parseFloat(savedTime),
          },
          "https://player.vimeo.com"
        );
        vimeoPlayer.contentWindow.postMessage(
          {
            method: "play",
          },
          "https://player.vimeo.com"
        );
      }
    }
    window.onload = playFromSavedTime;


