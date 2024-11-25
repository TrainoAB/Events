import "./Modal.css";

export function Modal({ title, handleConfirm }) {

    const handleClose = (event) => {
        event.target.closest('#modal').close();
    }
    
    return (
        <dialog id="modal">
            <form method="dialog">
                <p className="modal__text"> {title} </p>
                <div className="modal-buttons-wrapper">
                    <button onClick={handleClose}> Avbryt </button>
                    <button onClick={handleConfirm}> Bekräfta </button>
                </div>
            </form>
        </dialog>
    );
}