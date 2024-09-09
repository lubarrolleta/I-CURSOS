import { useParams } from "@solidjs/router";
import logo from "./logo.svg";
import styles from "./App.module.css";
import {
  createEffect,
  createMemo,
  createResource,
  createSignal,
} from "solid-js";
import { getAfiliado, getProductForTag } from "./Querys/Querys";
import { useContextCustom } from "./contexto/useContextCustom";
import Context from "./contexto/Contexto";
import { GlobalStyles } from "./components/styles/stylesGlobal";
import { AddScript } from "./constantes/addScript";
import ModalCustom from "./components/Modal/ModalCustom";

function App(props) {
  const params = useParams();
  // const context = useContextCustom();
  // modal
  const [showModal,setShowMoal] = createSignal(false);
    const [title,setTitle] = createSignal('');
    const [content,setContent] = createSignal('');
    const [idModal,setIdModal] = createSignal("");
    const [roleModal,setRoleModal]= createSignal(null);
  const [modalFooter,setModalFooter]= createSignal(null);
  const [productos, setProductos] = createSignal({
    productos: [],
    type: params.afiliadoId ? "afiliado" : "productor",
  });
  const memo = createMemo(() => ({
    productos,
    setProductos,
    modal:{
      showModal,
      setShowMoal,
      title,
      setTitle,
      content,
      setContent,
      idModal,setIdModal,
      roleModal,setRoleModal,
      modalFooter,setModalFooter
    },
  }));
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
      <GlobalStyles memoData={memo} />
      <header>header</header>
      <div class={styles.main}>{props.children}</div>
      <footer>footer</footer>
    </Context.Provider>
  );
}

export default App;
