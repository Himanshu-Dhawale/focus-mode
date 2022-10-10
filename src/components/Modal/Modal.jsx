import React, {useState} from 'react'
import { useTodo } from '../../context/todo-context';
import { useModal } from '../../context/modal-context';
import "./Modal.css"
export const Modal = () => {
    const { editClicked, dispatch, itemBeingEdited } = useTodo();
    const [title, setTitle] = useState(editClicked ? itemBeingEdited.title : "");
    const [desc, setDesc] = useState(editClicked ? itemBeingEdited.desc : "");
    const { timerLimit, setTimerLimit, breakLimit, setBreakLimit } = useModal();

    const handleSelect = (e) => {
      setTimerLimit((prev) => e.target.value);
    };
    const handleBreak = (e) => {
      setBreakLimit((prev) => e.target.value);
    };
  

  return (
    <div>
         <div className="modal">
      <form>
        <input
          type="text"
          placeholder="Add Title"
          className="modal-inputs modal-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          type="text"
          placeholder="Add Description"
          className="modal-inputs modal-desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <p className="model-head">time limit</p>
        <select
          avlue={timerLimit}
          className="modal-limit"
          name="duration"
          id="duration"
          onChange={handleSelect}
        >
          <option value="60">60</option>
          <option value="45">45</option>
          <option value="30">30</option>
          <option value="15">15</option>
        </select>
        <p className="model-head">set break</p>
        <select
          value={breakLimit}
          name="break"
          id="break"
          onChange={handleBreak}
          className="modal-limit"
        >
          <option value="20">20</option>
          <option value="15">15</option>
          <option value="10">10</option>
          <option value="15">5</option>
        </select>
      </form>
      <div className="modal-buttons">
        {editClicked ? (
          <button
            className="modal-btn modal-add"
            onClick={() =>
              dispatch({
                type: "UPDATE_HANDLER",
                payload: { id: itemBeingEdited.id, title, desc, timerLimit,
                  breakLimit },
              })
            }
          >
            update
          </button>
        ) : (
          <button
            className="modal-btn modal-add"
            onClick={() =>
              dispatch({ type: "ADD_HANDLER", payload: { title, desc, timerLimit,
                breakLimit } })
            }
          >
            add
          </button>
        )}

        <button
          className="modal-btn modal-cancel"
          onClick={() => dispatch({ type: "CANCEL_HANDLER" })}
        >
          cancel
        </button>
      </div>
    </div>
    </div>
  )
}
