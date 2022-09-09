import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";
export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title, descripcion) {
    let newTask = {
      id: tasks.length,
      title,
      descripcion,
    };
    setTasks([...tasks, newTask]);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
