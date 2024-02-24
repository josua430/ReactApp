import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

export const TaskContext = createContext();

//el contexto se llaman provider
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    //añade el valor de task al array tasks
    setTasks([
      ...tasks,
      {
        name: task.name,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    // console.log(tasks)
    // console.log(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //   let x = 31

  return (
    // <>
    //     <h1>Componente de contexto</h1>
    //     {props.children}
    // </>
    // {props.children} contiene lo elementos a mostrar
    <TaskContext.Provider
      //value={x}
      value={{
        // tasks: tasks,
        // createTask: createTask,
        // deleteTask: deleteTask
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

//export default TaskContext
