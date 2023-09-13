import './Modal.scss'

function Modal({setShowAddModal}) {
  const closeModal = () => {
    setShowAddModal(false)
  }

  return (
    <div className='text-box'>
      <input type='text' placeholder='Enter new commitment here...'/>
      <div className='buttons'>
        <button className='add-btn'>Add</button>
        <button className='close-btn' onClick={closeModal}><ion-icon name="close-outline"></ion-icon></button>
        {/*  */}
      </div>
    </div>
  )
}
export default Modal