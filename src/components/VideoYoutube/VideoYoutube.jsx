import { For, createEffect, createSignal, onCleanup, onMount } from "solid-js";
import Plyr from "plyr";
import "./VideoYoutube.scss";
import { Button } from "solid-bootstrap";
export default function VideoYoutube({ video }) {
    const url = new URL(video)
  // const [player,setPlayer] = createSignal(null);
  const [player, setPlayer] = createSignal(null);
  const [play, setPlay] = createSignal(false);
  const [mute, setMute] = createSignal(true);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [quality, setQuality] = createSignal("default");
  const [qualitys, setQualitys] = createSignal([])
  // let player;
  let pauseBtn;

  createEffect(() => {});
  const init = () => {
    var tag = document.createElement("script");
    // https://youtu.be/ftkd42ukSyA
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    //   function
    //   window.
    const onYouTubeIframeAPIReady = () => {
      const ytPlayer = new YT.Player("player", {
        height: "390",
        width: "640",
        videoId: url?.pathname?.replaceAll("/",""),
        playerVars: {
          playsinline: 1,
          rel: 0,
        //   modestbranding: 1,
          controls: 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onPlaybackQualityChange:changeQuality
        },
      });
      setPlayer(ytPlayer);
    };
    function changeQuality(e){
        console.log(e,"cahnge")
      player().setPlaybackQuality(quality());
      console.log(e,"cahnge")

        // e.target["setPlaybackQuality"]("hd720")
    }
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log({ s: event.target });
      player().setPlaybackQuality(quality());
      // event.target.playVideo();
    //   setQualitys(player()?.playerInfo?.availableQualityLevels)
      const videoDuration = event.target.getDuration();
      // console.log(videoDuration);
      setDuration(videoDuration);
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
      player().setPlaybackQuality(quality());

      setQualitys(player()?.playerInfo?.availableQualityLevels)
    //   player().setPlaybackQuality(player()?.playerInfo?.availableQualityLevels[0]);
    //   player().setPlaybackQuality("hd1080");
    setTimeout(() => {
        
        // player()["setPlaybackQuality"]("default")
    }, 1000);

        //   setTimeout(stopVideo, 6000);
        //   done = true;
        //   pauseBtn.hidden = true;
        // setQuality(player().playerInfo.playbackQuality)
        const interval = setInterval(() => {
          setCurrentTime(player().getCurrentTime());
        }, 1000);

        onCleanup(() => clearInterval(interval));
      }
      if (event.data == YT.PlayerState.ENDED) {
        console.log("El video ha terminado");
        // Ejecutar alguna acción al finalizar el video
      }
    }
    function stopVideo() {
      player()?.stopVideo();
    }
    onYouTubeIframeAPIReady();
  };
  createEffect(() => {
    // console.log(currentTime());
    // console.log(player()?.playerInfo.playbackQuality);
    // // console.log(qualitys())
    // console.log(player()?.playerInfo?.availableQualityLevels)
  });
  createEffect(()=>{
    // if(player() && player().hasOwnProperty("setPlaybackQuality")){
    //     console.log("player")
    //     player().setPlaybackQuality("hd1080");
    // }else{
    //     console.log("no playback quality")
    // }
  })
  onMount(() => {
    // const player1 = new Plyr(player(),{
    //     // controls: ['play', 'progress', 'volume'],
    //     youtube: {
    //         rel: 0, // Desactiva los videos relacionados
    //         showinfo: 0, // Oculta la información del video
    //         modestbranding: 1, // Minimiza el branding de YouTube
    //       },
    // });
    // console.log(player1,"playing")
    init();
    //  player()?.destroy();
    //  const interval = setInterval(()=>{
    //     // const btnYoutube = document.querySelector(`a[class="ytp-youtube-button ytp-button yt-uix-sessionlink"]`);
    //     if(window.plyr){
    //         clearInterval(interval)
    //         const player = new Plyr('#player', {
    //             controls: ['play', 'progress', 'volume'],
    //         });
    //         // player()
    //     }
    //     // if(btnYoutube)
    //     // console.log(btnYoutube)
    //  },200)
  });
  // Función para calcular el progreso
  function getProgress() {
    return (currentTime() / duration()) * 100;
  }
  // Función para cambiar la calidad del video
  function handleChangeQuality(event) {
    const selectedQuality = event.target.value;
    setQuality(selectedQuality);
    setTimeout(() => {
        
        player().setPlaybackQuality(selectedQuality);
    }, 500);
  }
  // Función para manejar el clic en la barra de progreso
  function handleProgressBarClick(event) {
    // console.log(event.clientX,"event.clientX");
    const progressBar = event.target;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left; // Posición X del clic dentro del contenedor de la barra
    const newTime = (clickX / progressBar.offsetWidth) * duration(); // Calcula el nuevo tiempo basado en la posición
    player().seekTo(newTime, true); // Saltar al nuevo tiempo
  }
  return (
    <>
      <div
        class='containerVideo'
        onMouseEnter={() => {
          play() && (pauseBtn.hidden = false);
        }}
        onMouseLeave={() => {
          play() && (pauseBtn.hidden = true);
        }}>
        <Button
          id='play'
          hidden={play()}
          onClick={() => {
            player().playVideo();
            setPlay(true);
          }}>
          play
        </Button>
        <Button
          id='pause'
          ref={pauseBtn}
          hidden={!play()}
          onClick={() => {
            player().pauseVideo();
            setPlay(false);
            console.log(player().getVideoData());
          }}>
          pause
        </Button>

        <section id='top'></section>
        <div id='player'></div>
        <div
          class='progress-bar-container'
          onClick={handleProgressBarClick} // Agregamos el evento click
        >
          <div
            class='progress-bar'
            style={{ width: `${getProgress()}%` }}></div>
        </div>
        <div class="quality-selector">
        <label for="quality">Selecciona la calidad:</label>
        <select id="quality" value={quality()} onChange={handleChangeQuality}>
            {/* <option value={player()?.getPlaybackQuality()}>{player()?.getPlaybackQuality()}</option> */}
            <For each={qualitys()}>{
                (quality)=>{
                    return (<option value={quality}>{quality}</option>)
                }
            }</For>
          {/* <option value="default">Por defecto</option>
          <option value="small">144p (small)</option>
          <option value="medium">360p (medium)</option>
          <option value="large">480p (large)</option>
          <option value="hd720">720p (HD)</option>
          <option value="hd1080">1080p (Full HD)</option>
          <option value="highres">Alta resolución</option> */}
        </select>
      </div>
        <section id='bottom'></section>
        {/* <iframe srcdoc='<script>console.log("desde yt")</script>"<iframe width="772" height="436" src="https://www.youtube.com/embed/omKWBvg4Yys" title="🔔como COSER POLO👕 tipo CAMISERA 👔  MOLDES OPTIMIZADOS (ECONOMICOS 💸) | CAMISETA 👕 TIPO POLO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"' frameborder="0"></iframe> */}
      </div>
      {/* <div class="plyr__video-embed" id="player">
    <iframe src="https://www.youtube.com/embed/omKWBvg4Yys?controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1" allowfullscreen allow="autoplay"></iframe>
</div> */}
      {/* <div class="plyr__video-embed">
      <iframe
        ref={setPlayer}
        src="https://www.youtube.com/embed/omKWBvg4Yys?controls=0&modestbranding=1"
        allowfullscreen
        allow="autoplay"
      ></iframe>
    </div> */}
    </>
  );
}
