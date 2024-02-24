import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
// import {tasks as data} from './data/task'
import { useState, useEffect } from "react";

function APP() {
  // const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //     setTasks(data)
  // }, [])

  // function createTask(task){
  //   //añade el valor de task al array tasks
  //   setTasks([...tasks, {
  //     name: task.name,
  //     id: tasks.length,
  //     description: task.description
  //   }])
  // }

  // function deleteTask(taskId) {
  //   // console.log(tasks)
  //   // console.log(taskId)
  //   setTasks(tasks.filter(task => task.id !== taskId))
  // }

  return (
    <main className="bg-zinc-900 h-screen">
      {/* <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask}/> */}
      <div className="container mx-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default APP;

//con la extension ES7 react se puede escribir este codigo digitando
//rfce

// function App(){
//   return <h1>Hola mundo</h1>
// }

// export default App

//initial APP
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

//export default App
