import React , { Component }  from 'react' ;
import { Link } from 'react-router-dom' ;

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">SalesList</Link>
      <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
      <li className="navbar-item">
      <Link to="/" className="nav-link">Sales</Link>
      </li>
      <li className="navbar-item">
      <Link to="/create" className="nav-link">New Sale</Link>
      </li>
      <li className="navbar-item">
      <Link to="/map" className="nav-link">MAP</Link>
      </li>
      <li className="navbar-item">
      <Link to="/search" className="nav-link">search</Link>
      </li>
      </ul>
      </div>
      </nav>
    );
  }
}
