import { jwtDecode } from "jwt-decode";

export const ID_ECOMMERCE = "ucQa5uXzYl8TRIWX";
export const IS_PROD = true;
export const URL_APP = "https://academia.alisadosdanys.top/api"
export const URL_APP_TEST = "http://localhost:1337"
export const setEmailMinus = (e, type) => {
  const valor = [...e];
  const start = e[0];
  valor.shift();
  let email;
  if (type === "MAYUS") {
    email = [start.toUpperCase(), ...valor].join("");
  } else {
    email = [start.toLowerCase(), ...valor].join("");
  }
  // console.log(email,"EMAIL");
  return email;
};
export const setDataUrl = (data, urlSearch) => {
    const reg = /(https|data|http).*?>/g;
    const url = data
      .match(reg)
      ?.find((description) => description.includes(urlSearch) && description)
      ?.replace('">', "")?.replaceAll("amp;","")?.replace("autoplay=true","autoplay=false")?.replace("muted=false","muted=true")
    //   ?.replaceAll("'/>", "");
    // console.log(url);
    return url;
    // https://api.snipper.top/api/api/codes-builderall
  };
  export function hasExpiredToken(token) {
    const tokenDecode = jwtDecode(token);
    const expireDate = tokenDecode.exp * 1000;
    const currentData = new Date().getTime();
    // console.log(currentData - expireDate)
    if (currentData > expireDate) {
      return true;
    }
    return false;
  }

export function getToken() {
      try {
          return window.sessionStorage.user && JSON.parse(window.sessionStorage.user);
          // new Encrypt(import.meta.env.VITE_PASS_ENCRYPT,sessionStorage.userId).decrypt(); 
        
      } catch (error) {
        return undefined;
      }  
}
export async function authFetch(url, params,logout) {
    // const context = useContextCustom();
    // console.log(context);
    // const {logout}= context
    // console.log(useLocation(),"LOCATOION")
    // const route = useNavigate();
    // console.log(params);
    const token = getToken();
    // console.log(token);
    if (!token) {
        // usser no logeado
        logout();
        // route("/");
    } else {
        if (hasExpiredToken(token.jwt)) {
            // token caducado
            logout();
            // route("/");
        } else {
            const paramsTemp = {
                ...params,


                headers: {
                    ...params?.headers,

                    Authorization : `Bearer ${token.jwt} `,
                },
            };
            try {
                const response = await fetch(url, paramsTemp);
                // console.log(paramsTemp);
                const result = await response.json();
                // console.log(response);
                
                return !result.error ? result : result.error;
            } catch (error) {
                return error;
            }
        }
    }
}