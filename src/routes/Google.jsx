import { Button } from "solid-bootstrap";
import { IS_PROD, URL_APP, URL_APP_TEST } from "../constantes/constantes";

export default function Google() {

  return (
    <div>
        <Button href={`${IS_PROD ? URL_APP : URL_APP_TEST}/api/connect/google`}>google</Button>
        {/* api/auth/google/callback */}
    </div>
  )
}
