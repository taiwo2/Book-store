import profile from '../styles/profile.png';

const Navbar = () => (
  <div className="navbar font-montserrat">
    <div className="navbar-links">
      <h3 className="title">Bookstore CMS</h3>
      <a className="navbar-link selected" href="/index.html">
        BOOKS
      </a>
      <a className="navbar-link" href="/index.html">
        CATEGORIES
      </a>
    </div>
    <div>
      <img className="profile" alt="profile" src={profile} />
    </div>
  </div>
);

export default Navbar;
