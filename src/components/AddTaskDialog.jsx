import React from "react";
import TaskForm from "./TaskForm";
import "../Styles/AddTaskDialog.css";

const AddTaskDialog = ({ setTasks, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="new_task_header">
        <h3>New Task ToDo</h3>
        </div>
        <TaskForm setTasks={setTasks} onClose={onClose} />
      </div>
    </div>
  );
};

export default AddTaskDialog;