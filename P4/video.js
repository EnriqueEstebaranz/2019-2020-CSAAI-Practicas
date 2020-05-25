console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
const video_selecionado = document.getElementById("video_selecionado")
video_selecionado.width=600;  //-- Tamaño de la pantalla de video
video_selecionado.height=300;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video_selecionado.poster="video.gif";

//----- Obtener elemento de video y configurarlo
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";

const video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";

const video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";
