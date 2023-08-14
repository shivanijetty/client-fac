import './Column.scss';
import Tasks from '../Tasks/Tasks';

function Column({ column }) {

  return (
    <>
      <div className="column">
        <header>{column.title}</header>
        <ul className="tasks-list">
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
          <Tasks />
        </ul>
        <footer>+ Add a commitment</footer>
      </div>
    </>
  )
}

export default Column