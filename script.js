let player;
let volume = 50;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: '',
    playerVars: {
      controls: 0,
      modestbranding: 1
    }
  });
}

function extractVideoId(url) {
  const regExp = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

function loadVideo() {
  const url = document.getElementById('urlInput').value;
  const videoId = extractVideoId(url);
  if (!videoId) {
    alert('URL no válida');
    return;
  }
  player.loadVideoById(videoId);
  player.setVolume(volume);
}

function play() {
  player.playVideo();
}

function pause() {
  player.pauseVideo();
}

function stop() {
  player.stopVideo();
}

function seek(seconds) {
  const current = player.getCurrentTime();
  player.seekTo(current + seconds, true);
}

function setVolume(value) {
  volume = value;
  player.setVolume(volume);
}
