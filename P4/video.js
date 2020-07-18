console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video_selecionado = document.getElementById("video_selecionado")
video_selecionado.width=520;  //-- Tamaño de la pantalla de video
video_selecionado.height=290;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video_selecionado.poster="video.gif";

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=160;  //-- Tamaño de la pantalla de video
video1.height=90;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";

const video2 = document.getElementById("video2")
video2.width=160;  //-- Tamaño de la pantalla de video
video2.height=90;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

const video3 = document.getElementById("video3")
video3.width=160;  //-- Tamaño de la pantalla de video
video3.height=90;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
//--botones play (1, 2, 3) y (TEST ,RANDOM)
play1 = document.getElementById("play1")
play2 = document.getElementById("play2")
play3 = document.getElementById("play3")
test = document.getElementById("test")
aleatorio = document.getElementById("aleatorio")
automatico = document.getElementById("automatico")

play1.onclick = () => {
  console.log("Ha clickado en play1")
  video_selecionado.poster = false; //para evitar solpara la imagen de test con video
  video_selecionado.src = video1.src;
  video_selecionado.currentTime = video1.currentTime;
  video_selecionado.muted = false;
  video1.style.border = "5px #FD00C6 solid";
  video2.style.border = "0px";
  video3.style.border = "0px";
  test.style.border = "0px";
}
play2.onclick = () => {
  console.log("Ha clickado en play2")
  video_selecionado.poster = false; //para evitar solpara la imagen de test con video
  video_selecionado.src = video2.src;
  video_selecionado.currentTime = video2.currentTime;
  video_selecionado.muted = false;
  video1.style.border = "0px";
  video2.style.border = "5px #FD00C6 solid";
  video3.style.border = "0px";
  test.style.border = "0px";
}

play3.onclick = () => {
  console.log("Ha clickado en play3")
  video_selecionado.poster = false; //para evitar solpara la imagen de test con video
  video_selecionado.src = video3.src;
  video_selecionado.currentTime = video3.currentTime;
  video_selecionado.muted = false;
  video1.style.border = "0px";
  video2.style.border = "0px";
  video3.style.border = "5px #FD00C6 solid";
  test.style.border = "0px";
}

test.onclick = () => {
  console.log("Ha clickado en TEST");
  video_selecionado.src = false; //para evitar solpara la imagen de test con video
  video_selecionado.poster = "https://mmedia.uv.es/display?c=asamar4&name=enpruebas.jpg&path=/"
  video1.style.border = "0px";
  video2.style.border = "0px";
  video3.style.border = "0px";
  test.style.border = "5px #FD00C6 solid";
}

aleatorio.onclick = () => {
  console.log("Ha clickado en RANDOM");
  var videos = [1,2,3];
  var i = Math.floor(Math.random() * videos.length);
  console.log(i)
  if(i == 0){
    video_selecionado.poster = false; //para evitar solpara la imagen de test con video
    video_selecionado.src = video1.src;
    video_selecionado.currentTime = video1.currentTime;
    video_selecionado.muted = false;
    video1.style.border = "5px #FD00C6 solid";
    video2.style.border = "0px";
    video3.style.border = "0px";
    test.style.border = "0px";
  }else if(i == 1){
    console.log("Ha clickado en play2")
    video_selecionado.poster = false; //para evitar solpara la imagen de test con video
    video_selecionado.src = video2.src;
    video_selecionado.currentTime = video2.currentTime;
    video_selecionado.muted = false;
    video1.style.border = "0px";
    video2.style.border = "5px #FD00C6 solid";
    video3.style.border = "0px";
    test.style.border = "0px";
  }else{
    console.log("Ha clickado en play3")
    video_selecionado.poster = false; //para evitar solpara la imagen de test con video
    video_selecionado.src = video3.src;
    video_selecionado.currentTime = video3.currentTime;
    video_selecionado.muted = false;
    video1.style.border = "0px";
    video2.style.border = "0px";
    video3.style.border = "5px #FD00C6 solid";
    test.style.border = "0px";
  }
}

automatico.onclick = () => {
  var duración = 3;
  var automatico = "";
  var on = 1;
  automatico = Math.trunc(video_selecionado.currentTime);

  while (on == 1) {
    if(video1.style.border = "5px #FD00C6 solid"){
      automatico = Math.trunc(video_selecionado.currentTime);
      while(video_selecionado.currentTime < (automatico + duración)){
        video_selecionado.poster = false; //para evitar solpara la imagen de test con video
        video_selecionado.src = video1.src;
        video_selecionado.currentTime = video1.currentTime;
        video_selecionado.muted = false;
        video1.style.border = "5px #FD00C6 solid";
        video2.style.border = "0px";
        video3.style.border = "0px";
        test.style.border = "0px";
      }
      video_selecionado.poster = false; //para evitar solpara la imagen de test con video
      video_selecionado.src = video2.src;
      video_selecionado.currentTime = video2.currentTime;
      video_selecionado.muted = false;
      video2.style.border = "5px #FD00C6 solid";
      video3.style.border = "0px";
      test.style.border = "0px";
      video1.style.border = "0px";
    }else if (video2.style.border = "5px #FD00C6 solid") {
      automatico = Math.trunc(video_selecionado.currentTime);
      while(video_selecionado.currentTime < (automatico + duración)){
        video_selecionado.poster = false; //para evitar solpara la imagen de test con video
        video_selecionado.src = video2.src;
        video_selecionado.currentTime = video2.currentTime;
        video_selecionado.muted = false;
        video2.style.border = "5px #FD00C6 solid";
        video3.style.border = "0px";
        test.style.border = "0px";
        video1.style.border = "0px";
      }
      video_selecionado.poster = false; //para evitar solpara la imagen de test con video
      video_selecionado.src = video3.src;
      video_selecionado.currentTime = video3.currentTime;
      video_selecionado.muted = false;
      video1.style.border = "0px";
      video3.style.border = "5px #FD00C6 solid";
      test.style.border = "0px";
      video2.style.border = "0px";
    }else if(video3.style.border = "5px #FD00C6 solid"){
      automatico = Math.trunc(video_selecionado.currentTime);
      while(video_selecionado.currentTime < (automatico + duración)){
        video_selecionado.poster = false; //para evitar solpara la imagen de test con video
        video_selecionado.src = video3.src;
        video_selecionado.currentTime = video3.currentTime;
        video_selecionado.muted = false;
        video1.style.border = "0px";
        video3.style.border = "5px #FD00C6 solid";
        test.style.border = "0px";
        video2.style.border = "0px"
      }
      video_selecionado.poster = false; //para evitar solpara la imagen de test con video
      video_selecionado.src = video1.src;
      video_selecionado.currentTime = video1.currentTime;
      video_selecionado.muted = false;
      video1.style.border = "5px #FD00C6 solid";
      video2.style.border = "0px";
      test.style.border = "0px";
      video3.style.border = "0px";
    }else{
      console.log("Al no seleccionar una pantalla previamente inicias por la primera pantalla");
      automatico = Math.trunc(video_selecionado.currentTime);
      while(video_selecionado.currentTime < (automatico + duración)){
        video_selecionado.poster = false; //para evitar solpara la imagen de test con video
        video_selecionado.src = video1.src;
        video_selecionado.currentTime = video1.currentTime;
        video_selecionado.muted = false;
        video1.style.border = "5px #FD00C6 solid";
        video2.style.border = "0px";
        video3.style.border = "0px";
        test.style.border = "0px";
      }
      video_selecionado.poster = false; //para evitar solpara la imagen de test con video
      video_selecionado.src = video2.src;
      video_selecionado.currentTime = video2.currentTime;
      video_selecionado.muted = false;
      video2.style.border = "5px #FD00C6 solid";
      video3.style.border = "0px";
      test.style.border = "0px";
      video1.style.border = "0px";
    }
  }
}

video_selecionado.addEventListener("timeupdate",function(ev){
      var tiempo  = (video_selecionado.currentTime);
      console.log(tiempo);
  },true);
