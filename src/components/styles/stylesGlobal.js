import { createGlobalStyles } from "solid-styled-components";
export const GlobalStyles = (props) => {
    const Styles = (props = createGlobalStyles`
         :root{ --bg-primero: #012E40; 
        --bg-segundo: #012626;
        --bg-tercero: #F29F05;
        --bg-cuarto: #F25C05;
        --bg-quinto: #F29472;
     }
     body, html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #141414;
    color: #fff;
    cursor: default;
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
    font-size: 10px;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
     div[data-tag="[I-CURSOS]"] {
    overflow: visible;
    position: static;
    min-height: 100vh;
    width: 100vw;
}
.mainView {
    /* min-height: 1000px; */
    position: relative;
    z-index: 0;
}
.lolomo.is-fullbleed {
    margin-top: -70px;
}
.lolomo {
    overflow-x: hidden;
}
.lolomo {
    overflow: hidden;
    padding: 0 0 50px;
    z-index: 0;
}
.visually-hidden {
    clip: rect(1px 1px 1px 1px)!important;
    clip: rect(1px,1px,1px,1px)!important;
    height: 1px!important;
    overflow: hidden!important;
    position: absolute!important;
    white-space: nowrap!important;
    width: 1px!important;
}
.volatile-billboard-animations-container {
    display: block;
    position: relative;
    z-index: 1;
}

.volatile-billboard-animations-container .billboard-row {
    left: 0;
    position: relative;
    right: 0;
    top: 0;
}
.billboard-row {
    background-color: #000;
    margin-bottom: 20px;
    padding-bottom: 40%;
    position: relative;
    touch-action: pan-y;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.billboard-row .billboard {
    background-color: #000;
    height: 56.25vw;
    position: absolute;
    width: 100%;
    z-index: 0;
}
.billboard-row .billboard .billboard-motion {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .bottom-layer {
    z-index: 2;
}
.billboard-row .billboard .full-screen, .billboard-row .billboard .hero-image-wrapper {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .full-screen, .billboard-row .billboard .hero-image-wrapper {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.billboard-row .billboard .hero-image-wrapper .static-image {
    background-position: 50%;
    background-size: cover;
    bottom: 0;
    -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=100);
    filter: alpha(opacity=100);
    left: 0;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 0;
    transition: opacity .4s cubic-bezier(.665,.235,.265,.8) 0s;
    width: 100%;
}
.billboard-row .billboard .hero-image-wrapper .image-layer {
    z-index: 5;
}
img {
    border: 0;
}
@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}

    `);
  return Styles();

}