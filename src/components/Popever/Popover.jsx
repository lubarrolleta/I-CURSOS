import { Show, createEffect, createSignal } from "solid-js";
import { useContextCustom } from "../../contexto/useContextCustom";
import { PopoverStyled } from "./PopoverStyled";

export default function Popover() {
  const contexto = useContextCustom();
  const {
    showPopover,
    setShowPopover,
    contentPopover,
    setContentPopover,
    dataPop,
    setDataPop,
    componentPopover,
    setComponentPopover,
  } = contexto().popover;
  const [componente, setComponent] = createSignal(null);
  createEffect(()=>{
    console.log(dataPop())
  })
  createEffect(() => {
    // console.log(dataPop())
    !showPopover() &&
      setTimeout(() => {

        // componentPopover().style.display ='none';
        // componente().classList.replace("scale-up-back","scale-up-center")
      }, 400);
    // showPopover() && (componentPopover().style.display ='block')
    if (!showPopover()) {
    }
  });
  return (
    <div
      class={`
  ${showPopover() ? "scale-up-center" : "scale-up-back"} 
  ${PopoverStyled(dataPop())}`}
      ref={setComponentPopover}
      onMouseLeave={() => {
        console.log("no-hover");
        setShowPopover(false);
        // let contador = 0;
        // interval = setInterval(() => {
        //   contador++;
        //   const popover = document.querySelector(`div[id="modal-${i()}"]`);
        //   if (popover) {
        //     clearInterval(interval);
        //     // console.log(popover);
        //     setTimeout(() => {
        //       // popover.style.transform = `${popover.style.transform} scale(1.5);`
        //       popover.style.display = "none";
        //       card().style.zIndex = "0";
        //       setVerVideo(false);
        //     });
        //     //   setTimeout(() => {
        //     //     pop().setAttribute(
        //     //       "style",
        //     //       `

        //     //        transform:  scale(2);
        //     //        transition: all 0.3s ease;
        //     //        `
        //     //     );
        //     //   }, 200);
        //     //   ${popover.style.transform}
        //     //   ${pop().getAttribute("style")}
        //     //    max-width:${pop().getBoundingClientRect().width*1.5}px;
        //     //        width:${pop().getBoundingClientRect().width*1.5}px;
        //   } else {
        //     console.log("no");
        //   }
        //   if (contador === 10) clearInterval(interval);
        // }, 200);
        // clearInterval(interval);
      }}
      style={{
        left: dataPop()?.x + "px",
        top: dataPop()?.bottom + "px",
        width: dataPop()?.width + "px",
        height: dataPop()?.height + "px",
        display: showPopover() ? "block" : "",
      }}>
        <Show when={showPopover()}>
      {contentPopover()}

        </Show>
    </div>
  );
}
