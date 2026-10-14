// import { localStorageService } from "../services/localstorage.services";
// import { useState } from "react";
import "./style.css";

export function TodoTask({ task, editTask, deleteTask }) {
  return (
    <div className="task-section">
      <h3>{task.taskTitle}</h3>
      <p>{task.taskDescription}</p>
      <div className="action-buttons">
        <button className="edit-button" onClick={() => editTask(task.id)}>
          Edit
        </button>
        <button
          className="delete-button"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
