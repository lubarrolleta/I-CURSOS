import { Modal } from "solid-bootstrap";
import { Show, createSignal } from "solid-js";
import { useContextCustom } from "../../contexto/useContextCustom";
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
  } = memoData().modal;
  const [fullscreen, setFullscreen] = createSignal("xxl-down");
  const [show, setShow] = createSignal(true);
  return (
    <>
      <Modal
        ref={(mo) => {
          const interval = setInterval(() => {
            const moP = mo.parentNode;
            if (moP) {
              clearInterval(interval);
              console.log(moP.parentNode.firstElementChild);
              moP.parentNode.firstElementChild.style.zIndex = "10000";
              moP.style.zIndex = "10000";
            }
          }, 200);
        }}
        style={`z-index: 10000;`}
        show={showModal()}
        fullscreen={fullscreen()}
        onHide={() => {
          setShowMoal(null);
          setIdModal(null);
          setModalFooter(null);
          setRoleModal(null)
        }}
        size={"xl"}
        scrollable={true}>
             <Modal.Header closeButton>
                <Modal.Title class='w-100 d-flex justify-content-between align-items-center'>
                  {title()}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body id={"modal_" + idModal()}>{content()}</Modal.Body>
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
