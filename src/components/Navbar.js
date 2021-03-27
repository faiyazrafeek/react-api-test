import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
  <div className="container">
    <a className="navbar-brand" href="#">FA Health</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbar-default">
      <div className="navbar-collapse-header">
        <div className="row">
          <div className="col-6 collapse-brand">
            <a href="#!">
              <img src="../../assets/img/brand/blue.png" />
            </a>
          </div>
          <div className="col-6 collapse-close">
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
      <ul className="navbar-nav ml-lg-auto">
        <li className="nav-item">
          <a className="nav-link nav-link-icon" href="#">
            <i className="ni ni-notification-70" />
            <span className="nav-link-inner--text d-lg-none">Announcements</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link nav-link-icon" href="#" id="navbar-default_dropdown_1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="ni ni-settings-gear-65" />
            <span className="nav-link-inner--text d-lg-none">Settings</span>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-default_dropdown_1">
            <a className="dropdown-item" href="#">Sinhala</a>
            <a className="dropdown-item" href="#">Tamil</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>

    );
}

export default Navbar;
