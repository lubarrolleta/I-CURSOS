import { OverlayTrigger, Popover } from "solid-bootstrap";
import { Show, createEffect, createSignal } from "solid-js";
import { setDataUrl } from "../../../constantes/constantes";

export default function Producto(props) {
  const { producto, productos, i } = props;
  const component = {
    ["afiliado"]: (data) => {
      // console.log(data);

      return {
        img: data.versions[0].image.fullUrl,
        name: data.versions[0].name,
      };
    },
    ["productor"]: (data) => {
      // console.log(data);
      return {
        img: data.versions[0].image.fullUrl,
        name: data.versions[0].name,
        video: setDataUrl(data.versions[0].description,"iframe.mediadelivery.net")
      };
    },
  };
  const [verVideo, setVerVideo] = createSignal(false);
  const [pop, setPop] = createSignal(null);
  createEffect(() => {
    // console.log({p:pop()})
    console.log(
    //   pop()
      // .getBoundingClientRect().left
    );
  });
  let interval;
  const [card,setCard] = createSignal(null);
  return (
    <div
      class='slider-item slider-item-'
      id={`card-${i()}`}
      ref={setCard}
      style={{ ["z-index"]: "0" }}
      
      >
      <div class={`title-card-container ltr-${i()}`}
        onMouseEnter={() => {
            let contador = 0;
            interval = setInterval(() => {
              contador++;
              const popover = document.querySelector(`div[id="modal-${i()}"]`);
              if (popover) {
                clearInterval(interval);
                // console.log(popover);
                setTimeout(() => {
                  // popover.style.transform = `${popover.style.transform} scale(1.5);`
                  popover.style.display = 'block';
                  card().style.zIndex = '1';
                  setVerVideo(true);
                }, 200);
                //   setTimeout(() => {
                //     pop().setAttribute(
                //       "style",
                //       `
    
                //        transform:  scale(2);
                //        transition: all 0.3s ease;
                //        `
                //     );
                //   }, 200);
                //   ${popover.style.transform}
                //   ${pop().getAttribute("style")}
                //    max-width:${pop().getBoundingClientRect().width*1.5}px;
                //        width:${pop().getBoundingClientRect().width*1.5}px;
              } else {
                console.log("no");
              }
              if (contador === 10) clearInterval(interval);
            }, 200);
          }}
      >
        <div id={`title-card-1-${i()}`} class='title-card' ref={setPop}>
          <div
            // onMouseEnter={() => {
            //   //   setShowMoal(true)
            //   let contador = 0;
            //   interval = setInterval(() => {
            //     contador++;
            //     const popover = document.querySelector(
            //       `div[id="popover-basic-${i()}"]`
            //     );
            //     if (popover) {
            //       clearInterval(interval);
            //       console.log(popover.style.transform);
            //       setTimeout(() => {
            //         // popover.style.transform = `${popover.style.transform} scale(1.5);`
            //       }, 200);
            //       setTimeout(() => {
            //         pop().setAttribute(
            //           "style",
            //           `
                       
            //            transform:  scale(2); 
            //            transition: all 0.3s ease;
            //            `
            //         );
            //       }, 200);
            //       //   ${popover.style.transform}
            //       //   ${pop().getAttribute("style")}
            //       //    max-width:${pop().getBoundingClientRect().width*1.5}px;
            //       //        width:${pop().getBoundingClientRect().width*1.5}px;
            //     } else {
            //       console.log("no");
            //     }
            //     // if (contador === 100) clearInterval(interval);
            //   }, 200);
            //   console.log("hover");
            // }}
            // onMouseLeave={() => {
            //   console.log("no-hover");
            //   clearInterval(interval);
            // }}
            class='ptrack-content'
            // data-ui-tracking-context='%7B%22list_id%22:%22NES_49EF11BDCE6D670FF283500558837C-1D364BE54DB1AF-14438BEB43_p_1725749354297%22,%22location%22:%22homeScreen%22,%22rank%22:36,%22request_id%22:%226daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%22,%22row%22:1,%22track_id%22:14170035,%22unifiedEntityId%22:%22Video:70204970%22,%22video_id%22:70204970,%22image_key%22:%22sdp%7C513b95f0-c323-11e6-9935-0e094703c7fa%7Cen%7ClVb%7C70081003%22,%22supp_video_id%22:1,%22lolomo_id%22:%22NES_49EF11BDCE6D670FF283500558837C_p_1725749354297%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D'
            // data-tracking-uuid='e2d4e034-4777-4ac9-8681-722aa324a0d5'
          >
            <a
              href='#'
              aria-label={component[productos().type](producto).name}
              tabindex='-1'
              //   aria-hidden='true'
              class='slider-refocus'>
              <div class='boxart-size-16x9 boxart-container boxart-rounded'>
                <img
                  class='boxart-image boxart-image-in-padded-container'
                  src={component[productos().type](producto).img}
                  //   src='https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47'
                  alt=''
                />
                <div class='fallback-text-container' aria-hidden='true'>
                  <p class='fallback-text'>
                    {component[productos().type](producto).name}
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div class='bob-container'></div>
        </div>
      </div>
      <div
        onMouseLeave={() => {
            console.log("no-hover");
            let contador = 0;
            interval = setInterval(() => {
              contador++;
              const popover = document.querySelector(`div[id="modal-${i()}"]`);
              if (popover) {
                clearInterval(interval);
                // console.log(popover);
                setTimeout(() => {
                  // popover.style.transform = `${popover.style.transform} scale(1.5);`
                  popover.style.display = 'none';
                  card().style.zIndex = '0';
                setVerVideo(false);

                }, 200);
                //   setTimeout(() => {
                //     pop().setAttribute(
                //       "style",
                //       `
    
                //        transform:  scale(2);
                //        transition: all 0.3s ease;
                //        `
                //     );
                //   }, 200);
                //   ${popover.style.transform}
                //   ${pop().getAttribute("style")}
                //    max-width:${pop().getBoundingClientRect().width*1.5}px;
                //        width:${pop().getBoundingClientRect().width*1.5}px;
              } else {
                console.log("no");
              }
              if (contador === 10) clearInterval(interval);
            }, 200);
            // clearInterval(interval);
          }}
        class='scale-up-center'
        id={`modal-${i()}`}
        style={`
            display:none;
            border-radius: .2vw;
            position: absolute;
            background: #141414 !important;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 2;
            box-sizing: border-box;
            /* transform-origin: 0px; */
            top: 0px;
      `}>
        <Show when={verVideo()}>
        <iframe style={{
            ["aspect-ratio"]: "16/9",
            width:"100%",

        }}
        frameborder="0"
        allowfullscreen="true"
        src={component[productos().type](producto).video}
        ></iframe>

        </Show>
      </div>
    </div>
  );
}
