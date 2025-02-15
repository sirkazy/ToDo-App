import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../Styles/TaskDetail.css";

const TaskDetail = ({ tasks, darkMode, setDarkMode }) => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const task = tasks.find((t) => {
    console.log(t.id);
    console.log(`this is the actual id ${taskId}`);
    console.log(t.id === taskId);
    return t.id.toString() === taskId;
  });

  if (!task) {
    return (
      <div className="task_detail">
        <h2>Task not found</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  return (
    <div className={`task_detail ${darkMode ? "dark_task_detail" : ""}`}>
      <h2>Task Details</h2>
      <p>
        <strong>ID:</strong> {task.id}
      </p>
      <p>
        <strong>Title:</strong> {task.title}
      </p>
      <p>
        <strong>Status:</strong> {task.status}
      </p>
      <p>
        <strong>UserID:</strong> {task.userId}
      </p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default TaskDetail;
