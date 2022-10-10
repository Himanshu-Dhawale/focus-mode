import React from 'react'
import {AiOutlinePlus} from "react-icons/ai";
import "./Todo.css";
import { Modal } from '../../components/Modal/Modal';
import { Tasks } from '../../components/Tasks/Tasks'; 
import { useTodo } from '../../context/todo-context';

export const Todo = () => {
    const { showModal, dispatch, taskAdded } = useTodo();

  return (
    <div>
      <p className="tasks-desc">
        {!taskAdded.length > 0
          ? `no task left`
          : `you have ${taskAdded.length} task left`}
      </p>
     <div className="tasks">
      <div className="tasks-container">
        <h2 className="container-heading">to do list</h2>
        <button
          className="container-icon"
          onClick={() => dispatch({ type: "MODAL" })}
        >
          <AiOutlinePlus />
        </button>
      </div>
      {showModal && <Modal />}
       <Tasks />
    </div>
    </div>
  )
}
