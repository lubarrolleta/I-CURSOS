import { For, createEffect } from "solid-js";
import { Section } from "../Productos/ProductosStyles";
import MyCurso from "./MyCurso";
import { useNavigate } from "@solidjs/router";

export default function MyCursos(props) {
  const { myCursos, cursos } = props;
  console.log(myCursos(), "mycursos");
  createEffect(() => {
    console.log(cursos());
  });
  const navigate = useNavigate();
  return (
    <>
        <section class="container">

        </section>
        
        <h3 style={`margin-left: 43px;margin-bottom: 1rem;margin-top: 1rem;`}>Mis cursos</h3>
    <Section size='0'>
      <span class='btnSlideIzq'>
        <i class='bi bi-chevron-left'></i>
      </span>
      <div class='containerBox'>
        <For each={myCursos().cursos}>
          {(curso, i) => {
            console.log(curso);
            console.log(cursos()[curso.nombre_curso]);
            return (
              <Show
                when={
                  myCursos().type === "builderall"
                    ? cursos()[curso.nombre_curso]
                    : cursos()[curso.configuraciones_generales.nombre_del_curso]
                }>
                <MyCurso
                  navigate={navigate}
                  curso={
                    myCursos().type === "builderall"
                      ? cursos()[curso.nombre_curso]
                      : cursos()[
                          curso.configuraciones_generales.nombre_del_curso
                        ]
                  }
                  i={i}
                  type={myCursos().type}
                />
              </Show>
            );
          }}
        </For>
      </div>
      <span class='btnSlideDer'>
        <i class='bi bi-chevron-right'></i>
      </span>
    </Section>
    </>
    
  );
}
