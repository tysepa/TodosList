function Modal(props) {
  function cancelHandel () {
    props.onCancel()
  }
  function confirmHandel(){
    props.onConfirm()

  }
  return (
    <div className="modal">
      <div className="modalwaper">
        <span>Are you sure?</span>
        <button className="butn" onClick={confirmHandel}>Confirm</button>
        <button className="butn btn--alr" onClick={cancelHandel}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
