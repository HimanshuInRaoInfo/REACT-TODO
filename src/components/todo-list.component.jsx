import "./style.css";
import { localStorageService } from "../services/localstorage.services";
import { useState } from "react";
import { TodoTask } from "./todo-task.component";

export function TodoList() {
  const [todoList, setTodoList] = useState(
    localStorageService.getItems("todoList") || [],
  );

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [isShowError, setShowError] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const AddTask = () => {
    if (!taskTitle.trim()) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (!selectedTask) {
      let objectToBeSaveTodo = {
        id: Math.floor(Math.random() * 100),
        taskTitle: taskTitle,
        taskDescription: taskDescription,
      };

      let currentTodoList = [...todoList, objectToBeSaveTodo];
      setTodoList(currentTodoList);
      localStorageService.setItem("todoList", currentTodoList);
    } else {
      const newList = todoList.map((item) => {
        if (item.id == selectedTask.id) {
          item["taskTitle"] = taskTitle;
          item["taskDescription"] = taskDescription;
        }
        return item;
      });
      setTodoList(newList);
      localStorageService.setItem("todoList", newList);
    }
    setTaskTitle("");
    setTaskDescription("");
  };

  const editTask = (taskId) => {
    if (!taskId) {
      return;
    }

    const todoTask = todoList.filter((task) => task.id == taskId)[0];
    if (todoTask) {
      setSelectedTask(todoTask);
      setTaskTitle(todoTask.taskTitle);
      setTaskDescription(todoTask.taskDescription);
    }
  };

  const deleteTask = (taskId) => {
    if (!taskId) {
      return;
    }

    const newList = todoList.filter((item) => item.id != taskId);
    setTodoList(newList);
    localStorageService.setItem("todoList", newList);
  };

  return (
    <>
      <div className="header-actions">
        <p>Add Task</p>
        <input
          type="text"
          id="title-input"
          value={taskTitle}
          placeholder="Task Title"
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <textarea
          name="task-details"
          id="task-details"
          rows={5}
          value={taskDescription}
          placeholder="Task Description"
          onChange={(td) => setTaskDescription(td.target.value)}
        ></textarea>
        {isShowError && (
          <p style={{ color: "red", fontSize: "14px", margin: "0px" }}>
            Task-Title is required!
          </p>
        )}
        {selectedTask == null && <button onClick={AddTask}>Add Task</button>}
        {selectedTask != null && selectedTask.id && (
          <button onClick={AddTask}>Update Task</button>
        )}
      </div>
      <div className="task-list">
        {todoList.map((task, index) => (
          <TodoTask
            key={index}
            task={task}
            editTask={(taskId) => {
              editTask(taskId);
            }}
            deleteTask={(taskId) => {
              deleteTask(taskId);
            }}
          />
        ))}
      </div>
    </>
  );
}
