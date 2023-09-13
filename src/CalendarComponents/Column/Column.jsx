import { useState } from 'react';
import './Column.scss';
import Tasks from '../Tasks/Tasks';
import Modal from './Modal'

function Column({ column }) {
  const tasks = column.tasks
  const [showAddModal, setShowAddModal] = useState(false)

  const openModal = () =>{
    setShowAddModal(true)
  }
  
  return (
    <>
      <div className="column">
        <header>{column.title}</header>
        <ul className="tasks-list">
          { tasks && tasks.length > 0 && tasks.map((task, index) => {
            return (
              <Tasks 
                key={task.id}
                task={task}
              />
            )
          }) }
        </ul>        
        { showAddModal ? <Modal setShowAddModal={setShowAddModal} /> : <footer onClick={openModal}><ion-icon name="add"></ion-icon> Add a commitment</footer> }
    </div>
    </>
  )
}

export default Column