import { createEffect } from "solid-js";
import Context from "../../contexto/Contexto";
import { useContextCustom } from "../../contexto/useContextCustom"

export default function Productos() {
    const context = useContextCustom()
    // console.log(<Context></Context>)
    console.log(context(),"context");
    const {productos} = context()
    createEffect(() => {
        console.log(productos());
      });
    // console.log(productos())
  return (
    <div class="mainView">
        <div class="lolomo is-fullbleed">
            <h1 class="visually-hidden">i cursos</h1>
            <div class="volatile-billboard-animations-container">
                <div class="billboard-row">
                    <div class="billboard billboard-pane billboard-originals trailer-billboard">
                        <div class="billboard-motion dismiss-mask">
                            <div class="motion-background-component bottom-layer full-screen">
                                <div class="hero-image-wrapper">
                                <img class="hero static-image image-layer" src="https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABes_NnBj3atXwD8PgPhfVR6YzTMHBs-7PCP-qiAEsLPfZ5uHv1Ft4664--TS9pZ9zQxe0YtsuImIlCt50UnAFxhxLGi-HlWUR0pm.webp?r=2a3" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="fill-container"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
