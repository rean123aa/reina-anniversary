// =========================
// Floating Hearts Animation
// =========================
const heartsContainer = document.getElementById('hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (5 + Math.random() * 5) + 's';
  heart.style.width = heart.style.height = (10 + Math.random() * 20) + 'px';
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 7000);
}

setInterval(createHeart, 500);

// =========================
// Playlist Page: YouTube Autoplay Controls
// =========================
let ytPlayer;

function onYouTubeIframeAPIReady(){
  ytPlayer = new YT.Player('ytplayer', { events: { 'onReady': ()=>{} } });
}

function toggleMute(){
  if(!ytPlayer) return;
  if(ytPlayer.isMuted()) ytPlayer.unMute();
  else ytPlayer.mute();
}

function restartMusic(){
  if(!ytPlayer) return;
  ytPlayer.seekTo(0);
  ytPlayer.playVideo();
}
