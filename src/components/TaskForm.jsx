import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

//function recibe un valor createTask que es una funcion de APP.jsx
//function TaskForm({createTask}) {
function TaskForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  //TaskContext contiene createTask, deleteTask y tasks
  //solo se quiere createTask para este componente
  const { createTask } = useContext(TaskContext);
  //console.log(value)

  const handleSumbit = (e) => {
    e.preventDefault();
    //console.log(name, description)
    createTask({ name, description });

    //limpia valores de variables
    setName("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSumbit}>
        <h1 className="text-3xl text-white font-bold mb-3">Crea la tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Ingrese tarea"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="descripcion de tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button 
          className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
