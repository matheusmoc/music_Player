
import audios from './data.js';
import {path, secondsToMinutes} from './utils.js';
import elements from './Elements.js';
export default {

  audioData: audios, //lista de musica
  currentAudio: {}, //obejto vazio
  currentPlaying: 0, //posição
  isPlaying: false, //não começar tocando

  start() {
    elements.get.call(this);
    this.update(); //começar com o update
  },

  play() {
    this.isPlaying = true; //quando der play, tocar
    this.audio.play();
    this.playPause.innerText =  'pause'
  },

  pause(){
    this.isPlaying = false; //ao pausar não toca mais
    this.audio.pause();
    this.playPause.innerText = 'play_arrow'
  },

  togglePlayPause() {
    if(this.isPlaying){
      this.pause();
    }else{
      this.play();
    }
  },

  toggleMute() {
    this.audio.muted =  !this.audio.muted;
    this.mute.innerText =  this.audio.muted ? 'block' : 'volume_up'  //um if e else em uma linha só
  },
  next() {
    this.currentPlaying++; //incrementar ao acabar o audio

    if (this.currentPlaying == this.audioData.length) this.restart();
    this.update();
    this.play();
  },

  setVolume(value){
    this.audio.volume = value / 100;
  },

  setSeek(value){
    this.audio.currentTime = value;
  },

  timeUpdate(){
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime) //atualizar o tempo na tela
    this.seekbar.value = this.audio.currentTime; //o seekbar atualiza conforme o tempo
  },


  timeUpdate() {
    this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    this.seekbar.value = this.audio.currentTime;
  },


  update() {
    //ao passar a musica tbm passará as imagens e o título
    this.currentAudio = this.audioData[this.currentPlaying]; //array de lista

    this.cover.style.background = `url('${path(
      this.currentAudio.cover
    )}') no-repeat center center / cover `;
    this.title.innerText = this.currentAudio.title;
    this.artist.innerText = this.currentAudio.artist;
    elements.creatAudioElement.call(this, path(this.currentAudio.file));
    //só vai carregar alguma coisa quando ele ler os dados
    this.audio.onloadeddata = () =>{
      elements.actions.call(this);
   };
  },

  restart() {
    this.currentPlaying = 0;
    this.update(); //ao acabar o audio dar restart
  }
};



