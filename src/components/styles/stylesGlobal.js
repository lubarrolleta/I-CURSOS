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
    background: #141414 !important;
    color: #fff !important;
    cursor: default;
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif !important;
    font-size: 10px;
    line-height: 1.2;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}
.netflix-sans-font-loaded {
    font-family: Netflix Sans,Helvetica Neue,Segoe UI,Roboto,Ubuntu,sans-serif;
}
     /* div[data-tag="[I-CURSOS]"]  */
     div#app{
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

.billboard-row .billboard .billboard-pane, .billboard-row .billboard .fill-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
}
.fill-container {
    height: 100%;
    width: 100%;
}

.billboard-row .billboard .info {
    bottom: 35%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    left: 4%;
    position: absolute;
    top: 0;
    width: 36%;
    z-index: 10;
}

.billboard-row .billboard .info .logo-and-text {
    transition: transform 1.5s cubic-bezier(.165,.84,.44,1);
    width: 100%;
}

.billboard-row .billboard .info .billboard-title {
    margin-bottom: 1.2vw;
    min-height: 13.2vw;
    position: relative;
}

.billboard-row .billboard .info .billboard-title .title-logo {
    transform-origin: bottom left;
    width: 100%;
}

.billboard-row .billboard .info .synopsis.no-supplemental {
    margin: .5vw 0 0;
}

.billboard-row .billboard .info .synopsis {
    color: #fff;
    font-size: 1.2vw;
    font-weight: 400;
    line-height: normal;
    margin-top: .1vw;
    text-shadow: 2px 2px 4px rgba(0,0,0,.45);
    width: 100%;
}
/* btns */
.billboard-row .billboard .info .billboard-links {
    display: flex;
    line-height: 88%;
    margin-top: 1.5vw;
    white-space: nowrap;
}

.billboard-row .billboard .button-layer {
    position: relative;
    z-index: 10;
}

.bigRowItem .forward-leaning, .billboard-links.forward-leaning {
    margin-top: 1vw;
}

.billboard-row .billboard .info .billboard-links>a, .billboard-row .billboard .info .billboard-links>button {
    flex-shrink: 0;
}

.billboard-row .billboard .info .billboard-links>a {
    align-items: center;
    display: flex;
    justify-content: center;
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
a {
    background-color: transparent;
}
a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
}
a {
    background-color: transparent;
}
button, input, optgroup, select, textarea {
    color: inherit;
    font: inherit;
    margin: 0;
}
button {
    overflow: visible;
}
button, select {
    text-transform: none;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
}
.ltr-podnco {
    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    padding: 0.8rem;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
}
.billboard-links button {
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.ltr-podnco.color-primary {
    background-color: white;
    color: black;
}

.ltr-podnco.hasLabel {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
}

.ltr-podnco.hasIcon {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
}

.billboard-links .playLink button {
    margin-left: 0;
}

.ltr-podnco.hasLabel.hasIcon {
    padding-left: 2rem;
    padding-right: 2.4rem;
}


.ltr-1st24vv {
    line-height: 0;
}
.ltr-1npqywr {
    box-sizing: border-box;
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
}
.ltr-1vh9doa {
    -webkit-font-smoothing: antialiased;
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.4rem;
}

/* btn secundario */

.ltr-18ezbm2 {
    -webkit-box-align: center;
    align-items: center;
    appearance: none;
    border: 0px;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    opacity: 1;
    padding: 0.8rem;
    position: relative;
    user-select: none;
    will-change: background-color, color;
    word-break: break-word;
    white-space: nowrap;
}
.billboard-links button {
    margin-bottom: 1rem;
    margin-right: 1rem;
}
.ltr-18ezbm2.color-secondary {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
}
.ltr-18ezbm2.hasLabel {
    padding-left: 2.4rem;
    padding-right: 2.4rem;
}
.ltr-18ezbm2.hasIcon {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
}
.ltr-18ezbm2.hasLabel.hasIcon {
    padding-left: 2rem;
    padding-right: 2.4rem;
}
.billboard-row .billboard .info .billboard-links>a, .billboard-row .billboard .info .billboard-links>button {
    flex-shrink: 0;
}


.ltr-18ezbm2.color-secondary:not(:disabled):hover {
    background-color: rgba(109, 109, 110, 0.4);
}
.ltr-podnco.color-primary:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.75);
}



/* populares */
.lolomoRow {
    z-index: 1;
}
.lolomoRow, .rowContainer {
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
}
.lolomoRow {
    outline: 0;
    position: relative;
}
.lolomoRow.lolomoRow_title_card {
    box-sizing: border-box;
    margin: 3vw 0;
    padding: 0;
}

b, h1, h2, h3, h4, h5, h6, optgroup, strong {
    font-weight: 500;
}
.lolomoRow .rowHeader {
    line-height: 1.3;
    margin: 0;
}
.lolomoRow.lolomoRow_title_card .rowTitle {
    color: #e5e5e5;
    display: inline-block;
    font-size: 1.4vw;
    font-weight: 500;
    margin: 0 4% .5em;
    min-width: 6em;
    text-decoration: none;
}
.lolomoRow.lolomoRow_title_card .rowTitle .row-header-title {
    display: table-cell;
    font-size: 1.4vw;
    line-height: 1.25vw;
    vertical-align: bottom;
}
@media screen and (max-width: 800px) {
    .lolomoRow.lolomoRow_title_card .rowTitle .row-header-title {
        font-size: 12px;
    }
}
/* rowContainer rowContainer_title_card */
.lolomoRow, .rowContainer {
    transition: transform .54s cubic-bezier(.5,0,.1,1) 0s;
}
.rowContainer {
    position: relative;
    z-index: 0;
}
.rowContainer .rowContent {
    box-sizing: border-box;
    padding: 0;
}
.rowContainer .rowContent .slider {
    z-index: 2;
}
.slider {
    margin: 0;
    padding: 0 4%;
    position: relative;
    touch-action: pan-y;
}
.slider .handle {
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    width: 4%;
    z-index: 20;
}
.slider .handle.active {
    cursor: pointer;
}
.slider .handle.handlePrev {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    left: -2px;
}
.rowContainer .rowContent .slider .handle {
    background: hsla(0,0%,8%,.5);
}

[class*=" icon-"], [class^=icon-] {
    speak: none;
    font-family: nf-icon;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    text-transform: none;
    transform: translateZ(0);
}
.slider .handle>.indicator-icon {
    align-self: center;
    display: none;
    font-size: 2.5vw;
    height: auto;
    transition: transform .1s ease-out 0s;
}
.slider .handle.handlePrev .indicator-icon {
    transform-origin: 55% 50%;
}
.slider .handle.handleNext {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    right: 0;
}
.slider .sliderMask {
    overflow-x: hidden;
    padding-bottom: 1px;
}
.slider .sliderMask.showPeek {
    overflow-x: visible;
}
.slider .sliderMask .sliderContent {
    white-space: nowrap;
}
/* card */
.slider .sliderMask .sliderContent .slider-item {
    box-sizing: border-box;
    display: inline-block;
    padding: 0 .2vw;
    position: relative;
    vertical-align: top;
    white-space: normal;
    z-index: 1;
}

@media screen and (min-width: 500px) and (max-width: 799px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 33.333333%;
    }
}
@media screen and (max-width: 499px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 50%;
    }
}
@media screen and (min-width: 800px) and (max-width: 1099px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 25%;
    }
}
@media screen and (min-width: 1100px) and (max-width: 1399px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 20%;
    }
}
@media screen and (min-width: 1400px) {
    .rowContainer .rowContent .slider .row-with-x-columns .slider-item {
        width: 16.66666667%;
    }
}
.slider .sliderMask .sliderContent .slider-item:first-child {
    padding-left: 0;
}
.title-card {
    position: relative;
    z-index: 1;
}
.title-card:not(.loadingTitle) {
    display: block;
}
.title-card .slider-refocus {
    display: block;
}
a {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    /* &  */
}
.boxart-rounded {
    border-radius: .2vw;
}
.boxart-size-16x9 {
    padding: 28.125% 0;
}
.boxart-size-16x9, .boxart-size-32x9 {
    height: 0;
    overflow: hidden;
    position: relative;
    width: 100%;
}
img {
    border: 0;
}
.boxart-image-in-padded-container {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
}
.title-card .boxart-container img {
    cursor: pointer;
}
.fallback-text-container {
    background-color: #222;
    background-image: linear-gradient(transparent,#000);
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
}
.boxart-rounded .fallback-text-container {
    border-radius: 4px;
}
.fallback-text {
    bottom: 0;
    box-sizing: border-box;
    font-size: 1.5em;
    font-weight: 500;
    left: 8%;
    margin: 0;
    overflow: hidden;
    padding: 0 0 10%;
    position: absolute;
    right: 8%;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
} */
@media screen and (min-width: 841px) and (max-width: 1280px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: .75vw;
    }
}

@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}

@media screen and (min-width: 841px) and (max-width: 1280px) and (orientation: landscape) {
    body, html {
        font-size: .85vw;
    }
}
@media screen and (min-width: 0) and (max-width: 480px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: 1.5vw;
    }
}
@media screen and (min-width: 481px) and (max-width: 840px) and (max-aspect-ratio: 4 / 3) {
    body, html {
        font-size: 1vw;
    }
}
div[class="popover-arrow"]{
    display: none !important;
}

.popover{
    /* transition: all 0.3s ease; */
}
.scale-up-center {
	-webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
	        animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-9-8 18:45:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation scale-up-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
            /* width: 0px; */
  }
  100% {
    -webkit-transform: scale(1.5);
            transform: scale(1.5);
            /* width: 430px; */
  }
}

    `);
  return Styles();

}