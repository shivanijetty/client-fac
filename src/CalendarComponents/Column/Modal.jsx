import './Modal.scss'

function Modal({setShowAddModal}) {
  const closeModal = () => {
    setShowAddModal(false)
  }

  

  return (
    <div className='text-box'>
      <textarea className='text-field' placeholder='Enter new commitment here..z.'></textarea>
      <div className='buttons'>
        <button className='add-btn'>Add</button>
        <button className='close-btn' onClick={closeModal}><ion-icon name="close-outline"></ion-icon></button>
      </div>
    </div>
  )
}
export default Modal