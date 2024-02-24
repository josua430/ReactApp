 import {useContext} from 'react'
 import {TaskContext} from "../context/TaskContext";

//function TaskCard({ task, deleteTask }) {
function TaskCard({ task }) {
  // function MostrarTarea() {
  //   alert(task.id)
  // }

  // const valor = useContext(TaskContext)
  // console.log(valor)

  const {deleteTask} = useContext(TaskContext)
  
  return (
    //este ejemplo pasa los elementos a taskcontent, los pasa todo a props.children
    // <TaskContext>
    //   <div>
    //     <h1>{task.name}</h1>
    //     <p>{task.description}</p>
    //     <button
    //       //onClick={EliminarTarea}>
    //       onClick={() => deleteTask(task.id)}
    //     >
    //       Eliminar tarea
    //     </button>
    //   </div>
    // </TaskContext>
    <div className="bg-gray-700 text-white p-4 rounded-md">
      <h1 className='text-2xl font-bold capitalize'>{task.name}</h1>
      <p className='text-sm text-gray-400'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400'
        //onClick={EliminarTarea}>
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
