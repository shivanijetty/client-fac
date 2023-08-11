import './Column.scss';
import Tasks from '../Tasks/Tasks';

function Column({ column }) {
  const tasks = column.tasks

  return (
    <>
      <div className="column">
        <header className="column-drag-handle">{column.title}</header>
        <ul className="tasks-list">          
          {tasks && tasks.length > 0 && tasks.map((task, index) => {
            return (
              <Tasks key={task.id} task={task} />
            )
          })}          
        </ul>
        <footer>+ Add a commitment</footer>
      </div>
    </>
  )
}

export default Column