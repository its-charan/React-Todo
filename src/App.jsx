import React, { useState } from 'react';
import AppTitle from './Components/AppTitle';
import InputTitle from './Components/InputTitle';
import TaskItems from './Components/TaskItems';
import InitialMsg from './Components/InitialMsg';
const App = () => {

  const [tasks, setTasks] = useState([
    {
      task: "Complete React calculator project",
      date: "2025-07-04"
    },
    {
      task: "Prepare for JavaScript interview",
      date: "2025-07-06"
    },
    {
      task: "Fix calculator bug for multiple operators",
      date: "2025-07-05"
    },
    {
      task: "Review Linux file permissions (chmod, chown)",
      date: "2025-07-07"
    },
    {
      task: "Push updated code to GitHub",
      date: "2025-07-08"
    }
  ])

  const handleDelete = (idx) => {
    const newTask = tasks.filter((_, pre) => pre != idx)
    setTasks(newTask)
  }

  const getTask = (a, b) => {
    const newTask = [...tasks, { "task": a, "date": b }]
    setTasks(newTask)
  }

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container-fluid px-4">
        <AppTitle />
        <InputTitle getTask={getTask} />
        <TaskItems tasks={tasks} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;
