import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const {createTask} = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, descripcion);
    setTitle("");
    setDescripcion("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
      <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-2 w-full mb-2 rounded-md"
        autoFocus
      ></input>
      <textarea
        placeholder="Escriba la descripcion de la tarea"
        className="bg-slate-300 p-2 w-full mb-2 rounded-md"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button className="bg-indigo-500 px-3 py-1 text-white rounded-md">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
