import { ID_ECOMMERCE } from "../constantes/constantes";

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