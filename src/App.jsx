// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import TaskDetail from "./components/TaskDetail";
import DarkModeToggle from "./components/DarkModeToggle";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    // Load from local storage or default to empty
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  }); 

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        if (tasks.length === 0) {
          const response = await fetch("https://jsonplaceholder.typicode.com/todos");
          if (!response.ok) throw new Error("Failed to fetch tasks");
          const data = await response.json();
          const formattedTasks = data.slice(0, 20).map((task) => ({
            ...task,
            status: task.completed ? "complete" : "incomplete", // Map completed to status
          }));

          setTasks(formattedTasks);
          localStorage.setItem("tasks", JSON.stringify(formattedTasks));
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Homepage tasks={tasks} setTasks={setTasks} darkMode={darkMode} />} />
          <Route path="/task/:taskId" element={<TaskDetail tasks={tasks} darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;