let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'img/1.jpg',
        name : 'No llora',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/No llora(MP3_320K).mp3'
    },
    {
        img : 'img/1.jpg',
        name : '21 de septiembre',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/21 de septiembre(MP3_320K).mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'Caminamos',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/Caminamos(MP3_320K).mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'Como Pasa el Tiempo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/COMO PASA EL TIEMPO.mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'ROBERTO',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/ROBERTO.mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'De hielo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/De hielo(MP3_320K).mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'Habla tu espejo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/Habla tu espejo(MP3_320K).mp3'
    },

    {
        img : 'img/1.jpg',
        name : 'Un problema menos',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/Un problema menos(MP3_320K).mp3'
    },

    {
        img : 'img/1.jpg',
        name : 'Whisky en Uruguay',
        artist : 'El Cuarteto de Nos',
        music : 'music/Habal Tu Espejo/Whisky en Uruguay(MP3_320K).mp3'
    },

    {
        img : 'img/1.jpg',
        name : 'Algo mejor que hacer',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Algo mejor que hacer.mp3'
    },
    {
        img : 'img/1.jpg',
        name : 'El balcón de Paul',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/El balcón de Paul(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'El lado soleado de la calle',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/El lado soleado de la calle(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Enamorado tuyo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Enamorado tuyo(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Insaciable',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Insaciable(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Lo malo de ser bueno',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Lo malo de ser bueno(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'No te invité a mi cumpleaños',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/No te invité a mi cumpleaños(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Sólo estoy sobreviviendo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Sólo estoy sobreviviendo(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Todos pasan por mi rancho',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Todos pasan por mi rancho(MP3_320K).mp3'
    },
    {
        img : 'img/Porfiado.jpg',
        name : 'Vida ingrata',
        artist : 'El Cuarteto de Nos',
        music : 'music/Porfiado/Vida ingrata(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Así Soy Yo',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Así Soy Yo(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Autos Nuevos',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Autos Nuevos(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'El Karaoke de Mi Noviecita',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/El Karaoke de Mi Noviecita(MP3_320K).mp3'
    },


    
    {
        img : 'img/Raro.jpg',
        name : 'Hoy Estoy Raro',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Hoy Estoy Raro(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Me Hace Bien_ Me Hace Mal',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Me Hace Bien_ Me Hace Mal(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Nada Es Gratis en la Vida',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Nada Es Gratis en la Vida(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Natural',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Natural(MP3_320K).mp3'
    },

    {
        img : 'img/Raro.jpg',
        name : 'Pueblo Podrido',
        artist : 'El Cuarteto de Nos',
        music : 'music/Raro/Pueblo Podrido(MP3_320K).mp3'
    },

];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "" + (track_index + 1) + " de " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationMinutes;
    }
}