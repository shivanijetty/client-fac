import './Tasks.scss';

function Tasks({ task }) {

  return (
    <>
      <li className="task-item" draggable>
        {task.title}
      </li>
    </>
  )
}

export default Tasks