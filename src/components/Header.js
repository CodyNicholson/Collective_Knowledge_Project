import React from 'react';
import { Link } from 'react-router-dom';

const LoggedOutView = props => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
      

        <li className="nav-item">
          <Link to="/" className="nav-link">
          <i className="ion-home"></i>&nbsp;Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/DevNotes" className="nav-link">
          <i className="ion-home"></i>&nbsp;DevNotes
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="ion-information-circled"></i>&nbsp;About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>

      </ul>
    );
  }
  return null;
};

const LoggedInView = props => {
  if (props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">


        <li className="nav-item">
          <Link to="/" className="nav-link">
          <i className="ion-home"></i>&nbsp;Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="ion-information-circled"></i>&nbsp;About
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>

        <div className="w3-dropdown-hover">
          <button className="nav-link">{props.currentUser.username}</button>
          <div className="w3-dropdown-content w3-bar-block w3-border">
            <a className="nav-item profile">
              <Link to={`/@${props.currentUser.username}`} className="nav-link">
                {/* <img src={props.currentUser.image} className="user-pic" /> */}
                <i className="ion-ios-contact-outline"></i>&nbsp;
                Profile
              </Link>
            </a>
            <a className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="ion-gear-a"></i>&nbsp;Settings
              </Link>
            </a>
            <a className="nav-item">
              <Link to="/settings" className="nav-link">
                <i className="ion-ios-undo"></i>&nbsp;Logout
              </Link>
            </a>
          </div>
        </div>
      </ul>
    );
  }

  return null;
};

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <Link to="/" className="navbar-brand">
            {this.props.appName}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />

          <LoggedInView currentUser={this.props.currentUser} />

        </div>
      </nav>
    );
  }
}

export default Header;
