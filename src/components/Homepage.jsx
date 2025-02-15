import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddTaskDialog from "./AddTaskDialog";
import "../Styles/Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Homepage = ({ tasks, setTasks }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "complete" ? "incomplete" : "complete" }
          : task
      )
    );
  };

  const capitalizeFirstLetter = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  const filteredTasks = tasks.filter((task) =>
    (filter === "all" ? true : filter === "complete" ? task.status === "complete" : task.status !== "complete") &&
    (task.title.toLowerCase().includes(searchTerm.toLowerCase()) || task.status.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="homepage">
      <h1>Tasks</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Task by Title..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="filter-container">
        <label htmlFor="taskFilter"></label>
        <select id="taskFilter" value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">ALL</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="no_task">No tasks yet. Add one by clicking the button below!</p>
      ) : (
        <ul className="task_list">
          <div className="header">
            <p></p>
            <strong><p>Title</p></strong>
            <strong><p>Status</p></strong>
            <strong><p>User Id</p></strong>
            <p></p>
          </div>
          
          <div className="task_list_body">
            {filteredTasks.map((task) => (
              <Link to={`/task/${task.id}`}>
              <li key={task.id} className="task_item">
                <div className="task_link">
                <div className="task_buttons">
                <input 
                  type="radio" 
                  checked={task.status === "complete"} 
                  readOnly 
                  className="input" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggle(task.id);
                  }} 
                />
              </div>

                  
                  <h3 className="task_title">{capitalizeFirstLetter(task.title)}</h3>
                  <p className="task_status"><strong></strong> {task.status}</p>
                  <p className="task_userid"><strong></strong> {task.userId}</p>
                  
                  <div className="task_buttons">
                  <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleDelete(task.id);
                  }}>
                  <FontAwesomeIcon icon={faTrash} className="delete-icon"/>
                  </button>
                  </div>
                </div>
              </li>
              </Link>
            ))}
          </div>
        </ul>
      )}

      <button className="fab" onClick={() => setShowDialog(true)}>+</button>
      {showDialog && <AddTaskDialog setTasks={setTasks} onClose={() => setShowDialog(false)} />}
    </div>
  );
};

export default Homepage;  