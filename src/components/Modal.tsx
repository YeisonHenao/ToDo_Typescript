import { ToDo } from "../types"
import Form from "./Form"

interface ModalState{
  VoidCreate: (newToDo: ToDo) => void;
}

const Modal = ({VoidCreate}: ModalState) => {
  return(
    <div>
       {/* Modal view */}
      <div
        className="modal modal-lg fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className=" text-center modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <Form onNewTask={VoidCreate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal