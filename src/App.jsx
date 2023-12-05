import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import NoTask from "./components/NoTask"

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'April 15th at 2:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Visitation',
      day: 'March 5th at 2:30pm',
      reminder: true,
    }
  ])

  // Delete function
  const deleteTask = (id) => {
    console.log('delete')
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  // Toggle reminder
  const toggleReminder = (id) => {
    console.log(id)
  }
  
  return (
    <div className="border border-blue-400 p-7 w-[35%] rounded">
      <Header />
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : <NoTask />}
    </div>
  )
}

export default App
