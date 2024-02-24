import TaskCard from "./TaskCard";
import {TaskContext} from '../context/TaskContext'
import { useContext } from "react";

//function TaskList({tasks,deleteTask}) {
function TaskList() {

  //const {tasks, deleteTask} = useContext(TaskContext)
  const {tasks} = useContext(TaskContext)

  if (tasks.length === 0) {
    return <h1 className="text-white font-bold text-xl text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        // <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
