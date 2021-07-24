import {secondsToMinutes} from './utils.js';

export default{
    get(){
        //objeto para organizar a alimentação de dados
        this.cover = document.querySelector(".card-image");
         /* serve para buscar um elemento do mundo HTML e trazê-lo para o mundo JavaScript para que possamos manipulá-lo. */
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.mute = document.querySelector("#mute");
        this.volume = document.querySelector("#volume");
        this.seekbar = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");

    },
    creatAudioElement(audio){ //criando audio///recebendo arquivo
        this.audio = new Audio(audio); //iniciando arquivo de audio
    },
    actions(){
        this.audio.onended = () => this.next();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.playPause.onclick = () => this.togglePlayPause();
        this.mute.onclick = () => this.toggleMute();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration)
    }
};