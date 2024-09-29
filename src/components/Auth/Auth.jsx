import { Button, FloatingLabel, Form, Spinner } from "solid-bootstrap";
import { Match, Switch, createEffect, createMemo, createSignal } from "solid-js";
import "./Auth.scss";
import { A, useSearchParams } from "@solidjs/router";
import { IS_PROD, URL_APP, URL_APP_TEST } from "../../constantes/constantes";
import {
  changePassStrapi,
  loginStrapi,
  recoverPassStrapi,
  registerStrapi,
} from "../../Querys/Querys";
import { toast } from "solid-toast";
export default function Auth({ context, tipo, codeSend }) {
  const types = {
    ["login"]: {},
    ["register"]: {},
    ["recovery"]: {},
  };
  const [loading, setLoading] = createSignal(false);
  const [code, setCode] = createSignal(codeSend ? codeSend() : null);
  const [pass, setPass] = createSignal(null);
  const [passIsValid, setPassIsValid] = createSignal(false);
  //   const context = useContextCustom();
//   console.log(context().navigate);
  const { login } = context();
  const [type, setType] = createSignal(tipo || "login");

  const onLogin = async (e) => {
    console.log("onlogin");
    e.preventDefault();
    const data = Object.fromEntries(new FormData(document.forms["login"]));
    if (data.identifier.length !== 0 && data.password.length !== 0) {
      setLoading(true);
      const loginPost = await loginStrapi(data);
    //   console.log(loginPost);
      if (!loginPost.message) {
        setLoading(false);
        toast.success("Inicio de sesion exitoso.");
        // console.log(decrypt(sessionStorage.userId));
        login(loginPost);
        delete window.localStorage.typeSesion;

        // sessionStorage.userId = JSON.stringify(loginPost);
        // toast.success("Login exitoso")
        // teschat@snipper.top
        setTimeout(() => {
          // navigate('/admin');
        }, 1500);
      } else {
        setLoading(false);
        toast.error(loginPost.message);
      }
    } else {
      toast.error("Campos vacios");
      setLoading(false);
    }
  };
  let btnLoginGoogle;
  const onInitGoogle = (e) => {
    console.log(e.target, "init");
    const type = e.target.getAttribute("typedata");
    console.log(e.target.getAttribute("typedata"));
    window.localStorage.typeSesion = type;
    // const btn = (<a href={`${IS_PROD ? URL_APP : URL_APP_TEST}/api/connect/google`}>google</a>);
    // console.log(btn)
    setTimeout(() => {
      btnLoginGoogle.click();
    }, 200);
  };
  const onRegister = async (e) => {
    console.log("onRegister");
    e.preventDefault();
    const data = Object.fromEntries(new FormData(document.forms["registro"]));
    console.log(data);
    setLoading(true);
    // identificador:`${data.email} ${1}.Participante` concursos:[1],
    if (
      //   data.username.length !== 0 &&
      data.password.length !== 0 &&
      data.email.length !== 0
    ) {
      // console.log({...data,['roles_de_usuario']:1});
      const registro = await registerStrapi({
        ...data,
        // ['roles_de_usuarios']:[1],['asignacions']:[1]
        ["username"]: data.email,
      });
      if (!registro.message) {
        setLoading(false);
        login(registro);
        toast.success("Registro exitoso");
        delete window.localStorage.typeSesion;
      } else {
        toast.error(registro.message);
        setLoading(false);
      }
    } else {
      toast.error("Campos vacios");
      setLoading(false);
    }

    // registerStrapi
  };
  // onRecoveryPass
  const onRecoveryPass = async (e) => {
    console.log("onRecoveryPass");
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(document.forms["recoveryPass"])
    );
    if (data.email.length !== 0) {
      setLoading(true);
      const recovery = await recoverPassStrapi(data);
      console.log(recovery);
      if (!recovery.message) {
        setLoading(false);
        // ?code=b8f46f0942709a91017bfb5db17be913769d77f0429fa9612707fe8beef2da062b1c54f601b5188d604eb23cbbd27746619401b0d79dfb0454002aa4ff4114ee
        window.localStorage.recoveryPassOn = "true";
        toast("revise su correo");
      } else {
        setLoading(false);
        toast.error(recovery.message);
      }
    } else {
      setLoading(false);
      toast.error("Campo de correo vacio.");
    }
  };
  // onChangePass
  const onChangePass = async (e) => {
    console.log("onChangePass");
    e.preventDefault();
    const data = Object.fromEntries(new FormData(document.forms["changePass"]));
    console.log(data);
    setLoading(true);
    if (
      data.code.length !== 0 &&
      data.password.length !== 0 &&
      data.passwordConfirmation.length !== 0
    ) {
      if (data.passwordConfirmation === data.password) {
        const changePass = await changePassStrapi(data);
        if (!changePass.message) {
          // delete window.localStorage.recoveryPassOn
          setLoading(false);
          login(changePass);
          toast.success("Cambio de contrasena exitoso.");
        } else {
          toast.error(changePass.message);
        }
      } else {
        toast.error("las contrasenas no coiniciden");
        setLoading(false);
      }
    } else {
      toast.error("campos vacios");
      setLoading(false);
    }
  };
  // validaPass
  const validaPass = (e) => {
    const target = e.target;
    // console.log(target)
    if (target.name === "password") {
      setPass(target.value);
    } else {
      if (target.value === pass()) {
        // console.log(pass());
        target.setAttribute("status", true);
        setPassIsValid(false);
      } else {
        target.setAttribute("status", false);
        setPassIsValid(true);
      }
    }
  };
//   const [searchParams, setSearchParams] = useSearchParams();

//   const tokenMemo= createMemo(()=>window.location.search)

  createEffect(() => {
    const code = new URLSearchParams(window.location.search);
    if (code.get("code") && window.localStorage.recoveryPassOn) {
      setCode(code.get("code"));
      setType("changePass");
    }
    // if(tokenMemo()){
    // }
  });
  return (
    <div>
      <Switch>
        <Match when={type() === "login"}>
          <section class='formLoginContainer'>
            <h3>Inicio de sesión</h3>
            <Form onSubmit={onLogin} name='login'>
              <Form.Group class='mb-3' controlId='username'>
                <FloatingLabel
                  controlId='identifier'
                  label='name@example.com'
                  class='mb-3'>
                  <Form.Control
                    type='email'
                    name='identifier'
                    id='identifier'
                    placeholder='username | name@example.com'
                    disabled={loading()}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group class='mb-3' controlId='password'>
                <FloatingLabel
                  controlId='password'
                  label='password'
                  class='mb-3'>
                  <Form.Control
                    type='password'
                    name='password'
                    id='password'
                    placeholder='username | name@example.com'
                    disabled={loading()}
                    maxLength='8'
                  />
                </FloatingLabel>
              </Form.Group>
              <section class='containerBtnsAuth'>
                <Button disabled={loading()} type='submit'>
                  {loading() ? (
                    <Spinner animation='border' size='sm' />
                  ) : (
                    "Login"
                  )}
                </Button>
                <Button typedata='login' onClick={onInitGoogle}>
                  <svg
                    typedata='login'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    class='LgbsSe-Bz112c'>
                    <g>
                      <path
                        fill='#EA4335'
                        d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'></path>
                      <path
                        fill='#4285F4'
                        d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'></path>
                      <path
                        fill='#FBBC05'
                        d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'></path>
                      <path
                        fill='#34A853'
                        d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'></path>
                      <path fill='none' d='M0 0h48v48H0z'></path>
                    </g>
                  </svg>
                  <span typedata='login'>Iniciar sesion</span>
                </Button>
                <a
                  ref={btnLoginGoogle}
                  href={`${
                    IS_PROD ? URL_APP : URL_APP_TEST
                  }/api/connect/google`}
                  hidden>
                  google
                </a>
              </section>
            </Form>
          </section>
        </Match>
        <Match when={type() === "register"}>
          <section class='formLoginContainer'>
            <h3>Registro</h3>
            <Form onSubmit={onRegister} name='registro'>
              <Form.Group class='mb-3' controlId='username'>
                <FloatingLabel
                  controlId='identifier'
                  label='name@example.com'
                  class='mb-3'>
                  <Form.Control
                    type='email'
                    name='email'
                    id='identifier'
                    placeholder='username | name@example.com'
                    disabled={loading()}
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group class='mb-3' controlId='password'>
                <FloatingLabel
                  controlId='password'
                  label='password'
                  class='mb-3'>
                  <Form.Control
                    type='password'
                    name='password'
                    id='password'
                    placeholder='username | name@example.com'
                    disabled={loading()}
                    maxLength='8'
                  />
                </FloatingLabel>
              </Form.Group>
              <section class='containerBtnsAuth'>
                <Button disabled={loading()} type='submit'>
                  {loading() ? (
                    <Spinner animation='border' size='sm' />
                  ) : (
                    "Registrar"
                  )}
                </Button>
                <Button typedata='register' onClick={onInitGoogle}>
                  <svg
                    typedata='register'
                    version='1.1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    class='LgbsSe-Bz112c'>
                    <g>
                      <path
                        fill='#EA4335'
                        d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'></path>
                      <path
                        fill='#4285F4'
                        d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'></path>
                      <path
                        fill='#FBBC05'
                        d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'></path>
                      <path
                        fill='#34A853'
                        d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'></path>
                      <path fill='none' d='M0 0h48v48H0z'></path>
                    </g>
                  </svg>
                  <span typedata='register'>Registrate</span>
                </Button>
                <a
                  ref={btnLoginGoogle}
                  href={`${
                    IS_PROD ? URL_APP : URL_APP_TEST
                  }/api/connect/google`}
                  hidden>
                  google
                </a>
              </section>
            </Form>
          </section>
        </Match>
        <Match when={type() === "recoveryPass"}>
          <section class='formLoginContainer'>
            <h3>Recuperar contraseña</h3>
            <Form onSubmit={onRecoveryPass} name='recoveryPass'>
              <Form.Group class='mb-3' controlId='username'>
                <FloatingLabel
                  controlId='identifier'
                  label='name@example.com'
                  class='mb-3'>
                  <Form.Control
                    type='email'
                    name='email'
                    id='identifier'
                    placeholder='username | name@example.com'
                    disabled={loading()}
                  />
                </FloatingLabel>
              </Form.Group>

              <section class='containerBtnsAuth'>
                <Button disabled={loading()} type='submit'>
                  {loading() ? (
                    <Spinner animation='border' size='sm' />
                  ) : (
                    "Recuperar contraseña"
                  )}
                </Button>
              </section>
            </Form>
          </section>
        </Match>
        <Match when={type() === "changePass"}>
          <section class='formLoginContainer'>
            <h3>Cambiar contraseña</h3>

            <Form
              name='changePass'
              class='formLoginContainer'
              onSubmit={onChangePass}>
              <Form.Group class='mb-3' controlId='code'>
                <FloatingLabel controlId='code' label='code' class='mb-3'>
                  <Form.Control
                    readOnly
                    type='text'
                    name='code'
                    id='code'
                    placeholder='username | name@example.com'
                    value={code()}
                    disabled={loading()}
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group class='mb-3' controlId='password'>
                <FloatingLabel
                  controlId='password'
                  label='Password'
                  class='mb-3'>
                  <Form.Control
                    type='text'
                    name='password'
                    id='password'
                    placeholder='password'
                    disabled={loading()}
                    onChange={validaPass}
                    required
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group
                class='mb-3'
                controlId='passwordConfirmation'
                hasValidation>
                {/* <InputGroup hasValidation>

          </InputGroup> */}
                <FloatingLabel
                  controlId='passwordConfirmation'
                  label='password Confirmation'
                  class='mb-3'>
                  <Form.Control
                    type='text'
                    name='passwordConfirmation'
                    id='passwordConfirmation'
                    placeholder='passwordConfirmation | name@example.com'
                    disabled={loading()}
                    onChange={validaPass}
                    required
                    isInvalid={passIsValid()}
                  />
                </FloatingLabel>
                <Form.Control.Feedback
                  type='invalid'
                  style={{
                    display: passIsValid() ? "block" : "none",
                  }}>
                  Las contrasenas no coinciden.
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                // onClick={onRegister}
                disabled={loading() || passIsValid()}
                type='submit'>
                {loading() ? (
                  <Spinner animation='border' size='sm' />
                ) : (
                  "Renovar contrasena"
                )}
              </Button>
              <Button onClick={()=>{
                if(context().navigate){
                    context().navigate(window.location.pathname);
                    setType("login");
                    delete window.localStorage.recoveryPassOn;
                    delete window.localStorage.code;
                    setCode(null);


                }
              }}>Cancelar</Button>
            </Form>
          </section>
        </Match>
      </Switch>
      <hr class='linea m-3' />
      <div>
        <p>
          Protección de Datos y Privacidad Al crear una cuenta o registrarte,
          confirmas que has leído y aceptado nuestras Políticas de Privacidad y
          Términos de Servicio. Toda la información personal que nos
          proporciones será tratada de manera confidencial y utilizada
          únicamente conforme a lo establecido en nuestras políticas, asegurando
          la protección de tus datos en todo momento.
        </p>
      </div>
      <hr class='linea m-3' />

      <Button
        onClick={() => setType(type() === "register" ? "login" : "register")}>
        {type() === "register" ? "Iniciar sesion" : "Registro"}
      </Button>
      <Button
        hidden={type() !== "recoveryPass" && type() !== "changePass"}
        class='mt-3'
        onClick={() => setType("login")}>
        Inicio de sesion
      </Button>

      <Button
        hidden={type() === "recoveryPass" || type() === "changePass"}
        class='mt-3'
        onClick={() => setType("recoveryPass")}>
        Recordar contrasena
      </Button>
      <hr class='linea m-3' />

      
      <aside class='container'></aside>
    </div>
  );
}
