import '../assets/css/card.css'

export const Card = () => {
  return (
    <div className='note-card'>
      <div className="note-card-wrapper">
        <h2 className="card-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit</h2>
        <div className="card-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta nisi officiis dolore voluptatum ipsa, optio excepturi iste laborum illum cum aperiam esse, dolor dolorem officia unde? Fuga saepe sed eum?</p>
        </div>
        <span className="card-details">read more</span>
        <div className="card-footer">
          <span className="card-timeline">{new Date().toDateString()}</span>
          <div className='card-actions'>
            <div className="action-item"><i className="fa-solid fa-pen-to-square edit"></i></div>
            <div className="action-item"><i className="fa-solid fa-trash delete"></i></div>
          </div>
        </div>
      </div>
    </div>
  )
}
