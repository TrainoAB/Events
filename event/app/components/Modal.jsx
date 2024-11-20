import "./Modal.css";

export function Modal({ title, closeModal, confirm }) {
    
    return (
        <dialog id="modal" open>
            <form method="dialog">
                <p className="modal__text">Är du säker på att du vill ta bort {title}</p>
                <div className="modal-buttons-wrapper">
                    <button onClick={closeModal}> Avbryt </button>
                    <button onClick={confirm}> Bekräfta </button>
                </div>
            </form>
        </dialog>
    );
}