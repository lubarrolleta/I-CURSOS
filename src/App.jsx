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

function App(props) {
  const params = useParams();
  // const context = useContextCustom();
  const [productos, setProductos] = createSignal({
    productos: [],
    type: params.afiliadoId ? "afiliado" : "productor",
  });
  const memo = createMemo(() => ({
    productos,
    setProductos,
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
  });
  return (
    <Context.Provider value={memo}>
      <GlobalStyles memoData={memo} />
      <header>header</header>
      <div class={styles.main}>{props.children}</div>
      <footer>footer</footer>
    </Context.Provider>
  );
}

export default App;
