import React, { Component } from "react";
import "./style.css";

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <header className="homeHeader__wrapper">
          <a className="homeHeader__city">電影</a>
          <a className="homeHeader__search">輸入名稱</a>
          <a className="homeHeader__self">
            <div className="homeHeader__portrait" />
          </a>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
