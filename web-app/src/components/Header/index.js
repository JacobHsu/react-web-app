//商品詳情有header 購買頁有header 不同樣式 所以設計成通用header 支持樣式替換
import React, { Component } from "react";
import './style.css';

class Header extends Component {
  render() {
    const { grey, title, onBack } = this.props; //接收標題和背景樣式設定
    const backgroundColor = grey ? "#f0f0f0" : "#fff"; //grey white
    return (
      <header className="header" style={{ backgroundColor: backgroundColor }}>
        <div className="header__back" onClick={onBack}>
          返回
        </div>
        <div className="header__title">{title}</div>
      </header>
    );
  }

  handleBack = () => {};
}

export default Header;
