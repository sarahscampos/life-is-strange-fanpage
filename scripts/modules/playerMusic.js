export default function initPlayerMusic() {
  const musicContainer = document.querySelector('.music-container');
  const playBtn = document.querySelector('#play');

  const imgPlay = document.querySelector('#play img');

  const prevBtn = document.querySelector('#prev');
  const nextBtn = document.querySelector('#next');
  const audio = document.querySelector('#audio');
  const progress = document.querySelector('.progress');
  const progressContainer = document.querySelector('.progress-container');
  const title = document.querySelector('#title');
  const cover = document.querySelector('#cover');

  //song titles
  const songs = ['To All Of You', 'Spanish Sahara', 'Obstacles', 'Santa Monica Dream', 'Local Natives'];

  //keep track of songs
  let songIndex = 0;

  //initially load song info DOM
  loadSong(songs[songIndex]);

  //update song details 
  function loadSong(song) {
    title.innerText = song;
    audio.src = `../../assets/music/${song}.mp3`;
    cover.src = `../../assets/imgs/back-music/${song}.jpg`;
  }

  function playSong() {
    musicContainer.classList.add('play');
    imgPlay.src= `../../assets/imgs/icon-music/pause.png`;
    audio.play();
  }

  function pauseSong() {
    musicContainer.classList.remove('play');
    imgPlay.src= `../../assets/imgs/icon-music/play.png`;
    audio.pause();
  }

  function prevSong() {
    songIndex--;

    if(songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    playSong();
  }

  function nextSong() {
    songIndex++;

    if(songIndex > songs.length - 1) {
      songIndex = 0;
    }

    loadSong(songs[songIndex]);
    playSong();
  }

  function updateProgress(event) {
    const {duration, currentTime} = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }

  function setProgress(event) {
    const width = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  }

  //Event listeners
  playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if(isPlaying) {
      pauseSong();
    }
    else {
      playSong();
    }
  })


  //change song events
  prevBtn.addEventListener('click', prevSong);
  nextBtn.addEventListener('click', nextSong);

  audio.addEventListener('timeupdate', updateProgress);

  progressContainer.addEventListener('click', setProgress);

  audio.addEventListener('ended', nextSong);

}

