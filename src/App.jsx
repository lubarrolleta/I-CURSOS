import { useNavigate, useParams, useSearchParams } from "@solidjs/router";
import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  createEffect,
  createMemo,
  createResource,
  createSignal,
} from "solid-js";
import { getAfiliado, getMeStrapi, getProductForTag, getTheme, loginGoogle } from "./Querys/Querys";
import { useContextCustom } from "./contexto/useContextCustom";
import Context from "./contexto/Contexto";
import { GlobalStyles } from "./components/styles/stylesGlobal";
import { AddScript } from "./constantes/addScript";
import ModalCustom from "./components/Modal/ModalCustom";
import Popover from "./components/Popever/Popover";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.scss"
import { Toaster ,toast} from "solid-toast";
import Auth from "./components/Auth/Auth";
function App(props) {
  const params = useParams();
  // const context = useContextCustom();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  // console.log(searchParams.id_token)
  const [theme]=createResource(()=>getTheme())
  const [cursos,setCursos] = createSignal(null);
  const tokenMemo= createMemo(()=>searchParams.code)

  const [code, setCode] = createSignal(null)
  
  const [me,setMe] = createSignal(null);

  
  // modal
  const [showModal,setShowMoal] = createSignal(false);
    const [title,setTitle] = createSignal('');
    const [content,setContent] = createSignal('');
    const [idModal,setIdModal] = createSignal("");
    const [roleModal,setRoleModal]= createSignal(null);
  const [modalFooter,setModalFooter]= createSignal(null);
  const [hoverFunction,setHoverFunction] = createSignal(null);
  const [sizeModal,setSizeModal] = createSignal("xl");
  
  // slider
  const [sliderDer,setSliderDer]= createSignal(null);
  const [sliderIzq,setSliderIzq]= createSignal(null);
  const [containerCards,setContainerCards] = createSignal(null);
  // pop
  const [showPopover,setShowPopover] = createSignal(false);
  const [contentPopover,setContentPopover] = createSignal(null)
  const [dataPop,setDataPop] = createSignal(null)
  const [componentPopover,setComponentPopover] = createSignal(null)
  const [isDetail,setIsDetail] = createSignal(null)

  // user
  const logout = () => {
    createEffect(async()=>{

      delete sessionStorage.user;
      delete sessionStorage.me;
      setMe(null)
      toast("Sesion cerrada con exito!");

      setTimeout(() => {
        window.location.reload();
        // navigate("/i-cursos");
      }, 1000);
    })
  };
  
  const login = async(user) => {
    user && (window.sessionStorage.user = JSON.stringify(user));
    const getMe = await getMeStrapi(user,logout);
    if(!getMe.message) {
      console.log("me")
      sessionStorage.me = JSON.stringify(getMe);
      setMe(getMe);
      setShowMoal(false);
      navigate(window.location.pathname+window.location.search);//revisar

    }else{
      logout();
    }
  };
  const idToken= createMemo(()=>searchParams.id_token)
  createEffect(() => {
    // console.log(idToken(), "hhhh");
    idToken() &&
      loginGoogle(window.location.search)
        .then(async (r) => {
          // console.log(r);
          window.sessionStorage.user = JSON.stringify(r);
          await login(r);
          delete window.localStorage.typeSesion;
          navigate(window.location.pathname);
          toast("Inicio de sesion exitoso");
        })
        .catch((error) => {
          console.log(error);
          logout();
        });
  });
  const memoUser = createMemo(()=>{
    window.sessionStorage.user && login()
  })
  const [productos, setProductos] = createSignal({
    productos: [],
    type: params.afiliadoId ? "afiliado" : "productor",
  });
 const interval =  setInterval(() => {
    const con = document.querySelector('.containerBox');
    if(con){
      clearInterval(interval);
      setSliderDer(document.querySelector('.btnSlideDer'))
      setSliderIzq(document.querySelector('.btnSlideIzq'))
      setContainerCards(document.querySelector('.containerBox'))

    }
//       ?.getBoundingClientRect()
// ?.getBoundingClientRect()
// ?.getBoundingClientRect()
  }, 200);
  

  createEffect(()=>{
  })
  
  const memo = createMemo(() => ({
    productos,
    setProductos,
    logout,
    login,
    me,setMe,
    navigate,
    cursos,setCursos,
    contenedores:{
      sliderDer,setSliderDer,
      sliderIzq,setSliderIzq,
      containerCards,setContainerCards
    },
    popover:{
      showPopover,setShowPopover,
      contentPopover,setContentPopover,
      dataPop,setDataPop,
      componentPopover,setComponentPopover
    },
    modal:{
      showModal,
      setShowMoal,
      title,
      setTitle,
      content,
      setContent,
      idModal,setIdModal,
      roleModal,setRoleModal,
      modalFooter,setModalFooter,
      hoverFunction,setHoverFunction,
      isDetail,setIsDetail,
      sizeModal,setSizeModal
    },
    theme
  }));
  createEffect(() => {
    // console.log(searchParams.code);
    if (tokenMemo() && window.localStorage.recoveryPassOn) {
      window.localStorage.code = tokenMemo();
      setCode(tokenMemo())
      setShowMoal(true);
      setTitle(<h2>Area de miembros</h2>);
      setContent(<Auth context={memo} tipo={"changePass"} codeSend={code} />)

      // navigate(
      //   `?code=${window.localStorage.code}${window.localStorage.recoveryPassOn}`
      // );
      // setSearchParams(window.localStorage.recoveryPassOn)
    }
  });
  // console.log(context())
  const [tag, setTag] = createSignal("cursos");

  createEffect(() => {
    console.log(params.afiliadoId);
  });
  const [afiliadoPage] = createResource(
    params.afiliadoId
      ? () => getAfiliado(params.afiliadoId, setProductos)
      : () => getProductForTag(tag(), setProductos)
  );
  createEffect(() => {
    // console.log(afiliadoPage());
  });
  createEffect(() => {
    // console.log(productos());
    // const root = document.querySelector(
    //   'div[data-tag="[I-CURSOS]"],#root,#app'
    // );
    // console.log(root)
  });
  new AddScript().setScript();

  return (
    <Context.Provider value={memo}>
      <ModalCustom/>
      {/* <GlobalStyles memoData={memo} /> */}
      <Header/>
      <div class={styles.main + " app"}>{props.children}</div>
      <Footer/>
      {/* <footer></footer> */}
      <Toaster position="top-center"
        gutter={8}/>
      <Popover/>
    </Context.Provider>
  );
}

export default App;
