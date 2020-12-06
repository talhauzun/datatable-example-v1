import React, { Component } from 'react';

class NavComponent extends Component {
    render() {
        return (
           <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />                        
      </button>
      <a className="navbar-brand" href="#">Logo</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-log-in" /> Login</a></li>
      </ul>
    </div>
  </div>
</nav>



        );
    }
}

export default NavComponent;