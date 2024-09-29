import { IS_PROD, URL_APP, URL_APP_TEST } from "../../constantes/constantes";

export default function MyCurso(props) {
  const { curso, i ,type,navigate} = props;
  console.log(curso);
  const {nombre_del_curso,Imagen_del_curso} = curso.attributes.configuraciones_generales;
  const types = {
    ["builderall"]:{
        getImages(){
            console.log(curso.attributes.configuraciones_generales);
            const {url} = Imagen_del_curso.data.attributes;
            return `${IS_PROD ? URL_APP : URL_APP_TEST}${url}`; 
        },
    },
    ["cursos"]:{
        getImages(){
            console.log(curso.attributes.configuraciones_generales);
            const {url} = Imagen_del_curso.data.attributes;
            return `${IS_PROD ? URL_APP : URL_APP_TEST}${url}`; 
        },
    }
  }
  return (
    <div class={`cardData card-${i()}`} id={`card-${i()}`} onClick={() =>navigate(`/learn/${nombre_del_curso.replaceAll(" ","-")}/${curso.id}`)}>
      <img
        as="a"
            src={types[type].getImages()}
      //   src={component[productos().type](producto).img}
      //   alt={component[productos().type](producto).name}
      />
    </div>
  );
}
