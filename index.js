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

// Check if the audio element is ready and ensure mobile browsers allow user interaction
playPauseBtn.addEventListener('click', function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    audio.pause();
    playPauseBtn.textContent = 'Play';
  }
});

