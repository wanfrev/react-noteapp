import PropTypes from 'prop-types';
import '../assets/css/card.css';

export const Card = ({ onPreview, onUpdate, onDelete, note }) => {
  return (
    <div className='note-card'>
      <div className="note-card-wrapper">
        <h2 className="card-title" onClick={() => onPreview(note)}>
          {note.title}
        </h2>
        <div className="card-body">
          <p>{note.desc}</p>
          <span className="card-details" onClick={() => onPreview(note)}>
            read more
          </span>
          <div className="card-footer">
            <span className="card-timeline">{note.createdAt}</span>
            <div className='card-actions'>
              <div className="action-item" onClick={() => onUpdate(note)}>
                <i className="fa-solid fa-pen-to-square edit"></i>
              </div>
              <div className="action-item" onClick={() => onDelete(note.id)}>
                <i className="fa-solid fa-trash delete"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  onPreview: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
