//esse grupo de constantes remetem a IDs do HTML, como nome da musica, banda, a musica em si
const nomeMusica = document.getElementById('nome-musica');
const nomeBanda = document.getElementById('nome-banda');
const musica = document.getElementById('audio');
const capa = document.getElementById('capa');
const play = document.getElementById('play');
const voltar = document.getElementById('voltar');
const passar = document.getElementById('passar');

//essas proximas 10 codigos, são as constantes referentes as informações de cada música da playlist
const ChefeDoCrimePerfeito= {
    nomeMusica : 'Chefe Do Crime Perfeito',
    nomeBanda : 'Filipe Ret',
    File1 : '1-Chefe-do-Crime-Perfeito', //file remete ao arquivo dentro do parentes
    File : 'revel capa 2',
}
const issoQueÉVida = {
    nomeMusica : 'Isso Que É Vida', 
    nomeBanda : 'Filipe Ret',
    File1 : '2-Isso-Que-é-Vida',
    File: 'revel capa 2',
}
const invicto = {
    nomeMusica : 'Invicto',
    nomeBanda : 'Filipe Ret',
    File1 : '3-invicto',
    File: 'revel capa 2',
}
const coraçãoVagabundo = {
    nomeMusica : 'Coração Vgabundo',
    nomeBanda : 'Filipe Ret',
    File1 : '4-Coração-Vagabundo',
    File: 'revel capa 2',
}
const sóPraVoceLembrar = {
    nomeMusica : 'Só Pra Você Lembrar',
    nomeBanda : 'Filipe Ret',
    File1 : '5-Só-pra-Você-Lembrar',
    File: 'revel capa 2',
}
const glóriaPraNós = {
    nomeMusica : 'Glória Pra Nós',
    nomeBanda : 'Filipe Ret',
    File1: '6-Glória-pra-Nós',
    File: 'revel capa 2',
}
const taçasProAr = {
    nomeMusica : 'Taças Pro Ar',
    nomeBanda : 'Filipe Ret',
    File1 : '7-Taças-pro-Ar',
    File: 'revel capa 2',
}
const dutumob = {
    nomeMusica : 'Dutumob II',
    nomeBanda : 'Filipe Ret',
    File1: '8-Dutumob-II',
    File: 'revel capa 2',  
}
const nãoExistePoesiaSemPecado = {
    nomeMusica : 'Não Existe Po..Pecado',
    nomeBanda : 'Filipe Ret',
    File1 : '9-Não-Existe-Poesia-Sem-Pecado',
    File: 'revel capa 2',
}
const livreEtriste = {
    nomeMusica : 'Livre E Triste',
    nomeBanda : 'Filipe Ret',
    File1 : '10-Livre-e-Triste',
    File: 'revel capa 2',
}




nomeMusica.innerText= 'Chefe do Crime Perfeito'; //linha 82 puxa a CONST 'nomeMusica' e alterna o nome dela na pagina
let isPlaying = false; //criamos uma variavel isPlaying=false, onde nos diz que quando abrirmos a pagina, a musica n estara tocando
const playlist = [ChefeDoCrimePerfeito, issoQueÉVida, invicto, coraçãoVagabundo, sóPraVoceLembrar, glóriaPraNós, 
    taçasProAr, dutumob, nãoExistePoesiaSemPecado, livreEtriste
]
let index = 0;


//da linha 86-91 criamos uma função que dar play na musica e trocar o icone play por pause se a musica estiver tocando
function playMusica(){
    play.querySelector('.bi').classList.remove('bi-play-circle');
    play.querySelector('.bi').classList.add('bi-pause-circle');
    musica.play();
    isPlaying = true
}

//ja da linha 93-99 criamos a função de pause, que pausa e troca os icones pause por play, se a musica estiver parada
function pauseMusica(){
    play.querySelector('.bi').classList.add('bi-play-circle');
    play.querySelector('.bi').classList.remove('bi-pause-circl;e');
    musica.pause();
    isPlaying = false
}

/*e aqui da 101-109 temos a função que engloba nossas duas funções anteriores, onde se a musica estiver parada ela toca
e se estiver tocando ela para*/
function playPauseDecider(){
    if(isPlaying === true){
        pauseMusica();
    }
    else{
        playMusica();
    }
}

function iniciarMusica(){
    capa.src = `img/${playlist[index].File}.jpg`;
    musica.src =`mp3/${playlist[index].File1}.mp3`;
    nomeMusica.innerText = playlist[index].nomeMusica;
    nomeBanda.innerText = playlist[index].nomeBanda;
}

function voltarMusica(){
    if(index===0){
        index=playlist.length-1;
    }
    else{
        index-=1;
    }
    iniciarMusica();
    playMusica();
}

function passarrMusica(){
    if(index===playlist.length-1){
        index=0;
    }
    else{
        index+=1;
    }
    iniciarMusica();
    playMusica();
}

iniciarMusica()
play.addEventListener('click' , playPauseDecider); //aqui criamos uma interação por clique para executar a função 'playPauseDecider'
passar.addEventListener('click',voltarMusica);
voltar.addEventListener('click',passarrMusica);






