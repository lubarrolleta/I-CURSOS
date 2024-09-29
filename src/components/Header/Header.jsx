import { Button, Image } from "solid-bootstrap";
import { useContextCustom } from "../../contexto/useContextCustom";
import { Show, createEffect, onMount } from "solid-js";
import { IS_PROD, URL_APP, URL_APP_TEST } from "../../constantes/constantes";
import "./Header.scss";
import Auth from "../Auth/Auth";
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";
export default function Header() {
  const context = useContextCustom();
  const [nav, setNav] = createSignal(null);
  const [tema, setTema] = createSignal(null);

  const { logout, me, theme } = context();
  // console.log(context())
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
  } = context().modal;
  onMount(() => {
    console.log(nav().getBoundingClientRect());
    nav() &&
      (() => {
        const { height } = nav().getBoundingClientRect();
        nav() && (nav().style.marginTop = "-" + height + "px");
      })();
  });
  createEffect(() => {
    if (!theme.loading && theme() && theme().data) {
      setTema(theme()?.data?.attributes);
      // console.log(tema());
    }
  });
  let span;
  createEffect(() => {
    window.document.addEventListener('scroll', (e) =>{
        // console.log(e.target);
        console.log(Number(span.getBoundingClientRect().top.toString().replace("-","")),nav().getBoundingClientRect().height);
        if(Number(span.getBoundingClientRect().top.toString().replace("-","")) > nav().getBoundingClientRect().height){
            nav().classList.add("scroll")
            //  style.background = "red";
        }else{
            nav().classList.remove("scroll")

            // nav().style.background = "blue";
        }
        if(Number(span.getBoundingClientRect().top.toString().replace("-",""))===nav().getBoundingClientRect().height){

        }
    },false);
  });
  return (
    <>
    <span  ref={span} style={`display: inline-block;width: 100%;position: absolute;`}></span>
    <nav class='nav__header' ref={setNav}>
      <section class='container nav'>
        <A href={"/"}>
          <Image
            rounded
            src={`${
              tema()?.logo_del_menu?.data
                ? `${IS_PROD ? URL_APP : URL_APP_TEST}${
                    tema().logo_del_menu.data.attributes.url
                  }`
                : ""
            }`}
          />
        </A>
        <Show
          when={me()}
          fallback={
            <div>
              <Button
                onClick={() => {
                  setShowMoal(true);
                  setTitle(<h2>Area de miembros</h2>);
                  setContent(<Auth context={context} />);
                }}>
                Area de miembros
              </Button>
              {/* <Button as="a" href={`${IS_PROD ? URL_APP : URL_APP_TEST}/api/connect/google`}>Iniciar sesion</Button> */}
            </div>
          }>
          <Button
            onClick={() => {
              setShowMoal(true);
              setTitle(<h2>Perfil</h2>);
              setContent(
                <div>
                  <Button
                    onClick={() => {
                      logout();
                      setShowMoal(false);
                    }}>
                    Cerrar sesion
                  </Button>
                </div>
              );
            }}>
            Perfil
          </Button>
        </Show>
      </section>
    </nav>
    </>
  );
}
