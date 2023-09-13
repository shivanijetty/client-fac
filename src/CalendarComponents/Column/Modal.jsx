import './Modal.scss'

function Modal({setShowAddModal}) {
  const closeModal = () => {
    setShowAddModal(false)
  }

  return (
    <div className='modal-container'>
      <div classname='text-box'>
        <input type='text' placeholder='Enter new commitment here...'/>
        <button className='add-btn'>Add</button>
        <button className='close-btn' onClick={closeModal}><ion-icon name="close"></ion-icon></button>
      </div>

    </div>
  )
}
export default Modal