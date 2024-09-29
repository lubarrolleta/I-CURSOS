import "./ProductosRelacionados.scss"
export default function ProductosRelacionados({ref}) {
    console.log(ref);
  return (
    <aside ref={ref} class="container container__ProductosRelacionados">
        <h3>Productos relacionados</h3>
    </aside>
  )
}
