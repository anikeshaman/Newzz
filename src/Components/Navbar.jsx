import React from 'react';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-5">Newzz</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCategory("Technology")}>Technology</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCategory("Business")}>Business</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCategory("Health")}>Health</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCategory("Sports")}>Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn" onClick={() => setCategory("Entertainment")}>Entertainment</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
