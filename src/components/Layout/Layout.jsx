import { createMemo, createSignal } from "solid-js";
import Context from "../../contexto/Contexto";

export default function Layout(props) {
  
  return (
    <>
      <main>
        {props.children}

      </main>
      
    </>
  );
}
