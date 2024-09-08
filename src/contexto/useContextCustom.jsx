import Context from "./Contexto";
import { useContext } from "solid-js";

export const useContextCustom = () => {
    // console.log("useContesxto")
    const context = useContext(Context);
    if (!context) {
        console.log("no existe contexto");
      throw new Error("no existe contexto");
    }
    return context;
  };