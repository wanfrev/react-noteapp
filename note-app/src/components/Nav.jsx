import '../assets/css/nav.css';

export const Nav = () => {
  return (
    <div className='navbar'>
      <div className="nav-wrapper container">
        <span className="logo">Notes</span>
        <div className="nav-options">
          <div className="nav-icon">
          <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
