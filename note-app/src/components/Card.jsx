import '../assets/css/card.css'

export const Card = ({setView, note }) => {
  return (
    <div className='note-card'>
      <div className="note-card-wrapper">
        <h2 className="card-title" onClick = {() => setView(true)}>
          {note?.title}
        </h2>
        <div className="card-body">
          <p>{note?.desc}</p>
        <span className="card-details" onClick = {() => setView(true)}>
          read more
        </span>
        <div className="card-footer">
          <span className="card-timeline">{note?.createdAt}</span>
          <div className='card-actions'>
            <div className="action-item">
              <i className="fa-solid fa-pen-to-square edit"></i>
            </div>
            <div className="action-item">
              <i className="fa-solid fa-trash delete"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
