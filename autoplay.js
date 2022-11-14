/* //////////////////////////////////////////////
Plus d'informations liées à la solution  : 
//////////////////////////////////////////////
## Listes propriétés et méthodes javascript de la balise 
https://outils-javascript.aliasdmc.fr/proprietes-et-methodes-javascript-video.php#mKpVwE00000.codepen
## Ecoutes des événements javascript de la balise video HTML5
https://outils-javascript.aliasdmc.fr/evenements-video-html5-javascript.php#mKpVwE00000.codepen 
*/

function fctAutoplay(sIdVideo){
  var oVideo = document.getElementById(sIdVideo);
  oVideo.autoplay = true;
}//fct 

function fctPlay(sIdVideo){
  var oVideo = document.getElementById(sIdVideo);
  var playPromise = oVideo.play();

  if (playPromise !== undefined) {
    playPromise.then(function() {
      //  
    }).catch(function(error) {
      var oDetect = document.getElementById("detect"+sIdVideo);
      if(oDetect){
        oDetect.innerHTML = "(on la détecté en javascript que la vidéo ne c'est pas lancée)";
      }
    });
  }
}//fct 

document.addEventListener('DOMContentLoaded',function(){
  //fctAutoplay('idvideo');
  fctAutoplay('idvideoA');
  fctAutoplay('idvideoA2'); 
  fctPlay('idvideoB')
  fctPlay('idvideoB2')
});

