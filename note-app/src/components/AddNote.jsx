import '../assets/css/addnote.css'

export const AddNote = () => {
  return (
    <div className='popupadd-note'>
      <div className="popupadd-wrapper">
        <div className="popupadd-header">
          <h2 className="heading">Add Note</h2>
          <div className="close-btn" onClick = {() => setOpen(false)}><i className="fa-solid fa-xmark"></i></div>
        </div>

        <form className="popupadd-form">
          <input required type="text" placeholder='Title' className="input-form" />
          <textarea className='textarea-form' placeholder='Enter your note'></textarea>
          <div className="popupadd-actions">
            <button className="clear-btn">Clear</button>
            <button className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}
