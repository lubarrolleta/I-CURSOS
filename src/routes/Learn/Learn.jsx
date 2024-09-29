import { useNavigate, useParams, useSearchParams } from "@solidjs/router";
import {
  For,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createResource,
  createSignal,
  onMount,
} from "solid-js";
import { useContextCustom } from "../../contexto/useContextCustom";
import { getCursosId } from "../../Querys/Querys";
import "./Learn.scss";
import { Button, Image } from "solid-bootstrap";
import { IS_PROD, URL_APP, URL_APP_TEST } from "../../constantes/constantes";
import { Section } from "../../components/Productos/ProductosStyles";
import MarkdownRenderer from "../../components/MarkdownRenderer";
import { htmlToText } from "html-to-text";
import VideoYoutube from "../../components/VideoYoutube/VideoYoutube";
import ProductosRelacionados from "../../components/Productos-Relacionados/ProductosRelacionados";
export default function Learn() {
  const params = useParams();
  const navigate = useNavigate();
  const context = useContextCustom();
  const [searchParams, setSearchParams] = useSearchParams();

  const { logout } = context();
  // console.log(logout);
  console.log(params.nombreCurso, params.idCurso);
  const [curso] = createResource(() => getCursosId(params.idCurso, logout));
  const [lecciones, setLecciones] = createSignal([]);
  const [contenido, setContenido] = createSignal(null);

  const [cards, setCards] = createSignal([]);
  const [recurso, setRecurso] = createSignal(null);
  createEffect(() => {
    if (!curso.loading && curso().data) {
      console.log(curso().data.attributes.configuraciones_generales);
      // console.log(Object.keys(curso().data.attributes).includes("modulos"))
      // console.log(Object.keys(curso().data.attributes.modulos[0]).includes("lecciones"))
      setCards(
        curso().data.attributes.modulos.map((c) => ({
          ...c,
          ["type"]: "modulos",
        }))
      );
      // setContenido({type:"curso",...curso().data.attributes.configuraciones_generales})
      // setCards(Object.keys(curso().data.attributes).includes("modulos") ?{type:"modulos",...} : {});
    }
  });
  const [style, setStyle] = createSignal({});
  const [contentMain,setContentMain] = createSignal(null)
  const [margin,setMargin] = createSignal(false);
  const memoModulo = createMemo(() => searchParams.modulo);
  const memoLeccion = createMemo(() => searchParams.leccion);
  const memoContenido = createMemo(() => searchParams.contenido);

  createEffect(() => {
    // memoModulo() &&
    //   curso() &&
    //   setLecciones(
    //     curso().data.attributes.modulos.find(
    //       (c) => c.id === Number(searchParams.modulo)
    //     )
    //   ) &&
    //   setContenido({ type: "modulo", ...lecciones() });
    // console.log(memoModulo(),"memomodulo")
  });
  createEffect(() => {
    if (!memoModulo()) {
      console.log("no existe modulo");
      curso() &&
        setContenido({
          type: "curso",
          ["imagen_de_fondo"]: curso().data.attributes.imagen_de_fondo,
          ...curso().data.attributes.configuraciones_generales,
        });
    } else {
      console.log("existe modulo");
      curso() &&
        setLecciones(
          curso().data.attributes.modulos.find(
            (c) => c.id === Number(searchParams.modulo)
          )
        ) &&
        setContenido({ type: "modulo", ...lecciones() }) &&
        setStyle({
          ["display"]: "flex",
        });
    }
    // !memoModulo()
    // && curso()
    // ? setContenido({type:"curso",...curso().data.attributes.configuraciones_generales}) : setContenido(null)
  });
  createEffect(() => {
    if (!memoLeccion()) {
      setContenido({ type: "modulo", ...lecciones() });
      setStyle({
        ["display"]: "flex",
        
      });
      //   setStyle({});
    //   setMargin()
    } else {
      curso()
        ? setRecurso(
            lecciones().lecciones.find((c) => c.id === Number(memoLeccion()))
          ) && setContenido({ type: "leccion", ...recurso() })
        : setRecurso(null);
      setStyle({["margin-top"]:`${margin()}`,});
    }
    // memoModulo() &&
    // memoLeccion() && curso() && setContenido(lecciones().lecciones.find(c=> c.id === Number(memoLeccion())))
    memoLeccion() && curso()
      ? setRecurso(
          lecciones().lecciones.find((c) => c.id === Number(memoLeccion()))
        )
      : setRecurso(null);
    // memoLeccion() && curso()
    console.log(recurso(), "RECURSO");
  });
  createEffect(() => {
    console.log(contenido(), "contenido");
    // memoModulo() && memoLeccion() &&
    // memoContenido() && curso() ? setRecurso(contenido().contenido.find(c=> c.id === Number(memoContenido()))) : setRecurso(null)
    // console.log(recurso(),"RECURSO")
  });
  //   let containerBtn;
  const [containerBtn, setContainerBtn] = createSignal(null);
  const setObjectMime = (html) => {
    console.log(html);
    // (<object data="" type=""></object>)
    const inner = `<style>video[name="media"]{width:100%;}</style><object data="${html.data}" type="${html.type}" id="recurso"></object>`;
    console.log(inner);
    return inner;
    // const v = htmlToText(html,{wordwrap:130})
    // console.log(v);
    // const [inner,setInner] = createSignal(<>{html}</>);
    // console.log(inner());
    // return inner();
  };
//   let contentMain;
  
  const getNav = ()=>{
    const interval = setInterval(() => {
        const nav = document.querySelector(`nav[class="nav__header"]`);
        if(nav){
            clearInterval(interval);
            // console.log(nav.getBoundingClientRect(),contentMain());
            setMargin(nav.getBoundingClientRect().height +"px")
            // contentMain.style.marginTop = nav.getBoundingClientRect().height +"px";
            // setMargin("marginTop")
            // setStyle((prev)=>({...prev,
            //     ["margin-top"]:nav.getBoundingClientRect().height +"px"
            // }))
            // console.log(style());
        }
    },200)
  }
  onMount(()=>{
    // window.location.
    getNav()
  })
  return (
    <main
    
      class='containerMain'
      style={{
        ["background"]: `url(${IS_PROD ? URL_APP : URL_APP_TEST}${
          contenido()?.imagen_de_fondo?.data?.attributes?.url
        }) center center / cover no-repeat scroll border-box border-box rgb(124, 58, 237)`,
        // ["margin-top"]:`${memoLeccion()? margin():"margin"}`,
        ...style(),
      }}>
      <div class='overlay'></div>
      <Show when={contenido()}>
        <section
          class='container content'
          style={`
                ${
                  !memoLeccion()
                    ? "align-items: center;"
                    : "align-items: flex-start;"
                }
            `}>
          <header>
            <Switch>
              <Match when={contenido().type === "modulo"}>
                <h1>{contenido().Nombre_del_modulo}</h1>
                <MarkdownRenderer
                  content={contenido().descripcion}
                  clase='descripicion'
                />
                {/* <p>{contenido().descripcion}</p> */}
              </Match>
              <Match when={contenido().type === "curso"}>
                <h1>{contenido().nombre_del_curso}</h1>
                <MarkdownRenderer
                  content={contenido().descripcion}
                  clase='descripicion'
                />
              </Match>
              <Match when={contenido().type === "leccion"}>
                <h1>{contenido().nombre}</h1>
              </Match>
            </Switch>
          </header>
          <Show when={memoModulo() && !memoLeccion()}>
            <Show
              when={
                contenido() &&
                contenido().video_explicativo &&
                contenido().video_explicativo?.data
              }>
              <video
                src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                  contenido().video_explicativo?.data?.attributes.url
                }`}
                controlslist='nodownload'
                preload='auto'
                controls
                autoplay='false'
                oncontextmenu='return false;'></video>
            </Show>
            <Switch>
              <Match
                when={
                  contenido() && contenido().video_explicativo
                  // .data.attributes.mime.includes("image/")
                }>
                {/* <video src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                        contenido().video_explicativo?.data?.attributes.url
                    }`}></video>    */}
                <Image
                  hidden
                  src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                    contenido().Icono_de_la_leccion?.data?.attributes.url
                  }`}
                  rounded
                  style={`height: 50%;box-shadow: #2121341a 0 1px 4px;`}
                />
              </Match>
            </Switch>
          </Show>
          {/* <h1>{contenido().type === "modulo" ? contenido().Nombre_del_modulo : ""}</h1> */}
          {/* {console.log(contenido())} */}
        </section>
      </Show>

      <Show when={recurso()}>
        <aside class='containerBox__' ref={setContentMain}>
          <div class='recurso'>
            {recurso().codigo_HTML && (
              <section innerHTML={recurso().codigo_HTML}></section>
            )}
            <Show when={recurso().videos.data.length !== 0}>
              <For each={recurso().videos.data}>
                {(iframe) => {
                  return <iframe src={iframe.attributes.link}></iframe>;
                }}
              </For>
            </Show>
            {/* url_video_youtube */}
            <Show when={recurso().url_video_youtube}>
              <VideoYoutube video={recurso().url_video_youtube} />
            </Show>
            <Show when={recurso().recurso.data}>
              {/* <object data={`${IS_PROD ? URL_APP : URL_APP_TEST}${recurso().recurso.data.attributes.url}`} type={recurso().recurso.data.attributes.mime} controlslist="nodownload"></object> */}
              {/* <iframe srcdoc={`${setObjectMime({data:`${IS_PROD ? URL_APP : URL_APP_TEST}${recurso().recurso.data.attributes.url}`,type:recurso().recurso.data.attributes.mime})}`} frameborder="0"></iframe> */}

              <Switch>
                <Match
                  when={recurso().recurso.data.attributes.mime === "video/mp4"}>
                  <video
                    src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                      recurso().recurso.data.attributes.url
                    }`}
                    controlslist='nodownload'
                    preload='auto'
                    controls
                    autoplay='false'
                    oncontextmenu='return false;'></video>
                </Match>
              </Switch>
            </Show>
          </div>
          {/* {recurso().videos.data.length !==0 && ()}  */}

          <aside
            class='container content gap-4 '
            style={`text-align: justify;`}
            // ref={(e) => {
            //   console.log(
            //     containerBtn().getBoundingClientRect().height,
            //     "containerBtn"
            //   );
            //   //   console.log(e, "e");
            //   e.style.paddingBottom =
            //     containerBtn().getBoundingClientRect().height + 40 + "px";
            // }}
            >
            <MarkdownRenderer content={recurso().Contenido_de_texto_anterior} />
            <MarkdownRenderer
              content={recurso().Contenido_de_texto_posterior}
            />
          </aside>
          {/* productos relacionados */}
          <ProductosRelacionados ref={(e) => {
              console.log(
                containerBtn().getBoundingClientRect().height,
                "containerBtn"
              );
              //   console.log(e, "e");
              e.style.paddingBottom =
                containerBtn().getBoundingClientRect().height + 40 + "px";
            }}/>
        </aside>
        {/* fin aside */}
      </Show>

      <aside class='cards'>
        <section class='container containerBtn__' ref={setContainerBtn}>
          <Button onClick={() => window.history.back()}>Ir atras</Button>
          <Show when={contenido() && contenido().type}>
            <h3 style={`width: fit-content;`} class='mt-3 type'>
              {contenido().type === "curso"
                ? `Modulos`
                : contenido().type === "modulo"
                ? "Lecciones"
                : null}{" "}
              <i class='fi fi-ts-angle-down'></i>
            </h3>
          </Show>
        </section>
        <Section size='0'>
          <span class='btnSlideIzq'>
            <i class='bi bi-chevron-left'></i>
          </span>
          <div class='containerBox'>
            {/* <Show when={memoLeccion() && !memoContenido()}>
            <For each={contenido().contenido}>{
                (contenido,i)=>{
                    // console.log(contenido)
                    return (
                        <Icard  i={i}>

                            <Image 
                            // https://academia.alisadosdanys.top/api/uploads/contenido_ba88bafd6a.png
                            src={`https://academia.alisadosdanys.top/api/uploads/contenido_ba88bafd6a.png`} 
                            onClick={()=>navigate(`?modulo=${memoModulo()}&leccion=${memoLeccion()}&contenido=${contenido.id}`)}
                            />
                        </Icard>

                    )
                }
            }</For>
        </Show> */}

            <Show when={memoModulo() && !memoLeccion()}>
              <For each={lecciones().lecciones}>
                {(leccion, i) => {
                  return (
                    <Icard i={i}>
                      <Image
                        src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                          leccion.Icono_de_la_leccion.data?.attributes.url
                        }`}
                        onClick={() =>
                          navigate(
                            `?modulo=${memoModulo()}&leccion=${leccion.id}`
                          )
                        }
                      />
                    </Icard>
                  );
                }}
              </For>
            </Show>
            <Show when={!memoModulo()}>
              {/* {} */}

              <For each={cards()}>
                {(card, i) => {
                  // console.log(card)

                  // console.log(contenido());
                  return (
                    <Icard i={i}>
                      <Image
                        src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                          card.Icono_de_la_leccion.data.attributes.url
                        }`}
                        onClick={() => navigate(`?modulo=${card.id}`)}
                      />
                    </Icard>
                  );
                }}
              </For>
            </Show>
          </div>
          <span class='btnSlideDer'>
            <i class='bi bi-chevron-right'></i>
          </span>
        </Section>
      </aside>
    </main>
  );
}
const Icard = (props) => {
  const { i, children } = props;
  return <div class={`cardData card-${i()}`}>{children}</div>;
};
