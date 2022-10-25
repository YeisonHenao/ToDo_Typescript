import { ToDo } from "../types"
import EditToDo from "./EditToDo"

interface Props {
  ItemToDo : ToDo
}

const ModalEditToDo = (ItemToDo: Props | any) => {


  console.log(ItemToDo);
  return(
    <div>
      <div
        className="modal modal-lg fade"
        id="ModalEditToDo"
        aria-labelledby="ModalEditToDo"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className=" text-center modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit To Do
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <EditToDo ItemToDo={ItemToDo}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEditToDo