/* @refresh reload */
import { render } from "solid-js/web";
import { Router,Route} from "@solidjs/router";
import "./index.css";
import App from "./App";
import Layout from "./components/Layout/Layout";
import Productos from "./components/Productos/Productos";

// const root = document.getElementById('root');
// data-tag="[I-CURSOS]"

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}
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
      'div[data-tag="[I-CURSOS]"],#root,#app'
    );
    if (root) {
      clearInterval(interval);
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
