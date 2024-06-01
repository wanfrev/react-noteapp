import PropTypes from 'prop-types';
import '../assets/css/details.css';

export const Details = ({ onClose, note }) => {
  return (
    <div className="note-details">
      <div className="details-wrapper">
        <div className="details-back-btn" onClick={onClose}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <h2 className="details-title">{note.title}</h2>
        <span className="details-timeline">{note.createdAt}</span>
        <div className="details-body">
          <p>{note.desc}</p>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  onClose: PropTypes.func.isRequired,
  note: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};
