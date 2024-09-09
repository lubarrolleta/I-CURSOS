/* @refresh reload */
import { render } from "solid-js/web";
import { Router,Route} from "@solidjs/router";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout/Layout";
import Productos from "./components/Productos/Productos";

const root = document.getElementById('app');
// data-tag="[I-CURSOS]"


const routes = [
  {
    path: "/i-cursos",
    component: App,
    children: [
      {
        path: ["/","/:afiliadoId"],
        component: Productos
      },
    ],
  },
  // {
  //   path: "/i-cursos/:afiliadoId",
  //   component: ()=>(<Layout/>),
  // },
  // import("/routes/index.js"),
];
setTimeout(() => {
  let contador = 0;
  const interval = setInterval(() => {
    const root = document.querySelector(
      // 'div[data-tag="[I-CURSOS]"] div[element="PanelComponent"]'
      '#app'
    );
    if (root) {
      clearInterval(interval);
      root && root.querySelector('div[id="editor-content"]').setAttribute("style","display: none !important;")
      render(() => <Router 
      // root={App}
      >
        {routes}
        {/* <Route path="/i-cursos" component={App}>
          <Route path={["/","/:afiliadoId"]} component={Productos}/>
        </Route> */}
        </Router>, root);
    }
    if (contador >= 100) clearInterval(interval);
  }, 200);
});

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}