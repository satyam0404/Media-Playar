// Play both media together
function playBoth() {
  const video = document.getElementById('videoPlayer');
  const audio = document.getElementById('audioPlayer');
  video.play();
  audio.play();
}

// Handle video file upload
document.getElementById('videoInput').addEventListener('change', function () {
  const file = this.files[0];
  const videoPlayer = document.getElementById('videoPlayer');
  if (file) {
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
    videoPlayer.load();
  }
});

// Handle audio file upload
document.getElementById('audioInput').addEventListener('change', function () {
  const file = this.files[0];
  const audioPlayer = document.getElementById('audioPlayer');
  if (file) {
    const url = URL.createObjectURL(file);
    audioPlayer.src = url;
    audioPlayer.load();
  }
});

// Remove video
function removeVideo() {
  const videoInput = document.getElementById('videoInput');
  const videoPlayer = document.getElementById('videoPlayer');
  videoInput.value = '';
  videoPlayer.pause();
  videoPlayer.removeAttribute('src');
  videoPlayer.load();
}

// Remove audio
function removeAudio() {
  const audioInput = document.getElementById('audioInput');
  const audioPlayer = document.getElementById('audioPlayer');
  audioInput.value = '';
  audioPlayer.pause();
  audioPlayer.removeAttribute('src');
  audioPlayer.load();
}
