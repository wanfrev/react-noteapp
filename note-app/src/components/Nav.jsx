import PropTypes from 'prop-types';
import '../assets/css/nav.css';

export const Nav = ({ onCreate }) => {
  return (
    <div className='navbar'>
      <div className="nav-wrapper container">
        <span className="logo">Notes</span>
        <div className="nav-options">
          <div className="nav-icon" onClick={onCreate}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
