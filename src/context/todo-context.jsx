import { useContext, createContext, useReducer } from "react";

import { todoReducer } from "../reducer/todo-reducer";

const TodoContext = createContext();

const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [{ showModal, taskAdded, editClicked, itemBeingEdited }, dispatch] = useReducer(
    todoReducer,
    {
      showModal: false,
      taskAdded: [],
      editClicked: false,
      itemBeingEdited: null,
    }
  );

  return (
    <TodoContext.Provider
      value={{
        showModal,
        taskAdded,
        dispatch,
        editClicked,
        itemBeingEdited
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodo, TodoProvider };