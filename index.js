// const audio = document.getElementById('audioPlayer');
// const playPauseBtn = document.getElementById('playPauseBtn');

// playPauseBtn.addEventListener('click', function () {
//   if (audio.paused) {
//     audio.play();
//     playPauseBtn.textContent = 'Pause';
//   } else {
//     audio.pause();
//     playPauseBtn.textContent = 'Play';
//   }
// });

const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

// Function to play or pause the audio
function playPauseAudio() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        playPauseBtn.textContent = 'Pause';
      })
      .catch(error => {
        console.error("Audio playback failed:", error);
        alert("Failed to start audio. Please interact with the page.");
      });
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
}

// Attach both 'click' and 'touchstart' events for better mobile compatibility
playPauseBtn.addEventListener('click', playPauseAudio);
playPauseBtn.addEventListener('touchstart', playPauseAudio);

