import { useNavigate } from "@solidjs/router";
import { getToken, hasExpiredToken } from "./constantes";
import { useContextCustom } from "../contexto/useContextCustom";

export const ValidaUser = async (user) => {
    console.log("getUser");
    const context = useContextCustom();
    const { decrypt,me,login } = context();
    // console.log(redirectTo)
    const navigate = useNavigate();
    const session = sessionStorage.user;
    if (session) {
      const getToken = getToken();
      if (getToken) {
        const isValidoToken = hasExpiredToken(getToken.jwt);
        if (!isValidoToken) {
            login();
        //   setTimeout(() => {
        //       redirectTo ? navigate("/app?redirectTo="+redirectTo ) : null; 
              
        //   }, );
        } else {
          navigate("/i-cursos");
        }
      } else {
        navigate("/i-cursos");
      }
      // if(hasExpiredToken())
      // console.log(session,context());
      // console.log(decrypt(session))
      // const token = jwtDecode(decrypt(session).jwt)
      // console.log(token);
    } else {
      navigate("/i-cursos");
    }
  };