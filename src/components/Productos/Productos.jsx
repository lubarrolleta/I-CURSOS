import { For, createEffect, createSignal } from "solid-js";
import Context from "../../contexto/Contexto";
import { useContextCustom } from "../../contexto/useContextCustom";
import { OverlayTrigger,Popover } from 'solid-bootstrap'
import Producto from "./producto/Producto";
export default function Productos() {
  const context = useContextCustom();
  // console.log(<Context></Context>)
  console.log(context(), "context");
  const {
    showModal,
    setShowMoal,
    title,
    setTitle,
    content,
    setContent,
    idModal,
    setIdModal,
    roleModal,
    setRoleModal,
    modalFooter,
    setModalFooter,
  } = context().modal;
  const { productos } = context();
    const productor =  (data)=>{
        console.log(data);
    };
    const afiliado =  (data)=>{

    };
    const component={
        ['afiliado'] :(data)=>{
            // console.log(data);
            
            return {
                img:data.versions[0].image.fullUrl,
                name:data.versions[0].name,

            }
        },
        ['productor'] :(data)=>{
            // console.log(data);
            return {
                img:data.versions[0].image.fullUrl,
                name:data.versions[0].name,

            }
        }
    };
    // const 
  createEffect(() => {
    // console.log(productos().productos);
  });
  createEffect(()=>{
    // console.log(component()[productos().type]("data"));
  })
  // console.log(productos())
  return (
    <div class='mainView'>
      <div class='lolomo is-fullbleed'>
        <h1 class='visually-hidden'>i cursos</h1>
        <div class='volatile-billboard-animations-container'>
          <div class='billboard-row'>
            <div class='billboard billboard-pane billboard-originals trailer-billboard'>
              <div class='billboard-motion dismiss-mask'>
                <div class='motion-background-component bottom-layer full-screen'>
                  <div class='hero-image-wrapper'>
                    <img
                      class='hero static-image image-layer'
                      src='https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABes_NnBj3atXwD8PgPhfVR6YzTMHBs-7PCP-qiAEsLPfZ5uHv1Ft4664--TS9pZ9zQxe0YtsuImIlCt50UnAFxhxLGi-HlWUR0pm.webp?r=2a3'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <div class='fill-container'>
                <div class='info meta-layer'>
                  <div class='logo-and-text meta-layer'>
                    <div
                      class='titleWrapper'
                      style='transform-origin: left bottom; transform: scale(1) translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms;'>
                      <div class='billboard-title'>
                        <img
                          alt='The Sinner'
                          class='title-logo'
                          src='https://occ-0-2980-3933.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW4WXvauX1_OL4kWIP5zZvhxXqNlriXvoPazwr_BbtApZ7bqjAJ_mkLmNqVA2F6j0pIWTPFZG6TrKYvNPERwCAqHXICUJdOiy1nE_9rS4kOzkn0isyx2G02EGcUN_v5RTveaaDHCAQidAxzuZGjtXmGx2x7fQHiJ4EoLIGynOiN_wFcxE9cUZQ.webp?r=5b0'
                          title='The Sinner'
                        />
                      </div>
                    </div>
                    <div
                      class='info-wrapper'
                      style='transform: translate3d(0px, 0px, 0px); transition-duration: 1300ms; transition-delay: 0ms; opacity: 1;'>
                      <div
                        class='info-wrapper-fade'
                        style='opacity: 1; transition-duration: 600ms; transition-delay: 200ms;'>
                        <div class='episode-title-container'>
                          <div class='synopsis-fade-container'>
                            <div class='synopsis no-supplemental'>
                              <div class='ptrack-content'>
                                Bill Pullman was nominated for a SAG Award for
                                playing Harry Ambrose, a somber police detective
                                who works to uncover the motives of unlikely
                                criminals.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* btns */}
                    <div class='billboard-links button-layer forward-leaning'>
                      <a
                        href='/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C&amp;ad=true'
                        class='visually-hidden ad-playlink'
                        data-uia='play-button-a11y'
                        role='link'
                        aria-label='Play - start with Audio Description turned on'>
                        <span class='visually-hidden'>&nbsp;</span>
                      </a>
                      <a
                        href='/watch/80226546?trackId=254015180&amp;tctx=0%2C0%2C6daf96b9-5571-4512-a4b1-efa9f3d969ef-180704821%2CNES_49EF11BDCE6D670FF283500558837C-951BB306AEF2A8-14438BEB43_p_1725749354297%2CNES_49EF11BDCE6D670FF283500558837C_p_1725749354297%2C%2C%2C%2C%2CVideo%3A80175802%2C'
                        class=' playLink isToolkit'
                        data-uia='play-button'
                        role='link'
                        aria-label='Play'>
                        <button
                          class='color-primary hasLabel hasIcon ltr-podnco'
                          tabindex='-1'
                          type='button'>
                          <div class='ltr-1st24vv'>
                            <div class='medium ltr-iyulz3' role='presentation'>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                role='img'
                                viewBox='0 0 24 24'
                                width='24'
                                height='24'
                                data-icon='PlayStandard'
                                aria-hidden='true'>
                                <path
                                  d='M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z'
                                  fill='currentColor'></path>
                              </svg>
                            </div>
                          </div>
                          <div class='ltr-1npqywr' style='width: 1rem;'></div>
                          <span class='ltr-1vh9doa'>Play</span>
                        </button>
                      </a>
                      <button
                        class='color-secondary hasLabel hasIcon ltr-18ezbm2'
                        data-uia='billboard-more-info'
                        type='button'>
                        <div class='ltr-1st24vv'>
                          <div class='medium ltr-iyulz3' role='presentation'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              role='img'
                              viewBox='0 0 24 24'
                              width='24'
                              height='24'
                              data-icon='CircleIStandard'
                              aria-hidden='true'>
                              <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z'
                                fill='currentColor'></path>
                            </svg>
                          </div>
                        </div>
                        <div class='ltr-1npqywr' style='width: 1rem;'></div>
                        <span class='ltr-1vh9doa'>More Info</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* populares */}
        <div class='lolomoRow lolomoRow_title_card ltr-0'>
          <h2 class='rowHeader ltr-0'>
            <a href='' class='rowTitle ltr-0'>
              <div class='row-header-title'>Populares</div>
            </a>
          </h2>
          <div class='rowContainer rowContainer_title_card' id='row-1'>
            <div class='ptrack-container'>
              <div class='rowContent slider-hover-trigger-layer'>
                <div class='slider'>
                  <span
                    class='handle handlePrev active'
                    tabindex='0'
                    role='button'
                    aria-label='See previous titles'>
                    <b class='indicator-icon icon-leftCaret'></b>
                  </span>
                  <div class='sliderMask showPeek'>
                    <div
                      class='sliderContent row-with-x-columns'
                      style='-webkit-transform: translate3d(0%, 0px, 0px);-ms-transform: translate3d(0%, 0px, 0px);transform: translate3d(0%, 0px, 0px)'>
                      <For
                        each={
                          productos().productos.length !== 0 &&
                          productos().productos
                        }>
                        {(producto, i) => (
                          <>
                            <Producto i={i} producto={producto} productos={productos}/>
                          </>
                        )}
                      </For>
                    </div>
                  </div>
                  <span
                    class='handle handleNext active'
                    tabindex='0'
                    role='button'
                    aria-label='See more titles'>
                    <b class='indicator-icon icon-rightCaret'></b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
