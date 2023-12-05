/* eslint-disable react/prop-types */
import { FaTimes } from 'react-icons/fa'
 

const Task = ({ task,onDelete,onToggle }) => {
  return (
    <section className="p-1 " onDoubleClick={() => onToggle(task.id)}>
        <div className="bg-slate-200 p-2 font-semibold " >
            <h3 className="flex justify-between">{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => onDelete(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    </section>
  )
}

export default Task
