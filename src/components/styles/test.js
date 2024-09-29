const cart = document.querySelector(".xoo-wsc-markup");
cart && (cart.hidden = true);
const url = window.location.pathname;
const h1 = document.querySelector(
  'h1[class="entry-title title flipboard-title"]'
);
// 	console.log(h1);
let interval;

const setBtn = (div) => {
  const btn = document.createElement("a");
  btn.id = "btnInitSesion";
  btn.href =
    localStorage.urlToRedirect ||
    "https://theoneprotherapy.cl/membership-login/";
  btn.textContent = "Iniciar Sesion";
  div.append(btn);
};
const count = (c) => {
  const ul = Array.from(document.querySelectorAll('ul[id="menu-member"] li'));
  console.log(ul);
  if (ul && ul.length !== 0) {
    console.log(ul);
    clearInterval(c);
    ul.forEach((li) => {
      li.classList.add("wobble-hor-bottom");
    });
  }
};
const pages = {
  ["/membership-login/password-reset/"]: () => {
    // 			console.log(url);
    h1.textContent = "Restablecer contraseña 🔒";
    const divPass = document.querySelector('div[id="swpm_message"]');
    if (divPass) setBtn(divPass);
  },
  ["/membership-login/"]: () => {
    h1.textContent = "Inicio de sesión de miembro 🚀";
    localStorage.urlToRedirect = window.location.href;
    let interval = setInterval(() => count(interval), 200);
  },
  ["/membership-login/membership-profile/"]: () => {
    h1.textContent = "Perfil 📝";
    let interval = setInterval(() => count(interval), 200);
  },
  ["/bioplastia-senorita-paso-a-paso/"]: () => {
    const video = document.querySelector('div[id="video"] video');
    if (video) {
      video.oncontextmenu = () => {
        return false;
      };
    }
  },
  ["/registro-area-de-miembros/"]: () => {
    const first_name = document.querySelector('input[id="first_name"]');
    const inputUserName = document.querySelector('input[id="user_name"]');
    // 			inputUserName.setAttribute("disabled","true");//readonly
    // 			inputUserName.setAttribute("readonly",true);//readonly
    const inputEmail = document.querySelector('input[id="email"]');
    const change = (e) => {
      const target = e.target;
      inputUserName.value =
        inputEmail.value + "_" + first_name.value?.replaceAll(" ", "-");
      inputUserName.focus();
    };
    inputEmail.addEventListener("change", change, false);
    first_name.addEventListener("change", change, false);
  },
  ["/membership-login/"]: () => {
    h1.textContent = "área de miembros 🔒";
    const container = document.querySelector("#contents-wrap > div");
    if (container) {
      container.setAttribute(
        "style",
        `
	display: flex;
	flex-direction: column;

`
      );
      container.children[0].setAttribute("style", `order: 1;`);
      container.children[1].setAttribute(
        "style",
        `${container.children[1].getAttribute(
          "style"
        )} order: 0;place-self: end flex-end;`
      );
    }
    // 					Raizaoviedo14@gmail.com
    //
    let interval = setInterval(() => count(interval), 200);
    // 					interval = setInterval(count,200);
  },
};
try {
  pages[url]();
} catch (e) {
  console.log(e, "eroor");
}
const myCart = () => {
  const h3 = document.querySelector(
    'h3[class="slide-in-woo-header cart--title tipi-vertical-c"]'
  );
  if (h3) {
    console.log(h3);
    h3.childNodes[0].textContent = "Mi Carrito";
  }
};
try {
  myCart();
} catch (e) {}
