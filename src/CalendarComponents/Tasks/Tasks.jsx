import './Tasks.scss';

function Tasks({ task }) {

  return (
    <>
      <li className="task-item">{task.title}</li>
    </>
  )
}

export default Tasks