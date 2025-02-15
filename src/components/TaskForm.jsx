import React, { useState } from "react";
import "../Styles/TaskForm.css";

const TaskForm = ({ setTasks, onClose }) => {
  const [taskData, setTaskData] = useState({
    title: "",
    status: "incomplete",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "complete") {
      setTaskData((prev) => ({ ...prev, status: checked ? "complete" : "incomplete" }));
    } else {
      setTaskData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...taskData, id: Date.now().toString(), userId: 1 };
    setTasks((prev) => [newTask, ...prev]);
    setTaskData({ title: "", status: "incomplete" });
    if (onClose) onClose();
  };

  return (
    <form className="task_form" onSubmit={handleSubmit}>

      <div className="tasktitle">
      <label><strong>Task Title</strong></label>
      <input type="text" name="title" value={taskData.title} className="task_input" placeholder="Enter Task Title..." onChange={handleChange}/>
      </div>

      <div className="complete_check">
      <label className="task_checkbox_label"> Mark as Complete: </label>
      <input type="checkbox" name="complete" onChange={handleChange}/>
      </div>

      <div>
      <button type="submit" className="task_submit" disabled={!taskData.title.trim()}>Add Task</button>
      </div>
    </form>
  );
};

export default TaskForm;