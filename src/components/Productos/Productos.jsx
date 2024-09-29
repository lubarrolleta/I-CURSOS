import {
  For,
  Match,
  Show,
  Switch,
  createEffect,
  createMemo,
  createResource,
  createSignal,
} from "solid-js";
import Context from "../../contexto/Contexto";
import { useContextCustom } from "../../contexto/useContextCustom";
import {
  Accordion,
  Badge,
  Button,
  Image,
  OverlayTrigger,
  Placeholder,
  Popover,
} from "solid-bootstrap";
import Producto from "./producto/Producto";
import { Section } from "./ProductosStyles";
import {
  IS_PROD,
  URL_APP,
  URL_APP_TEST,
  setDataUrl,
} from "../../constantes/constantes";
import { Portal } from "solid-js/web";
import { getCursos, getCursosUser } from "../../Querys/Querys";
import MyCursos from "../MyCursos/MyCursos";
import "./Productos.scss";
import MarkdownRenderer from "../MarkdownRenderer";
export default function Productos() {
  const context = useContextCustom();
  // console.log(<Context></Context>)
  console.log(context(), "context");
  const {
    sliderDer,
    setSliderDer,
    sliderIzq,
    setSliderIzq,
    containerCards,
    setContainerCards,
  } = context().contenedores;
  const {
    showPopover,
    setShowPopover,
    contentPopover,
    setContentPopover,
    dataPop,
    setDataPop,
    componentPopover,
  } = context().popover;
  createEffect(() => {
    //   console.log(sliderDer(),sliderIzq(),containerCards())
  });
  const {
    showModal,
    setShowMoal,
    title,
    setTitle,
    content,
    setContent,
    idModal,
    setIdModal,
    roleModal,
    setRoleModal,
    modalFooter,
    setModalFooter,
    hoverFunction,
    setHoverFunction,
    isDetail,
    setIsDetail,
    sizeModal,
    setSizeModal,
  } = context().modal;
  const { productos, logout, cursos, setCursos, me, theme } = context();
  console.log(me(), "me");
  const [Cursos] = createResource(() => getCursos(setCursos, logout));
  const [cursosBuilderall, setCursosBuilderall] = createSignal([]);
  createEffect(() => {
    console.log(Cursos());
    console.log(cursos(), "cursos");
    // cursos() && cursos().data.length !==0 &&
  });
  const onShowDetail = (data) => {
    // data.modulos.forEach(mod=>{

    //   mod.lecciones.forEach(lec=>{
    //     if(!lec.es_gratis){
    //       delete lec.recurso;
    //       delete lec.url_video_youtube;
    //       delete lec.videos;

    //     }
    //     return lec
    //   });
    //   return mod;
    // })
    console.log(data, "data");
    const {
      nombre_del_curso,
      configuraciones_generales,
      logo_del_curso,
      modulos,
    } = data;
    const { descripcion, Imagen_del_curso } = configuraciones_generales;
    setShowMoal(true);
    setIsDetail(true);
    setSizeModal("mm");
    setContent(
      <>
        <section class='detail__curso'>
          {/* <Image /> */}
          <div
            style={{
              background: `url(${IS_PROD ? URL_APP : URL_APP_TEST}${
                Imagen_del_curso.data?.attributes?.url
              }) center center / cover no-repeat scroll border-box border-box #141414`,
            }}>
            <video src=''></video>
            <aside class='aside__info'>
              <Image
                class='img__logo'
                src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                  logo_del_curso?.data?.attributes?.url
                }`}
              />
              <div class='containerBtns'>
                <Button>
                  <i class='fi fi-rr-lesson'></i> <span>Estudiar</span>
                </Button>
              </div>
            </aside>
          </div>
          <aside class='aside__content'>
            <div>
              <section></section>
              <section></section>
            </div>
            <p>{descripcion}</p>
            <div class='titles__content'>
              <h3>Modulos</h3>
              <h2>{nombre_del_curso}</h2>
            </div>
            <Accordion defaultActiveKey='0' flush>
              <For each={modulos}>
                {(modulo, i) => {
                  return (
                    <Accordion.Item eventKey={i()}>
                      <Accordion.Header>
                        <span></span>
                        {modulo.Nombre_del_modulo}
                        <span>
                          <i class='fi fi-rr-stopwatch'></i>{" "}
                          {modulo.lecciones
                            .map((d) => Number(d.duracion))
                            .reduce((acc, va) => acc + va, 0) /
                            60 +
                            " Hr"}
                        </span>
                      </Accordion.Header>

                      <Accordion.Body>
                        <MarkdownRenderer
                          content={modulo.descripcion}
                          class={"descripcion"}
                        />
                        <h3 class='title__lecciones'>
                          Lecciones <i class='fi fi-rr-lesson'></i>
                        </h3>
                        <Accordion defaultActiveKey='0' flush>
                          <For each={modulo.lecciones}>
                            {(leccion, y) => {
                              return (
                                <Accordion.Item eventKey={y()} class='gap-2'>
                                  <Accordion.Header>
                                    <span>▶️</span>
                                    <span>{leccion.nombre}</span>
                                    <span>
                                      <i class='fi fi-rr-stopwatch'></i>{" "}
                                      {Number(leccion.duracion) / 60} Hr.
                                    </span>
                                    <span>
                                      {leccion.es_gratis ? (
                                        <Badge bg='warning' text='dark'>
                                          Ver Gratis
                                          <i class='fi fi-tr-clapperboard-play'></i>
                                        </Badge>
                                      ) : null}
                                    </span>
                                  </Accordion.Header>
                                  <Accordion.Body>
                                    <Show
                                      when={leccion.es_gratis}
                                      fallback={
                                        <Button>Adquirir Curso</Button>
                                      }>
                                      <Switch>
                                        <Match when={leccion.recurso.data}>
                                          <video
                                            src={`${
                                              IS_PROD ? URL_APP : URL_APP_TEST
                                            }${
                                              leccion?.recurso?.data?.attributes
                                                .url
                                            }`}
                                            controlslist='nodownload'
                                            preload='auto'
                                            controls
                                            autoplay='false'
                                            oncontextmenu='return false;'></video>
                                        </Match>
                                        <Match
                                          when={
                                            leccion.videos.data.length !== 0
                                          }></Match>
                                        {/* <Match when={''}></Match> */}
                                      </Switch>
                                    </Show>
                                  </Accordion.Body>
                                </Accordion.Item>
                              );
                            }}
                          </For>
                        </Accordion>
                      </Accordion.Body>
                    </Accordion.Item>
                  );
                }}
              </For>

              {/* <Accordion.Item eventKey="1">
          
              <Accordion.Header>Accordion Item #2</Accordion.Header>
          
              <Accordion.Body>
          
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          
                culpa qui officia deserunt mollit anim id est laborum.
          
              </Accordion.Body>
          
            </Accordion.Item> */}
            </Accordion>
          </aside>
        </section>
      </>
    );
    // setTitle(<h2>{nombre_del_curso}</h2>);
  };
  const setCursosArray = (data) => {
    // console.log(data);
    // console.log(
    //   [...new Set(data.map((s) => s.id))].map((d) =>
    //     data.find((curso) => curso.id === d)
    //   )
    // );
    return [...new Set(data.map((s) => s.id))].map((d) =>
      data.find((curso) => curso.id === d)
    );
  };
  const [myCursos, setMyCursos] = createSignal(null);
  const memoUser = createMemo(() => {
    me() &&
      (async () => {
        await getCursosUser(me, setCursosBuilderall, logout);
        setMyCursos(
          me().cursos.length !== 0
            ? { type: "cursos", cursos: me().cursos }
            : {
                type: "builderall",
                cursos: cursosBuilderall()
                  ? setCursosArray([
                      ...me().curso_comprados,
                      ...cursosBuilderall().data,
                    ])
                  : me().curso_comprados,
                cu: cursosBuilderall().data,
              }
        );
      })();
  });
  createEffect(() => {
    // console.log(myCursos(),"myscursos")
  });
  const productor = (data) => {
    console.log(data);
  };
  const afiliado = (data) => {};
  const component = {
    ["afiliado"]: (data) => {
      // console.log(data);

      return {
        img: data.affiliable.versions[0].image.fullUrl,
        name: data.affiliable.versions[0].name,
      };
    },
    ["productor"]: (data) => {
      // console.log(data);
      return {
        img: data.versions[0].image.fullUrl,
        name: data.versions[0].name,
        video: setDataUrl(
          data.versions[0].description,
          "iframe.mediadelivery.net"
        ),
      };
    },
  };
  // const
  createEffect(() => {
    console.log(productos());
  });
  createEffect(() => {
    // console.log(component()[productos().type]("data"));
  });
  // console.log(productos())
  const [dateStart, setDateStart] = createSignal(null);
  const [dateEnd, setDateEnd] = createSignal(null);
  const [duration, setDuration] = createSignal(null);
  let interval;
  //   var dateStart;
  // var dateEnd;
  const [verVideo, setVerVideo] = createSignal(false);

  const [addPop, setAddPop] = createSignal(null);
  return (
    <>
      <main
        class='containerMain__destacado'
        style={{
          ["background"]: `url(${IS_PROD ? URL_APP : URL_APP_TEST}${
            theme()?.data?.attributes?.curso_destacado?.data?.attributes
              ?.imagen_de_fondo?.data?.attributes?.url
          }) center center / cover no-repeat scroll border-box border-box #141414`,
        }}>
        <div class='overlay'></div>
        <section class='contentDestacado container'>
          <Show
            when={
              !theme.loading &&
              theme() &&
              theme().data.attributes.curso_destacado
            }
            fallback={
              <Placeholder as='p' animation='wave'>
                <Placeholder xs={12} />
              </Placeholder>
            }></Show>
          <section class='content_destacado'>
            <Show
              when={
                theme()?.data?.attributes?.curso_destacado?.data.attributes
                  .logo_del_curso.data
              }
              fallback={
                <h2>
                  {
                    theme()?.data?.attributes?.curso_destacado?.data.attributes
                      .nombre_del_curso
                  }
                </h2>
              }></Show>
            <p class='description'>
              {
                theme()?.data?.attributes?.curso_destacado?.data.attributes
                  .configuraciones_generales.descripcion
              }
            </p>
            <div class='containerBtns'>
              <Button>
                <i class='fi fi-rr-lesson'></i> <span>Aprender</span>
              </Button>
              <Button
                variant='secondary'
                onClick={() =>
                  onShowDetail(
                    theme()?.data?.attributes?.curso_destacado?.data.attributes
                  )
                }>
                <i class='fi fi-rr-info'></i> <span>Conocer mas</span>
              </Button>
            </div>
          </section>
          <aside class='media_destacado'>
            <Show
              when={
                theme()?.data?.attributes?.curso_destacado?.data?.attributes
                  ?.video_promocional?.data
              }>
              <video
                controlslist='nodownload'
                preload='auto'
                controls
                autoplay='false'
                oncontextmenu='return false;'
                src={`${IS_PROD ? URL_APP : URL_APP_TEST}${
                  theme()?.data?.attributes?.curso_destacado?.data?.attributes
                    ?.video_promocional?.data?.attributes?.url
                }`}></video>
            </Show>
          </aside>
        </section>
        {/* ========= */}
        <div
          class='cursos__'
          style={`    
          /* height: fit-content; */
          /* margin-top: -250px;*/
          position: relative;
          z-index: 3;`}>
          <h3 style={`margin-left: 43px;margin-bottom: 1rem;margin-top: 1rem;`}>
            Adquiere mas cursos
          </h3>

          <Section size={"0"}>
            <span class='btnSlideIzq'>
              <i class='bi bi-chevron-left'></i>
            </span>
            <div class='containerBox'>
              <For
                each={
                  productos().productos.length !== 0 && productos().productos
                }>
                {(producto, i) => (
                  <div
                    class={`cardData card-${i()}`}
                    id={`card-${i()}`}
                    onMouseLeave={() => {
                      setDateEnd(new Date());
                      clearInterval(interval);
                      setDateStart(null);
                      setDateEnd(null);
                      setDuration(null);
                      var duration = (dateEnd() - dateStart()) / 1000;
                      // console.log(duration)
                      setVerVideo(false);
                    }}
                    onMouseEnter={(e) => {
                      setDateStart(new Date());
                      // console.log(dateStart());
                      // console.log(e.target.getBoundingClientRect());
                      const { width, height, top, left } =
                        e.target.getBoundingClientRect();
                      const containerPopular = document.querySelector(
                        `.containerPopular-${i()}`
                      );
                      // let duration;
                      interval = setInterval(() => {
                        setDuration(new Date());
                        // console.log((duration()-dateStart()) / 1000)
                        if ((duration() - dateStart()) / 1000 >= 0.6) {
                          clearInterval(interval);
                          setDateStart(null);
                          setDateEnd(null);
                          setDuration(null);
                          // console.log();
                          setTimeout(() => {
                            setVerVideo(true);
                            setShowMoal(true);
                            setHoverFunction(true);
                            setIsDetail(true);
                            setSizeModal("mm");

                            // =================================================================================================

                            // const p = (
                            //   <Portal mount={document.body}>
                            //     <div
                            //       class={`containerPopular-${i()} scale-up-center`}
                            //       style={{
                            //         width: width + "px",
                            //         height: height + "px",
                            //         position: "absolute",
                            //         top: top + "px",
                            //         left: left + "px",
                            //         background: "red",
                            //         ["border-radius"]: ".2vw",
                            //       }}
                            //       onMouseLeave={() => {
                            //         const containerPopular =
                            //           document.querySelector(
                            //             `.containerPopular-${i()}`
                            //           );
                            //         //  console.log(containerPopular);
                            //         containerPopular &&
                            //           (() => {
                            //             containerPopular.classList.replace(
                            //               "scale-up-center",
                            //               "scale-up-back"
                            //             );
                            //             setTimeout(() => {
                            //               document.body.contains(
                            //                 containerPopular
                            //               ) &&
                            //                 document.body.removeChild(
                            //                   containerPopular.parentNode
                            //                 );
                            //               setVerVideo(false);
                            //             }, 400);
                            //           })();
                            //       }}>
                            //       {/* hola */}
                            //       <iframe
                            //         style={{
                            //           ["aspect-ratio"]: "16/9",
                            //           width: "100%",
                            //         }}
                            //         frameborder='0'
                            //         allowfullscreen='true'
                            //         src={
                            //           component[productos().type](producto)
                            //             .video
                            //         }></iframe>
                            //       <Show
                            //         when={verVideo()}
                            //         fallback={console.log("no")}></Show>
                            //     </div>
                            //     {/* <h1>hola</h1> */}
                            //   </Portal>
                            // );
                            // =================================================================================================
                          });
                        }
                        // console.log(document.querySelector(`div[class*="containerPopular-"]`))
                        // const container = document.querySelector(`div[class*="containerPopular-"]`);

                        if (
                          !document.querySelector(
                            `div[class*="containerPopular-"]`
                          )
                        ) {
                          // clearInterval(interval);
                          // console.log(document.body.contains(containerPopular));
                        }
                      }, 100);

                      // console.log(containerPopular);
                      !containerPopular &&
                        (() => {
                          // console.log(containerPopular)
                          // setAddPop(<h1>hola</h1>)
                          //    (()=> {Portal({mount:document.body,children:<h1>componente</h1>})})()
                          // containerPopular.classList.add("scale-up-center")
                        })();
                      // setTimeout(() => {
                      //     // componentPopover().style.opacity ='1';
                      //     setShowPopover(true);
                      //     // console.log(pop().getClientRects());
                      //     setDataPop(e.target.getBoundingClientRect())
                      //     setContentPopover( <iframe
                      //         style={{
                      //           ["aspect-ratio"]: "16/9",
                      //           width: "100%",
                      //         }}
                      //         frameborder='0'
                      //         allowfullscreen='true'
                      //         src={component[productos().type](producto).video}></iframe>)
                      // }, 360);
                    }}
                    onTouchMove={() => {
                      console.log("touch");
                    }}>
                    <img
                      src={component[productos().type](producto).img}
                      alt={component[productos().type](producto).name}
                    />
                    {/* <div class={`containerData containerPopular-${i()}`}></div> */}
                  </div>
                )}
              </For>
            </div>
            <span class='btnSlideDer'>
              <i class='bi bi-chevron-right'></i>
            </span>
          </Section>
          {/* <Show when={addPop()}>
        <Portal mount={document.body}>
            <h1 id="h1"></h1>
        </Portal>
    </Show> */}
          <section class={`populares`}>
            {/* <div class=''> */}
            {/* </div> */}
          </section>
          <Show when={myCursos() && cursos()}>
            <MyCursos myCursos={myCursos} cursos={cursos} />
          </Show>
        </div>
        <hr class='linea' />
      </main>
      <div class='mainView' hidden>
        <div class='lolomo is-fullbleed'>
          <h1 class='visually-hidden'>i cursos</h1>
          <div class='volatile-billboard-animations-container'>
            <div class='billboard-row'>
              <div class='billboard billboard-pane billboard-originals trailer-billboard'>
                <div class='billboard-motion dismiss-mask'>
                  <div class='motion-background-component bottom-layer full-screen'>
                    <div class='hero-image-wrapper'>
                      <img
                        class='hero static-image image-layer'
                        src='https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABes_NnBj3atXwD8PgPhfVR6YzTMHBs-7PCP-qiAEsLPfZ5uHv1Ft4664--TS9pZ9zQxe0YtsuImIlCt50UnAFxhxLGi-HlWUR0pm.webp?r=2a3'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
                <div class='fill-container'>
                  <div class='info meta-layer'>
                    <div class='logo-and-text meta-layer'>
                      <div
                        class='titleWrapper'
                        style='transform-origin: left bottom; transform: scale(1) translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms;'>
                        <div class='billboard-title'>
                          <img
                            alt='The Sinner'
                            class='title-logo'
                            src='https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW4WXvauX1_OL4kWIP5zZvhxXqNlriXvoPazwr_BbtApZ7bqjAJ_mkLmNqVA2F6j0pIWTPFZG6TrKYvNPERwCAqHXICUJdOiy1nE_9rS4kOzkn0isyx2G02EGcUN_v5RTveaaDHCAQidAxzuZGjtXmGx2x7fQHiJ4EoLIGynOiN_wFcxE9cUZQ.webp?r=5b0'
                            title='The Sinner'
                          />
                        </div>
                      </div>
                      <div
                        class='info-wrapper'
                        style='transform: translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms; opacity: 1;'>
                        <div
                          class='info-wrapper-fade'
                          style='opacity: 1; transition-duration: 600ms; transition-delay: 200ms;'>
                          <div class='episode-title-container'>
                            <div class='synopsis-fade-container'>
                              <div class='synopsis no-supplemental'>
                                <div class='ptrack-content'>
                                  Bill Pullman was nominated for a SAG Award for
                                  playing Harry Ambrose, a somber police
                                  detective who works to uncover the motives of
                                  unlikely criminals.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* btns */}
                      <div class='billboard-links button-layer forward-leaning'>
                        <a
                          href='/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C&amp;ad=true'
                          class='visually-hidden ad-playlink'
                          data-uia='play-button-a11y'
                          role='link'
                          aria-label='Play - start with Audio Description turned on'>
                          <span class='visually-hidden'>&nbsp;</span>
                        </a>
                        <a
                          href='/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C'
                          class=' playLink isToolkit'
                          data-uia='play-button'
                          role='link'
                          aria-label='Play'>
                          <button
                            class='color-primary hasLabel hasIcon ltr-podnco'
                            tabindex='-1'
                            type='button'>
                            <div class='ltr-1st24vv'>
                              <div
                                class='medium ltr-iyulz3'
                                role='presentation'>
                                <svg
                                  xmlns='http://www.w3.org/2000/svg'
                                  fill='none'
                                  role='img'
                                  viewBox='0 0 24 24'
                                  width='24'
                                  height='24'
                                  data-icon='PlayStandard'
                                  aria-hidden='true'>
                                  <path
                                    d='M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z'
                                    fill='currentColor'></path>
                                </svg>
                              </div>
                            </div>
                            <div class='ltr-1npqywr' style='width: 1rem;'></div>
                            <span class='ltr-1vh9doa'>Play</span>
                          </button>
                        </a>
                        <button
                          class='color-secondary hasLabel hasIcon ltr-18ezbm2'
                          data-uia='billboard-more-info'
                          type='button'>
                          <div class='ltr-1st24vv'>
                            <div class='medium ltr-iyulz3' role='presentation'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                role='img'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'
                                data-icon='CircleIStandard'
                                aria-hidden='true'>
                                <path
                                  fill-rule='evenodd'
                                  clip-rule='evenodd'
                                  d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                                  fill='currentColor'></path>
                              </svg>
                            </div>
                          </div>
                          <div class='ltr-1npqywr' style='width: 1rem;'></div>
                          <span class='ltr-1vh9doa'>More Info</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* populares */}
          <div
            class='lolomoRow lolomoRow_title_card ltr-0'
            style={`display:none;`}>
            <h2 class='rowHeader ltr-0'>
              <a href='' class='rowTitle ltr-0'>
                <div class='row-header-title'>Populares</div>
              </a>
            </h2>
            <div class='rowContainer rowContainer_title_card' id='row-1'>
              <div class='ptrack-container'>
                <div class='rowContent slider-hover-trigger-layer'>
                  <div class='slider'>
                    <span
                      class='handle handlePrev active'
                      tabindex='0'
                      role='button'
                      aria-label='See previous titles'>
                      <b class='indicator-icon icon-leftCaret'></b>
                    </span>
                    <div class='sliderMask showPeek'>
                      <div
                        class='sliderContent row-with-x-columns'
                        style='-webkit-transform: translate3d(0%, 0px, 0px);-ms-transform: translate3d(0%, 0px, 0px);transform: translate3d(0%, 0px, 0px)'>
                        <For
                          each={
                            productos().productos.length !== 0 &&
                            productos().productos
                          }>
                          {(producto, i) => (
                            <>
                              <Producto
                                i={i}
                                producto={producto}
                                productos={productos}
                              />
                            </>
                          )}
                        </For>
                      </div>
                    </div>
                    <span
                      class='handle handleNext active'
                      tabindex='0'
                      role='button'
                      aria-label='See more titles'>
                      <b class='indicator-icon icon-rightCaret'></b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
