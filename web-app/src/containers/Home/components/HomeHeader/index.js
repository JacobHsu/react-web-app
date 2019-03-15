import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <header className="homeHeader__wrapper">
          <a className="homeHeader__city">電影</a>
          <Link to="/search" className="homeHeader__search">輸入名稱</Link>
          <Link to="/user" className="homeHeader__self">
            <div className="homeHeader__portrait" />
          </Link>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
