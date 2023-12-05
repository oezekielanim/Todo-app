/* eslint-disable react/prop-types */
import Task from "./Task"



const Tasks = ({ tasks,onDelete,onToggle }) => {
  return (
    <main className="pt-5 pl-1">
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </main>
  )
}

export default Tasks
