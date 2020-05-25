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

play1.onclick = () => {
  console.log("Ha clickado en play1")
  video_selecionado.poster = false; //para evitar solpara la imagen de test con video
  video_selecionado.src = video1.src;
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
  video_selecionado.muted = false;
  video1.style.border = "0px";
  video2.style.border = "0px";
  video3.style.border = "5px #FD00C6 solid";
  test.style.border = "0px";
}

test.onclick = () => {
  console.log("Ha clickado en TEST");
  video_selecionado.src = false; //para evitar solpara la imagen de test con video
  video_selecionado.poster = "https://i.ytimg.com/vi/rGkQDrUcX18/maxresdefault.jpg"
  video1.style.border = "0px";
  video2.style.border = "0px";
  video3.style.border = "0px";
  test.style.border = "5px #FD00C6 solid";
}

aleatorio.onclick = () => {
  console.log("Ha clickado en RANDOM");
  return (Math.random() * (3));
  console.log("return");
  if (Math.random() * 3 == 0){
    play1.onclick = true;
  }else if (Math.random() * 3 == 1){
    play2.onclick = true;
  }else{
    play3.onclick = true;
  }
}
