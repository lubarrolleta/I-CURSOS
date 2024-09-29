import { Modal } from "solid-bootstrap";
import { Show, createEffect, createSignal } from "solid-js";
import { useContextCustom } from "../../contexto/useContextCustom";
import "./ModalCustom.scss";
// import { useContextCustom } from "../../Context/useContextCustom";
export default function ModalCustom() {
  const memoData = useContextCustom();
  console.log("ModalCustom");

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
    hoverFunction,
    setHoverFunction,
    isDetail,
    setIsDetail,
    sizeModal,setSizeModal
  } = memoData().modal;
  const [fullscreen, setFullscreen] = createSignal("sm-down");
  const [show, setShow] = createSignal(true);

  createEffect(() => {
    // isDetail() &&
  });
  createEffect(() => {
    !showModal() &&
      (() => {
        setShowMoal(null);
        setIdModal(null);
        setModalFooter(null);
        setRoleModal(null);
        setTitle(null);
        setContent(null);
        setHoverFunction(null);
        setIsDetail(null);
        setSizeModal("xl")
      })();
  });
  const closed = () => {
    setShowMoal(null);
    setIdModal(null);
    setModalFooter(null);
    setRoleModal(null);
    setTitle(null);
    setContent(null);
    setHoverFunction(null);
    setIsDetail(null);
    setSizeModal("xl")
  };
  return (
    <>
      <Modal
        ref={(mo) => {
          const interval = setInterval(() => {
            const moP = mo.parentNode;
            if (moP) {
              clearInterval(interval);
              // console.log(moP.parentNode.firstElementChild);
              // moP.parentNode.firstElementChild.style.zIndex = "10000";
              // moP.style.zIndex = "10000";
            }
          }, 200);
        }}
        // style={`z-index: 10000;`}
        size={sizeModal()}
        show={showModal()}
        fullscreen={fullscreen()}
        onHide={closed}
        // size={"xl"}
        scrollable={true}
        onMouseLeave={hoverFunction() ? closed : () => null}>
        <Show when={title()}>
          <Modal.Header closeButton>
            <Modal.Title class='w-100 d-flex justify-content-between align-items-center'>
              {title()}
            </Modal.Title>
          </Modal.Header>
        </Show>
        <Modal.Body
          id={"modal_" + idModal()}
          class={isDetail() ? "isDetail" : undefined}>
          <Show when={isDetail()}>
            <i class='fi fi-ss-circle-xmark' onClick={closed}></i>
          </Show>
          {content()}
        </Modal.Body>
        <Show when={modalFooter()}>
          <Modal.Footer>{modalFooter()}</Modal.Footer>
        </Show>

        {/* <Show
          when={roleModal()}
          fallback={
            <>
              <Modal.Header closeButton>
                <Modal.Title class='w-100 d-flex justify-content-between align-items-center'>
                  {title()}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body id={"modal_" + idModal()}>{content()}</Modal.Body>
              <Show when={modalFooter()}>
                <Modal.Footer>{modalFooter()}</Modal.Footer>
              </Show>
            </>
          }>

          <>
            <form
              as={roleModal() || "div"}
              id={roleModal() ? "modal_" + idModal() : ""}
              style={`overflow: overlay;`}
              >
              <Modal.Header closeButton>
                <Modal.Title class='w-100 d-flex justify-content-between align-items-center'>
                  {title()}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body id={"modal_" + idModal()}>{content()}</Modal.Body>
              <Show when={modalFooter()}>
                <Modal.Footer>{modalFooter()}</Modal.Footer>
              </Show>
            </form>
          </>

        </Show> */}
      </Modal>
    </>
  );
}
