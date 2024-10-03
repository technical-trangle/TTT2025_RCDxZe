
const audio = document.getElementById('audioPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

// Function to play or pause the audio
function playPauseAudio() {
  if (audio.paused) {
    audio.play()
      .then(() => {
        audio.muted = false; // Unmute the audio
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

// Use only 'click' event for both desktop and mobile devices
playPauseBtn.addEventListener('click', playPauseAudio);

