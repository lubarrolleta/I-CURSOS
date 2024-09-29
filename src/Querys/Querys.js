import { ID_ECOMMERCE, IS_PROD, URL_APP, URL_APP_TEST, authFetch, getToken, setEmailMinus } from "../constantes/constantes";
import qs from 'qs'

export const getAfiliado = async (id, setProductos) => {
  try {
    const consultaGlobal = async (page = 1) => {
      try {
        const url = `http://localhost:1337/api/afiliadoId/${id}?page=${page}`;
        const params = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: null,
        };
        const consulta = await fetch(url, params);
        if (consulta.ok) {
          const result = await consulta.json();
          return result;
        }
      } catch (error) {
        console.error(error);
        return undefined;
      }
    };
    const consulta = await consultaGlobal();
    if (consulta && consulta.length !== 0) {
      // console.log(consulta);
      let products = consulta;
      let list = [...products.affiliations];
      // console.log(list)
      setProductos && setProductos((prev)=>({
        ...prev,
        productos:list,
        type: "afiliado"
      }));

      for (
        products.meta.current_page;
        products.meta.current_page <= products.meta.last_page;
        products.meta.current_page++
      ) {
        const url = products.meta.links.find(
          (meta) => meta.label === "Next" || meta.label === "Próximo"
        );
        // console.log(url.url);
        if (url.url) {
          products = await consultaGlobal(
            new URL(
              url.url
            ).searchParams.get("page")
          );
          list = [...list, ...products.affiliations];
          setProductos && setProductos((prev)=>({
            ...prev,
            productos:list,
            type: "afiliado"
          }));
        }
        // console.log(list);

        if (products.meta.current_page == products.meta.last_page || !url.url) {
          // console.log(list);

          break;
        }
      }
      products.products = list;
      return products;
    }else{
        return []
    }
  } catch (error) {
    console.error(error, "error- getAfiliado");
    return false;
  }
};
export const getCursosId = async (id,logout)=>{
  try {
    const query = qs.stringify({
      populate:[
        "configuraciones_generales.Imagen_del_curso",
        "imagen_de_fondo",
        "modulos.video_explicativo",
        "modulos.Icono_de_la_leccion",
        "modulos.imagen_de_fondo",
        "modulos.lecciones",
        "modulos.lecciones.Icono_de_la_leccion",
        "modulos.lecciones.recurso",
        "modulos.lecciones.videos"
        // ""
      ],
      // pagination: {
      //   page: 1,
      //   pageSize: 100,
      // },
    })
    const url =`${IS_PROD ? URL_APP:URL_APP_TEST}/api/cursos/${id}?${query}`;
    const params ={
      method: "GET",
      headers: {
        "Content-Type": "application/json",

      }
    };
    const consulta = await authFetch(url,params,logout);
    return consulta;
  } catch (error) {
    console.error(error,"error- getcursoid");
    return undefined
  }
};
export const getCursos = async (setCursos,logout)=>{
  try {
    const query = qs.stringify({
      populate:[
        "configuraciones_generales.Imagen_del_curso",
        // "configuraciones_generales.Imagen_del_curso",
        "modulos.lecciones.recurso",
        "modulos.lecciones.vidoes",

        // ""
      ],
      pagination: {
        page: 1,
        pageSize: 100,
      },
    })
    const url =`${URL_APP}/api/cursos?${query}`;
    const params ={
      method: "GET",
      headers: {
        "Content-Type": "application/json",

      }
    };
    // const consulta = await authFetch(url,params,logout);
    const consulta = await fetch(url,params);
    const result = await consulta.json();

    console.log(result);
    setCursos &&
      setCursos(
        !result.error
          ? result.data.length !== 0
            ? result.data.reduce((acc, cu) => {
              console.log(cu,"cu")
                acc[cu.attributes.configuraciones_generales.nombre_del_curso.trim()] =
                  cu;
                return acc;
              }, {})
            : null
          : null
      );
  } catch (error) {
    console.log(error, "error- getconcursos");
    return undefined;
  }

}
export const getCursosUser = async (me,setCursosBuilderall,logout)=>{
  try {
    const {email} = me()
    const query = qs.stringify({
      sort:['fecha_compra:asc'],
      populate:{
        "users_permissions_user":{
          "fields":["email"],
          
          // filters:{
          //   "email":{
          //     "$eqi": setEmailMinus(props?.user?.email),
          //   }
          // }
        },
        curso:"*"
      },
      filters: {
        email_user: {
          $in: [setEmailMinus(email,"MAYUS"),setEmailMinus(email)],
        },
      },
      pagination: {
        page: 1,
        pageSize: 200,
      },
    }, {
      encodeValuesOnly: true, // prettify URL
    });
    const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/curso-comprados?${query}`;
   const  params = {
      method: "GET",
      headers:{
        "Content-Type": "application/json",
      }
    };
    const consulta = await authFetch(url,params,logout);
    // return setCursosBuilderall
    setCursosBuilderall && setCursosBuilderall(!consulta.message ? consulta : null);
    // console.log(consulta)
  } catch (error) {
    console.error(error,"error - getCursosUser");
    return undefined
  }
};
export const getTheme = async () => {
  try {
    const query = qs.stringify(
      {
        // sort:['fecha_compra:asc'],
        // filters:{
        //   curso_destacado:{
        //     modulos:{
        //       lecciones:{
        //         $in:[{es_gratis:true}]
        //       }
        //     }
        //   }
        // },
        populate: [
          "logo_del_menu",
          "curso_destacado",
          "curso_destacado.logo_del_curso",
          "curso_destacado.imagen_de_fondo",
          "curso_destacado.video_promocional",
          "curso_destacado.configuraciones_generales.Imagen_del_curso",
          "curso_destacado.modulos.lecciones.recurso",
          "curso_destacado.modulos.lecciones.videos",
        ],
        // populate:{
        //   logo_del_menu:"*",
        //   curso_destacado:
        //   // ["logo_del_curso"]
        //   {
        //     fields:["logo_del_curso","imagen_de_fondo","video_promocional","configuraciones_generales"],
        //     modulos:{
        //       lecciones:{
        //         fields:["recurso","videos"]
        //       }
        //     }
        //   }
        // }
        // filters: {
        //   email_user: {
        //     $in: [setEmailMinus(email,"MAYUS"),setEmailMinus(email)],
        //   },
        // },
        // pagination: {
        //   page: 1,
        //   pageSize: 200,
        // },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/temas/1?${query}`;
    const params = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const consulta = await fetch(url, params);
    const result = await consulta.json();
    return !result.error ? result : result.error;
  } catch (error) {
    console.error(error, "error- getTheme");
    return undefined;
  }
};
export const getProductForTag = async (tag,setProductos) => {
    try {
      // console.log(tag,'atg');
      const consultaGlobal = async (etiqueta, page = "1") => {
        try {
          const consulta = await fetch(
            `https://s-checkout.builderall.com/api/ecommerce/${ID_ECOMMERCE}/items?tag=${etiqueta}&page=${page}`
          );
          const result = await consulta.json();
          return result;
        } catch (error) {
          return null;
        }
      };
      const consulta = await consultaGlobal(tag);
      // console.log(consulta);
      if (consulta) {
        let products = consulta;
        let list = [...products.products];
        setProductos && setProductos((prev)=>({
            ...prev,
            productos:list,
            type: "productor"
          }));
        // console.log(products.products.length !== products.meta.total);
        // =========================================================
        // =========================================================
        // =========================================================
        for (
          products.meta.current_page;
          products.meta.current_page <= products.meta.last_page;
          products.meta.current_page++
        ) {
          products = await consultaGlobal(
            "cursos",
            new URL(
              products.meta.links.find((meta) => meta.label === "Next").url
            ).searchParams.get("page")
          );
  
          list = [...list, ...products.products];
          setProductos && setProductos((prev)=>({
            ...prev,
            productos:list,
            type: "productor"
          }));
  
          if (products.meta.current_page == products.meta.last_page) {
            // console.log(list);
  
            break;
          }
        }
        products.products = list;
        return products;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  export const loginGoogle = async (data) => {
    try {
        const url  =`${IS_PROD ? URL_APP : URL_APP_TEST}/api/auth/google/callback${data}`;
        const params = {
          method:"get",
          headers:{
            "Content-Type": "application/json",

          }
        }
        const consulta = await fetch(url,params);
        if(consulta.ok){

          const result = await consulta.json();
          return result;
        }else{
          return null
        }
        
    } catch (error) {
      console.log(error,"error login google");
      return undefined
    }
  };
  export const registerStrapi = async(data)=>{
    'use server'
    try {
      // http://localhost:1337
        const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/auth/local/register`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Authorization" : "Bearer " +TOKEN,
  
            // "Access-Control-Allow-Origin": [
            //     "self", "http://localhost:3000",
            //     "https://elevatedwellness.ezdapp.com/",
            // ],
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        
        return !result.error ? result : result.error;
    } catch (error) {
        console.log(error,"error al registrar");
        return undefined;
    }
  };
  export const loginStrapi = async(data)=>{
    // 'use server'
    try {
        const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/auth/local`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": [
            //     "self", "http://localhost:3000",
            //     "https://elevatedwellness.ezdapp.com/",
            // ],
          },
          body: JSON.stringify(data),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        
        return !result.error ? result : result.error;
    } catch (error) {
        console.log(error,"error al registrar");
        return undefined;
    }
  };
  export const recoverPassStrapi = async(data)=>{
    // 'use server'
    try {
        const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/auth/forgot-password`;
        const params = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": [
            //     "self", "http://localhost:3000",
            //     "https://elevatedwellness.ezdapp.com/",
            // ],
          },
          body: JSON.stringify({email:data.email}),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        
        return !result.error ? result : result.error;
    } catch (error) {
        console.log(error,"error al registrar");
        return undefined;
    }
  };
  // changePassStrapi
export const changePassStrapi = async(data)=>{
  // 'use server'
  try {
      const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/auth/reset-password`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": [
          //     "self", "http://localhost:3000",
          //     "https://elevatedwellness.ezdapp.com/",
          // ],
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(url, params);
      const result = await response.json();
      
      return !result.error ? result : result.error;
  } catch (error) {
      console.log(error,"error al changePassStrapi");
      return undefined;
  }
}
  export const getMeStrapi = async (user,logout)=>{
    // 'use server'
    try {
  
        const {jwt} = user ? user : getToken();
        const query = qs.stringify({
          populate: [
            // "roles_de_usuarios",
            "curso_comprados.curso",
            "cursos.configuraciones_generales.Imagen_del_curso",
            // "inscripcions",
            // "inscripcions.concurso",
            // 'asignacions.concurso',
            // 'asignacions.categoria',
            // 'asignacions.tema',
            // 'asignacions.ronda'
          ],
        });
        const url = `${IS_PROD ? URL_APP : URL_APP_TEST}/api/users/me?${query}`;
        const params = {
          method: "GET",
          headers: {
            // "Authorization" : "Bearer " +jwt,
            "Content-Type": "application/json",
            // "Access-Control-Allow-Origin": [
            //     "self", "http://localhost:3000",
            //     "https://elevatedwellness.ezdapp.com/",
            // ],
          },
        //   body: JSON.stringify(data),
        };
        // const [err,res] ?= await fetch(url,params) 
        const response = await authFetch(url, params,logout);

        // const response = await fetch(url, params);
        // const result = await response.json();
  
        // return !result.error ? result : result.error;
        return response
    } catch (error) {
        console.log(error,"error al registrar");
        return undefined;
    }
  };